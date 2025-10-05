import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../layout-2col.css'

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

  // UI: Suche & Accordion-State
  const [query, setQuery] = useState('')
  const [collapsed, setCollapsed] = useState(() => new Set()) // chapter IDs

  // Save-Indikator (für Szenen-Editor)
  const [saveState, setSaveState] = useState('idle') // 'idle' | 'saving' | 'saved'
  const [lastSavedAt, setLastSavedAt] = useState(null)

  const saveTimer = useRef(null)
  const textareaRef = useRef(null)
  const debounce = (fn) => { clearTimeout(saveTimer.current); saveTimer.current = setTimeout(fn, 600) }

  const activeChapter = useMemo(
    () => chapters.find(c => c.id === activeChapterId) || null,
    [chapters, activeChapterId]
  )
  const activeScene = useMemo(
    () => (activeChapter?.scenes || []).find(s => s.id === activeSceneId) || null,
    [activeChapter, activeSceneId]
  )
  const inChapterOverview = !!activeChapter && !activeScene

  // Wörter/Zeichen/Lesedauer für Editor
  const metrics = useMemo(() => {
    const words = (sceneContent || '').trim().split(/\s+/).filter(Boolean).length
    const chars = (sceneContent || '').length
    const minutes = Math.max(1, Math.round(words / 200))
    return { words, chars, minutes }
  }, [sceneContent])

  // Suche/Filter
  const filteredChapters = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return chapters
    return chapters.filter(ch => {
      if ((ch.title || '').toLowerCase().includes(q)) return true
      return (ch.scenes || []).some(sc => (sc.title || '').toLowerCase().includes(q))
    })
  }, [chapters, query])

  useEffect(() => {
    (async () => {
      setLoading(true); setError('')
      try {
        const res = await fetch(`/api/projects/${pid}`)
        if (!res.ok) throw new Error('HTTP ' + res.status)
        const data = await res.json()
        setProject({ id: data.id, title: data.title })
        const chs = (data.chapters || []).map(ch => ({ ...ch, scenes: ch.scenes || [] }))
        setChapters(chs)
        // Initial: Kapitel 1 anzeigen (Übersicht), keine Szene aktiv
        const ch0 = chs[0]
        if (ch0) { setActiveChapterId(ch0.id); setActiveSceneId(null) }
      } catch (e) { console.error(e); setError('Projekt konnte nicht geladen werden.') }
      finally { setLoading(false) }
    })()
  }, [pid])

  useEffect(() => {
    if (!activeScene) return
    setSceneTitle(activeScene.title || '')
    setSceneContent(activeScene.content || '')
    setSaveState('idle')
  }, [activeSceneId]) // eslint-disable-line

  const postJSON = (url, body) => fetch(url, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body||{}) })
  const putJSON  = (url, body) => fetch(url, { method:'PUT',  headers:{'Content-Type':'application/json'}, body: JSON.stringify(body||{}) })
  const del      = (url)      => fetch(url, { method:'DELETE' })

  async function addChapter() {
    const title = `Kapitel ${chapters.length + 1}`
    const res = await postJSON(`/api/projects/${pid}/chapters`, { title })
    if (!res.ok) return alert('Kapitel konnte nicht angelegt werden.')
    const ch = await res.json()
    const newCh = { ...ch, scenes: [] }
    setChapters(prev => [...prev, newCh])
    setActiveChapterId(newCh.id)
    setActiveSceneId(null) // Übersicht
  }

  async function removeChapter(chId) {
    if (!confirm('Kapitel wirklich löschen?')) return
    const res = await del(`/api/chapters/${chId}`)
    if (!res.ok) return alert('Löschen fehlgeschlagen.')
    setChapters(prev => prev.filter(c => c.id !== chId))
    if (activeChapterId === chId) {
      const first = chapters.find(c => c.id !== chId)
      setActiveChapterId(first?.id || null)
      setActiveSceneId(null)
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
    setChapters(prev => prev.map(c => c.id === chId ? { ...c, scenes:[...c.scenes, sc] } : c))
    // Nach dem Anlegen direkt in den Editor wechseln:
    setActiveChapterId(chId)
    setActiveSceneId(sc.id)
  }

  async function removeScene(scId) {
    if (!confirm('Szene wirklich löschen?')) return
    const res = await del(`/api/scenes/${scId}`)
    if (!res.ok) return alert('Löschen fehlgeschlagen.')
    setChapters(prev => prev.map(c => ({ ...c, scenes:c.scenes.filter(s => s.id !== scId) })))
    if (activeSceneId === scId) {
      setActiveSceneId(null) // zurück zur Kapitel-Übersicht
    }
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

  // Toolbar-Helpers (Markdown Shortcuts)
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

  function toggleCollapsed(chId) {
    setCollapsed(prev => { const n = new Set(prev); n.has(chId) ? n.delete(chId) : n.add(chId); return n })
  }
  function expandAll()   { setCollapsed(new Set()) }
  function collapseAll() { setCollapsed(new Set(chapters.map(c=>c.id))) }

  // kleines Hilfs-Statistik-Widget für Szene-Karten
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

  return (
    <main className="content">
      <div className="two-col">

        {/* LEFT: Kapitel-Liste (Kapitel-Klick => Kapitel-Übersicht rechts) */}
        <aside className="two-col__sidebar">
          <div className="panel chapter-panel">
            <div className="panel-title row" style={{justifyContent:'space-between'}}>
              <span>Kapitel</span>
              <div className="row" style={{gap:6}}>
                <div className="ksearch">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/><path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2"/></svg>
                  <input placeholder="Suchen…" value={query} onChange={e=>setQuery(e.target.value)} />
                </div>
                <button className="btn xsm" onClick={expandAll}>Alles auf</button>
                <button className="btn xsm" onClick={collapseAll}>Alles zu</button>
                <button className="btn xsm primary" onClick={addChapter}>+ Neu</button>
              </div>
            </div>

            <ul className="chap-cards">
              {filteredChapters.map((ch, idx) => {
                const isActive = activeChapterId === ch.id
                const isCollapsed = collapsed.has(ch.id)
                const count = ch.scenes?.length || 0
                return (
                  <li key={ch.id} className={'chap-card' + (isActive ? ' active' : '')}>
                    <div
                      className="chap-head"
                      onClick={() => { setActiveChapterId(ch.id); setActiveSceneId(null) }} // -> Übersicht rechts
                    >
                      <div className="chap-meta">
                        <span className="chap-num">{String(idx + 1).padStart(2,'0')}</span>
                        <span className="chap-title-text" title={ch.title || 'Kapitel'}>{ch.title || 'Kapitel'}</span>
                      </div>
                      <div className="chap-actions">
                        <span className="scene-count">{count}</span>
                        <button className="icon-btn" title="Szene hinzufügen" onClick={(ev)=>{ev.stopPropagation(); addScene(ch.id)}}>＋</button>
                        <button className="icon-btn" title="Kapitel löschen" onClick={(ev)=>{ev.stopPropagation(); removeChapter(ch.id)}}>🗑</button>
                        <button className={'collapse-btn' + (isCollapsed ? ' is-collapsed':'')} onClick={(ev)=>{ev.stopPropagation(); toggleCollapsed(ch.id)}} aria-label="auf/zu">⌃</button>
                      </div>
                    </div>

                    {!isCollapsed && (
                      <ul className="scene-list">
                        {(ch.scenes || []).map(sc => (
                          <li key={sc.id} className={'scene-item' + (activeSceneId === sc.id ? ' current' : '')}>
                            <button className="scene-link" onClick={() => { setActiveChapterId(ch.id); setActiveSceneId(sc.id) }}>
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

        {/* RIGHT: Entweder Kapitel-Übersicht ODER Szenen-Editor */}
        <section className="two-col__main">
          {/* Breadcrumb */}
          <div className="editor-head row" style={{justifyContent:'space-between'}}>
            <div className="row" style={{gap:10}}>
              <div className="crumb">{project?.title}</div>
              <span className="crumb sep">/</span>
              {inChapterOverview ? (
                <div className="crumb strong">{activeChapter?.title || 'Kapitel'}</div>
              ) : (
                <>
                  <div className="crumb">{activeChapter?.title || 'Kapitel'}</div>
                  <span className="crumb sep">/</span>
                  <div className="crumb strong">{activeScene?.title || 'Neue Szene'}</div>
                </>
              )}
            </div>

            <div className="row" style={{gap:8}}>
              {inChapterOverview ? (
                <span className="chip">{activeChapter?.scenes?.length || 0} Szenen</span>
              ) : (
                <>
                  <SaveChip state={saveState} time={lastSavedAt} />
                  <span className="chip">{metrics.words} Wörter</span>
                  <span className="chip">{metrics.chars} Zeichen</span>
                  <span className="chip">⏱ {metrics.minutes} min</span>
                </>
              )}
            </div>
          </div>

          {/* Kapitel-Übersicht */}
          {inChapterOverview && (
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
                          <button className="scene-card-title" onClick={() => setActiveSceneId(sc.id)}>
                            {sc.title || 'Neue Szene'}
                          </button>
                          <button className="icon-btn" title="Szene löschen" onClick={()=>removeScene(sc.id)}>🗑</button>
                        </div>
                        <p className="scene-card-snippet">{snippetOf(sc)}</p>
                        <div className="scene-card-meta">
                          <span className="chip">{wordsOf(sc)} Wörter</span>
                          <button className="btn xsm" onClick={() => setActiveSceneId(sc.id)}>Öffnen</button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </>
          )}

          {/* Szenen-Editor */}
          {!inChapterOverview && activeScene && (
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

              <div className="panel">
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
                    <span className="muted">Projekt: {project?.id ?? '-'}</span>
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
