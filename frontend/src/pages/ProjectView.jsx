import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../layout-2col.css'
import '../projectview.css'

export default function ProjectView() {
  const { id } = useParams()
  const pid = Number(id)

  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState('')
  const [project, setProject]   = useState(null)
  const [chapters, setChapters] = useState([])

  const [activeChapterId, setActiveChapterId] = useState(null)
  const [activeSceneId, setActiveSceneId]     = useState(null)

  const [sceneTitle, setSceneTitle]     = useState('')
  const [sceneContent, setSceneContent] = useState('')

  const [query, setQuery] = useState('')

  const [saveState, setSaveState] = useState('idle')
  const [lastSavedAt, setLastSavedAt] = useState(null)

  const saveTimer = useRef(null)
  const textareaRef = useRef(null)
  const debounce = (fn) => { clearTimeout(saveTimer.current); saveTimer.current = setTimeout(fn, 600) }

  const postJSON = (url, body) => fetch(url, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body||{}) })
  const putJSON  = (url, body) => fetch(url, { method:'PUT',  headers:{'Content-Type':'application/json'}, body: JSON.stringify(body||{}) })
  const del      = (url)      => fetch(url, { method:'DELETE' })

  const activeChapter = useMemo(
    () => chapters.find(c => c.id === activeChapterId) || null,
    [chapters, activeChapterId]
  )
  const activeScene = useMemo(
    () => (activeChapter?.scenes || []).find(s => s.id === activeSceneId) || null,
    [activeChapter, activeSceneId]
  )
  const inChapterOverview = !!activeChapter && !activeScene

  const metrics = useMemo(() => {
    const words = (sceneContent || '').trim().split(/\s+/).filter(Boolean).length
    const chars = (sceneContent || '').length
    const minutes = Math.max(1, Math.round(words / 200))
    return { words, chars, minutes }
  }, [sceneContent])

  const filteredChapters = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return chapters
    return chapters.filter(ch => {
      if ((ch.title || '').toLowerCase().includes(q)) return true
      return (ch.scenes || []).some(sc => (sc.title || '').toLowerCase().includes(q))
    })
  }, [chapters, query])

  // Szenen für Kapitel laden (Lazy)
  async function loadScenes(chId) {
    const ch = chapters.find(c => c.id === chId)
    if (ch && ch._loaded) return
    const res = await fetch(`/api/chapters/${chId}/scenes`)
    if (!res.ok) return
    const list = await res.json()
    setChapters(prev => prev.map(c => c.id === chId ? { ...c, scenes: list, _loaded: true } : c))
  }

  // Initial load
  useEffect(() => {
    (async () => {
      setLoading(true); setError('')
      try {
        const res = await fetch(`/api/projects/${pid}`)
        if (!res.ok) throw new Error('HTTP ' + res.status)
        const data = await res.json()
        setProject({ id: data.id, title: data.title })
        // Alle Kapitel initial "zu": scenes=[], _loaded:false
        const chs = (data.chapters || []).map(ch => ({ ...ch, scenes: [], _loaded: false }))
        setChapters(chs)
        const ch0 = chs[0]
        if (ch0) {
          setActiveChapterId(ch0.id)   // -> nur dieses klappt auf
          setActiveSceneId(null)
          await loadScenes(ch0.id)
        }
      } catch (e) { console.error(e); setError('Projekt konnte nicht geladen werden.') }
      finally { setLoading(false) }
    })()
  }, [pid])

  // Editor state setzen wenn Szene wechselt
  useEffect(() => {
    if (!activeScene) return
    setSceneTitle(activeScene.title || '')
    setSceneContent(activeScene.content || '')
    setSaveState('idle')
  }, [activeSceneId]) // eslint-disable-line

  // Flush-Save (für Navigationswechsel/Blur)
  const flushingRef = useRef(false)
  async function flushSceneSaveNow() {
    if (!activeSceneId || flushingRef.current) return
    clearTimeout(saveTimer.current)
    flushingRef.current = true
    try {
      setSaveState('saving')
      const res = await putJSON(`/api/scenes/${activeSceneId}`, { title: sceneTitle, content: sceneContent })
      if (!res.ok) throw new Error('HTTP ' + res.status)
      setSaveState('saved'); setLastSavedAt(new Date())
    } catch (e) { console.error('Flush save failed:', e) }
    finally { flushingRef.current = false }
  }

  useEffect(() => {
    const onBeforeUnload = (e) => {
      if (activeSceneId) {
        flushSceneSaveNow()
        e.preventDefault()
        e.returnValue = ''
      }
    }
    const onVisibilityChange = () => { if (document.visibilityState === 'hidden') flushSceneSaveNow() }
    window.addEventListener('beforeunload', onBeforeUnload)
    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      flushSceneSaveNow()
    }
  }, [activeSceneId, sceneTitle, sceneContent])

  // Kapitel/Szenen – Navigation & CRUD
  async function goToChapterOverview(chId) {
    await flushSceneSaveNow()
    setActiveChapterId(chId)    // nur dieses öffnet
    setActiveSceneId(null)
    await loadScenes(chId)
  }
  async function openScene(chId, scId) {
    await loadScenes(chId)
    await flushSceneSaveNow()
    setActiveChapterId(chId)    // nur dieses öffnet
    setActiveSceneId(scId)
  }

  async function addChapter() {
    const title = `Kapitel ${chapters.length + 1}`
    const res = await postJSON(`/api/projects/${pid}/chapters`, { title })
    if (!res.ok) return alert('Kapitel konnte nicht angelegt werden.')
    const ch = await res.json()
    const newCh = { ...ch, scenes: [], _loaded: false }
    setChapters(prev => [...prev, newCh])
    await flushSceneSaveNow()
    setActiveChapterId(newCh.id)  // öffnet das neue Kapitel
    setActiveSceneId(null)
    setChapters(prev => prev.map(c => c.id === newCh.id ? { ...c, _loaded: true } : c))
  }
  async function removeChapter(chId) {
    if (!confirm('Kapitel wirklich löschen?')) return
    const res = await del(`/api/chapters/${chId}`)
    if (!res.ok) return alert('Löschen fehlgeschlagen.')
    setChapters(prev => prev.filter(c => c.id !== chId))
    if (activeChapterId === chId) {
      await flushSceneSaveNow()
      const first = chapters.find(c => c.id !== chId)
      setActiveChapterId(first?.id || null)
      setActiveSceneId(null)
      if (first) await loadScenes(first.id)
    }
  }
  async function renameChapter(chId, title) {
    setChapters(prev => prev.map(c => c.id === chId ? { ...c, title } : c))
    debounce(async () => { await putJSON(`/api/chapters/${chId}`, { title }) })
  }
  async function addScene(chId) {
    const res = await postJSON(`/api/chapters/${chId}/scenes`, { title:'Neue Szene', content:'' })
    if (!res.ok) return alert('Szene konnte nicht angelegt werden.')
    const sc = await res.json()
    setChapters(prev => prev.map(c => c.id === chId ? { ...c, scenes:[...c.scenes, sc], _loaded: true } : c))
    await flushSceneSaveNow()
    setActiveChapterId(chId)
    setActiveSceneId(sc.id)
  }
  async function removeScene(scId) {
    if (!confirm('Szene wirklich löschen?')) return
    const res = await del(`/api/scenes/${scId}`)
    if (!res.ok) return alert('Löschen fehlgeschlagen.')
    setChapters(prev => prev.map(c => ({ ...c, scenes:c.scenes.filter(s => s.id !== scId) })))
    if (activeSceneId === scId) setActiveSceneId(null)
  }

  function onChangeSceneTitle(e) {
    const val = e.target.value
    setSceneTitle(val)
    setSaveState('saving')
    setChapters(prev => prev.map(c => c.id !== activeChapterId ? c : ({
      ...c,
      scenes: c.scenes.map(s => s.id === activeSceneId ? { ...s, title: val } : s)
    })))
    debounce(async () => {
      await putJSON(`/api/scenes/${activeSceneId}`, { title: val })
      setSaveState('saved'); setLastSavedAt(new Date())
    })
  }
  function onChangeSceneContent(e) {
    const val = e.target.value
    setSceneContent(val)
    setSaveState('saving')
    setChapters(prev => prev.map(c => c.id !== activeChapterId ? c : ({
      ...c,
      scenes: c.scenes.map(s => s.id === activeSceneId ? { ...s, content: val } : s)
    })))
    debounce(async () => {
      await putJSON(`/api/scenes/${activeSceneId}`, { content: val })
      setSaveState('saved'); setLastSavedAt(new Date())
    })
  }

  function insertAroundSelection(prefix, suffix = prefix) {
    const ta = textareaRef.current; if (!ta) return
    const start = ta.selectionStart ?? 0
    const end   = ta.selectionEnd ?? 0
    const before = sceneContent.slice(0, start)
    const selected = sceneContent.slice(start, end)
    const after = sceneContent.slice(end)
    const next = before + prefix + selected + suffix + after
    setSceneContent(next)
    setSaveState('saving')
    debounce(async () => { await putJSON(`/api/scenes/${activeSceneId}`, { content: next }); setSaveState('saved'); setLastSavedAt(new Date()) })
    requestAnimationFrame(() => { ta.focus(); const pos = start + prefix.length + selected.length; ta.setSelectionRange(pos, pos) })
  }
  function insertLine(prefix) {
    const ta = textareaRef.current; if (!ta) return
    const start = ta.selectionStart ?? 0
    const before = sceneContent.slice(0, start)
    const after = sceneContent.slice(start)
    const nl = before.endsWith('\n') ? '' : '\n'
    const next = before + nl + prefix + '\n' + after
    setSceneContent(next)
    setSaveState('saving')
    debounce(async () => { await putJSON(`/api/scenes/${activeSceneId}`, { content: next }); setSaveState('saved'); setLastSavedAt(new Date()) })
    requestAnimationFrame(() => { ta.focus(); const pos = (before + nl + prefix + '\n').length; ta.setSelectionRange(pos, pos) })
  }

  function wordsOf(scene) {
    if (!scene?.content) return 0
    return scene.content.trim().split(/\s+/).filter(Boolean).length
  }
  function snippetOf(scene) {
    const txt = (scene?.content || '').replace(/\s+/g,' ').trim()
    return txt.length > 140 ? txt.slice(0, 140) + '…' : txt
  }

  if (loading) return <main className="content"><p>Lade…</p></main>
  if (error)   return <main className="content"><p>{error}</p></main>

  const sceneCount = activeChapter?.scenes?.length ?? 0

  return (
    <main className="content">

      {/* Kopf über beiden Spalten */}
      <div className="page-head">
        <div className="page-crumbs">
          <div className="crumb">{project?.title || 'Projekt'}</div>
          <span className="crumb sep">/</span>
          <div className="crumb strong">{activeChapter?.title || 'Kapitel'}</div>
        </div>
        <div className="page-meta">
          <span className="chip">{sceneCount} Szenen</span>
        </div>
      </div>

      <div className="two-col equalize">

        {/* LEFT: Kapitel-Liste */}
        <aside className="two-col__sidebar">
          <div className="panel fill">
            <div className="panel-title row" style={{justifyContent:'space-between'}}>
              <span>Kapitel</span>
              <div className="row" style={{gap:6}}>
                <div className="ksearch">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/><path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2"/></svg>
                  <input placeholder="Suchen…" value={query} onChange={e=>setQuery(e.target.value)} />
                </div>
                {/* Schönes Icon: ➕ */}
                <button className="btn xsm primary" onClick={addChapter}>➕ Neu</button>
              </div>
            </div>

            <ul className="chap-cards">
              {filteredChapters.map((ch, idx) => {
                const isActive = activeChapterId === ch.id
                const count = ch.scenes?.length || 0
                return (
                  <li key={ch.id} className={'chap-card' + (isActive ? ' active' : '')}>
                    <div
                      className="chap-head"
                      onClick={() => goToChapterOverview(ch.id)}
                    >
                      <div className="chap-meta">
                        <span className="chap-num">{String(idx + 1).padStart(2,'0')}</span>
                        <span className="chap-title-text" title={ch.title || 'Kapitel'}>{ch.title || 'Kapitel'}</span>
                      </div>
                      <div className="chap-actions">
                        <span className="scene-count">{count}</span>
                        <button className="icon-btn" title="Szene hinzufügen" onClick={(ev)=>{ev.stopPropagation(); addScene(ch.id)}}>＋</button>
                        <button className="icon-btn" title="Kapitel löschen" onClick={(ev)=>{ev.stopPropagation(); removeChapter(ch.id)}}>🗑</button>
                        {/* Auf/Zu-Button pro Kapitel entfernt */}
                      </div>
                    </div>

                    {/* Nur das aktive Kapitel klappt auf */}
                    {isActive && (
                      <ul className="scene-list">
                        {(ch.scenes || []).map(sc => (
                          <li key={sc.id} className={'scene-item' + (activeSceneId === sc.id ? ' current' : '')}>
                            <button className="scene-link" onClick={() => openScene(ch.id, sc.id)}>
                              <span className="dot" />
                              <span className="text">{sc.title || 'Neue Szene'}</span>
                            </button>
                            <button className="scene-del" title="Löschen" onClick={()=>removeScene(sc.id)}>🗑</button>
                          </li>
                        ))}
                        <li><button className="scene-add" onClick={() => addScene(ch.id)}>+ Neue Szene</button></li>
                      </ul>
                    )}
                  </li>
                )
              })}
              {filteredChapters.length === 0 && (
                <li className="empty-hint">Keine Treffer. Suchbegriff anpassen.</li>
              )}
            </ul>
          </div>
        </aside>

        {/* RIGHT: Übersicht ODER Editor */}
        <section className="two-col__main">
          <div className="stack fill">
            {inChapterOverview ? (
              <>
                <div className="panel">
                  <div className="panel-title row">
                    <span>Kapitel</span>
                    <span className="muted">ID {activeChapter?.id ?? '-'}</span>
                  </div>
                  <input
                    className="title-input"
                    placeholder="Kapitelname …"
                    value={activeChapter?.title || ''}
                    onChange={(e) => renameChapter(activeChapterId, e.target.value)}
                  />
                </div>

                <div className="panel">
                  <div className="panel-title row">
                    <span>Szenen in diesem Kapitel</span>
                    <button className="btn sm primary" onClick={() => addScene(activeChapterId)}>+ Neue Szene</button>
                  </div>

                  {(activeChapter?.scenes?.length || 0) === 0 ? (
                    <div className="empty-hint" style={{padding:'12px 0'}}>Noch keine Szenen. Lege die erste Szene an!</div>
                  ) : (
                    <ul className="scene-grid">
                      {activeChapter.scenes.map(sc => (
                        <li key={sc.id} className="scene-card">
                          <div className="scene-card-top">
                            <button className="scene-card-title" onClick={() => openScene(activeChapter.id, sc.id)}>
                              {sc.title || 'Neue Szene'}
                            </button>
                            <button className="icon-btn" title="Szene löschen" onClick={()=>removeScene(sc.id)}>🗑</button>
                          </div>
                          <p className="scene-card-snippet">{snippetOf(sc)}</p>
                          <div className="scene-card-meta">
                            <span className="chip">{wordsOf(sc)} Wörter</span>
                            <button className="btn xsm" onClick={() => openScene(activeChapter.id, sc.id)}>Öffnen</button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="panel">
                  <div className="panel-title row">
                    <span>Szenentitel</span>
                    <span className="muted">Kapitel-ID {activeChapter?.id ?? '-'} · Szene-ID {activeScene?.id ?? '-'}</span>
                  </div>
                  <input
                    className="title-input"
                    placeholder="Titel der Szene …"
                    value={sceneTitle}
                    onChange={onChangeSceneTitle}
                  />
                </div>

                <div className="panel grow">
                  <div className="editor-toolbar">
                    <div className="tools-left">
                      <Tool onClick={() => insertAroundSelection('**')} label="Fett" icon="B" />
                      <Tool onClick={() => insertAroundSelection('_')} label="Kursiv" icon="I" />
                      <div className="tool-sep" />
                      <Tool onClick={() => insertLine('## Überschrift')} label="H2" icon="H2" />
                      <Tool onClick={() => insertLine('> Zitat')} label="Zitat" icon="❝" />
                      <Tool onClick={() => insertLine('- Liste')} label="Liste" icon="•" />
                    </div>
                    <div className="tools-right">
                      <SaveChip state={saveState} time={lastSavedAt} />
                      <span className="chip">{metrics.words} Wörter</span>
                      <span className="chip">{metrics.chars} Zeichen</span>
                      <span className="chip">⏱ {metrics.minutes} min</span>
                    </div>
                  </div>

                  <textarea
                    ref={textareaRef}
                    className="editor"
                    placeholder="Hier schreiben …"
                    value={sceneContent}
                    onChange={onChangeSceneContent}
                  />
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}

/* ---------- kleine UI-Subkomponenten ---------- */
function Tool({ icon, label, onClick }) {
  return (
    <button className="tool-btn" onClick={onClick} title={label}>
      <span className="tool-ico">{icon}</span>
    </button>
  )
}
function SaveChip({ state, time }) {
  if (state === 'saving') return <span className="chip saving">Speichern…</span>
  if (state === 'saved')  return <span className="chip saved">Gespeichert · {time ? time.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}) : ''}</span>
  return <span className="chip">Bereit</span>
}
