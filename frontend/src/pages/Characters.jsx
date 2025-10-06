import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import {
  getProject, listCharacters, createCharacter, updateCharacter, deleteCharacter
} from '../lib/api.js'
import GraphModal from '../components/GraphModal.jsx'
import '../projectview.css'
import '../layout-2col.css'

export default function Characters() {
  const { id } = useParams()
  const pid = Number(id)

  const [project, setProject] = useState(null)
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [activeId, setActiveId] = useState(null)

  // basic
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [age, setAge] = useState('')
  const [description, setDesc] = useState('')

  // profile (Steckbrief)
  const [profile, setProfile] = useState({
    avatarUrl: '', pitch: '', goal: '', conflict: '',
    affiliations: [], strengths: [], weaknesses: [],
    voice: '', traits: '', secret: '',
    birthplace: '', residence: '', occupation: '',
    appearance: '', height: '', hairColor: '', eyeColor: '',
    skills: [], backstory: ''
  })

  // relations (Tab)
  const [relItems, setRelItems] = useState([])
  const [relSaving, setRelSaving] = useState(false)

  const [tab, setTab] = useState('general') // general | personality | background | skills | relations | notes
  const [showGraph, setShowGraph] = useState(false)

  const saveRef = useRef(null)
  const debounce = useCallback((fn, ms = 600) => { clearTimeout(saveRef.current); saveRef.current = setTimeout(fn, ms) }, [])
  const active = useMemo(() => list.find(c => c.id === activeId) || null, [list, activeId])

  // Autosave Guards für Beziehungen
  const relSaveRef = useRef(null)
  const relSkipNextSave = useRef(false)

  useEffect(() => {
    (async () => {
      setLoading(true); setError('')
      try {
        const p = await getProject(pid)
        setProject({ id: p.id, title: p.title })
        const data = await listCharacters(pid)
        setList(data)
        if (data[0]) {
          setActiveId(data[0].id)
          hydrateForm(data[0])
        }
      } catch (e) {
        console.error(e); setError('Charaktere konnten nicht geladen werden.')
      } finally { setLoading(false) }
    })()
  }, [pid])

  useEffect(() => { if (active) hydrateForm(active) }, [activeId]) // eslint-disable-line

  function hydrateForm(c) {
    setName(c.name || '')
    setRole(c.role || '')
    setAge(c.age != null && c.age !== '' ? String(c.age) : '')
    setDesc(c.description || '')

    const prof = c.profile || {}
    setProfile({
      avatarUrl: prof.avatarUrl || '',
      pitch: prof.pitch || '',
      goal: prof.goal || '',
      conflict: prof.conflict || '',
      affiliations: Array.isArray(prof.affiliations) ? prof.affiliations : [],
      strengths: Array.isArray(prof.strengths) ? prof.strengths : [],
      weaknesses: Array.isArray(prof.weaknesses) ? prof.weaknesses : [],
      voice: prof.voice || '',
      traits: prof.traits || '',
      secret: prof.secret || '',
      birthplace: prof.birthplace || '',
      residence: prof.residence || '',
      occupation: prof.occupation || '',
      appearance: prof.appearance || '',
      height: prof.height || '',
      hairColor: prof.hairColor || '',
      eyeColor: prof.eyeColor || '',
      skills: Array.isArray(prof.skills) ? prof.skills : [],
      backstory: prof.backstory || ''
    })

    // Beziehungen hydratisieren (ohne Autosave auszulösen)
    relSkipNextSave.current = true
    setRelItems(Array.isArray(c.relations) ? c.relations.map(r => ({ ...r })) : [])
  }

  async function addCharacter() {
    try {
      const c = await createCharacter(pid, {
        name: 'Neuer Charakter', role: '', age: '', description: '',
        relations: [], profile: {}
      })
      setList(prev => [...prev, c]); setActiveId(c.id)
    } catch { alert('Anlegen fehlgeschlagen.') }
  }

  async function removeCharacter(cid) {
    if (!confirm('Charakter wirklich löschen?')) return
    try {
      await deleteCharacter(cid)
      setList(prev => prev.filter(c => c.id !== cid))
      if (activeId === cid) {
        const first = list.find(c => c.id !== cid)
        setActiveId(first?.id || null)
      }
    } catch { alert('Löschen fehlgeschlagen.') }
  }

  function onChangeField(field, value) {
    if (!activeId) return
    if (field === 'name') setName(value)
    if (field === 'role') setRole(value)
    if (field === 'age') setAge(value)
    if (field === 'description') setDesc(value)

    setList(prev => prev.map(c => c.id === activeId
      ? { ...c, [field]: field === 'age' ? (value === '' ? '' : Number(value)) : value }
      : c))

    debounce(async () => {
      try {
        await updateCharacter(activeId, {
          name, role, age: (age === '' ? '' : Number(age)), description,
          ...(field === 'age' ? { age: (value === '' ? '' : Number(value)) } : { [field]: value })
        })
      } catch (e) { console.error(e) }
    })
  }

  function onChangeProfile(key, val) {
    if (!activeId) return
    const next = { ...profile, [key]: val }
    setProfile(next)
    setList(prev => prev.map(c => c.id === activeId ? { ...c, profile: next } : c))
    debounce(async () => {
      try { await updateCharacter(activeId, { profile: { ...next } }) } catch (e) { console.error(e) }
    })
  }

  // helpers for arrays (weiterhin für andere Felder genutzt)
  function arrayToInput(arr){ return (arr || []).join(', ') }
  function inputToArray(str){ return (str||'').split(',').map(s=>s.trim()).filter(Boolean) }

  // ---------- Beziehungen (im Tab) ----------
  const candidateChars = useMemo(
    () => list.filter(c => c.id !== activeId),
    [list, activeId]
  )

  function addRelationRow(){
    setRelItems(prev => [...prev, {
      toId: candidateChars[0]?.id ?? null,
      type: 'Freund',
      strength: 3,
      notes: ''
    }])
  }
  function editRelRow(i, patch){ setRelItems(prev => prev.map((x, idx) => idx === i ? { ...x, ...patch } : x)) }
  function removeRelRow(i){ setRelItems(prev => prev.filter((_, idx) => idx !== i)) }

  // ✅ AUTOSAVE bei Änderungen an relItems (debounced)
  useEffect(() => {
    if (!activeId) return
    if (relSkipNextSave.current) { relSkipNextSave.current = false; return }
    const canSave = relItems.every(r => typeof r.toId === 'number' && !Number.isNaN(r.toId))
    if (!canSave) return
    setRelSaving(true)
    clearTimeout(relSaveRef.current)
    relSaveRef.current = setTimeout(async () => {
      try {
        const updated = await updateCharacter(activeId, { relations: relItems })
        setList(prev => prev.map(c => c.id === updated.id ? updated : c))
        const data = await listCharacters(pid)   // Gegenseite direkt aktualisieren
        setList(data)
      } catch (e) {
        console.error(e)
      } finally {
        setRelSaving(false)
      }
    }, 700)
  }, [relItems, activeId, pid])

  function openGraph(){ setShowGraph(true) }

  if (loading) return <main className="content"><p>Lade…</p></main>

  return (
    <main className="content">
      <div className="page-head">
        <div className="page-crumbs">
          <span className="crumb strong">{project?.title || 'Projekt'}</span>
          <span className="sep">·</span>
          <span className="crumb">Charaktere</span>
        </div>
        <div className="page-meta">
          <span className="chip">{list.length} Einträge</span>
          <button className="btn sm ghost" style={{marginLeft:8}} onClick={openGraph}>Graph</button>
        </div>
      </div>

      {error && <p style={{ color:'crimson', marginTop:0 }}>{error}</p>}

      <div className="two-col equalize">
        {/* Sidebar */}
        <aside className="two-col__sidebar">
          <div className="panel fill">
            <div className="panel-title row">
              <span>Charaktere</span>
              <button className="btn sm" onClick={addCharacter}>+ Neu</button>
            </div>

            {list.length === 0 ? (
              <div className="empty">
                <p className="muted">Du hast noch keinen Charakter.</p>
                <button className="btn" onClick={addCharacter}>+ Ersten Charakter erstellen</button>
              </div>
            ) : (
              <ul className="klist slim">
                {list.map((c, idx) => {
                  const isActive = activeId === c.id
                  const relCount = Array.isArray(c.relations) ? c.relations.length : 0
                  return (
                    <li key={c.id} className={'kitem tile ' + (isActive ? 'active' : '')}>
                      <div className="krow tile-head" onClick={() => setActiveId(c.id)} role="button" tabIndex={0}>
                        <span className="ordinal">{String(idx + 1).padStart(2, '0')}</span>
                        <span className="ktitle" title={c.name || 'Unbenannt'}>{c.name?.trim() || 'Unbenannt'}</span>
                        <span className="bubble muted small" title="Beziehungen">{relCount}</span>
                        <div className="kactions">
                          <button className="icon-btn" title="Löschen" onClick={(ev)=>{ev.stopPropagation(); removeCharacter(c.id)}}>🗑</button>
                        </div>
                      </div>
                      {isActive && (
                        <div className="tile-body subtle">
                          <div className="dot-row"><span className="dot" /><span className="muted">{(c.role||'–')}</span></div>
                          <div className="dot-row"><span className="dot" /><span className="muted">
                            {c.age !== '' && c.age != null && isFinite(Number(c.age)) ? `${c.age} Jahre` : '–'}
                          </span></div>
                        </div>
                      )}
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </aside>

        {/* Main */}
        <section className="two-col__main">
          {list.length === 0 || !active ? (
            <div className="panel grow empty center">
              <h3 style={{ margin: 0 }}>Du hast noch keinen Charakter</h3>
              <p className="muted" style={{ marginTop: 4 }}>Lege deinen ersten Charakter an, um Details zu bearbeiten.</p>
              <button className="btn" onClick={addCharacter}>+ Ersten Charakter erstellen</button>
            </div>
          ) : (
            <div className="panel grow">
              {/* Header-Zeile */}
              <div className="row" style={{ gap: 8, marginBottom: 10, alignItems:'center' }}>
                <input className="input" style={{ flex: 1 }} placeholder="Name" value={name} onChange={e => onChangeField('name', e.target.value)} />
                <input className="input" style={{ flex: 1 }} placeholder="Rolle (z.B. Protagonist)" value={role} onChange={e => onChangeField('role', e.target.value)} />
                <input className="input" style={{ width: 120 }} placeholder="Alter" value={age} onChange={e => onChangeField('age', e.target.value.replace(/[^\d]/g,''))} />
              </div>

              {/* Tabs */}
              <div className="tabs">
                <button className={'tab-btn ' + (tab==='general'?'active':'')} onClick={()=>setTab('general')}>Allgemein</button>
                <button className={'tab-btn ' + (tab==='personality'?'active':'')} onClick={()=>setTab('personality')}>Persönlichkeit</button>
                <button className={'tab-btn ' + (tab==='background'?'active':'')} onClick={()=>setTab('background')}>Hintergrund</button>
                <button className={'tab-btn ' + (tab==='skills'?'active':'')} onClick={()=>setTab('skills')}>Fähigkeiten</button>
                <button className={'tab-btn ' + (tab==='relations'?'active':'')} onClick={()=>setTab('relations')}>Beziehungen</button>
                <button className={'tab-btn ' + (tab==='notes'?'active':'')} onClick={()=>setTab('notes')}>Notizen</button>
              </div>

              {/* Tab Inhalte */}
              {tab === 'general' && (
                <div className="tab-body">
                  <div className="grid two gap16">
                    <div>
                      <textarea className="editor sm" placeholder="Kurzpitch (1–2 Sätze)" value={profile.pitch} onChange={e=>onChangeProfile('pitch', e.target.value)} />
                      <div className="row" style={{gap:8, marginTop:8}}>
                        <input className="input" placeholder="Ziel (1 Satz)" value={profile.goal} onChange={e=>onChangeProfile('goal', e.target.value)} />
                        <input className="input" placeholder="Konflikt (1 Satz)" value={profile.conflict} onChange={e=>onChangeProfile('conflict', e.target.value)} />
                      </div>
                      <input className="input" style={{marginTop:8}} placeholder="Zugehörigkeiten/Fraktionen (kommasepariert)"
                        value={arrayToInput(profile.affiliations)} onChange={e=>onChangeProfile('affiliations', inputToArray(e.target.value))} />
                    </div>
                    <div className="avatar-box">
                      {profile.avatarUrl ? (
                        <img src={profile.avatarUrl} alt="Avatar" className="avatar-img" onError={(e)=>{e.currentTarget.style.display='none'}} />
                      ) : (
                        <div className="avatar-ph">{(name||'?').substring(0,1).toUpperCase()}</div>
                      )}
                      <input className="input" placeholder="Bild-URL einfügen…" value={profile.avatarUrl} onChange={e=>onChangeProfile('avatarUrl', e.target.value)} />
                    </div>
                  </div>
                </div>
              )}

              {tab === 'personality' && (
                <div className="tab-body">
                  <div className="grid two gap16">
                    <div>
                      <input className="input" placeholder="Stärken (kommasepariert)" value={arrayToInput(profile.strengths)} onChange={e=>onChangeProfile('strengths', inputToArray(e.target.value))} />
                      <input className="input" style={{marginTop:8}} placeholder="Schwächen (kommasepariert)" value={arrayToInput(profile.weaknesses)} onChange={e=>onChangeProfile('weaknesses', inputToArray(e.target.value))} />
                      <input className="input" style={{marginTop:8}} placeholder="Stimme & Stil (3 Stichwörter)" value={profile.voice} onChange={e=>onChangeProfile('voice', e.target.value)} />
                    </div>
                    <div>
                      <input className="input" placeholder="Persönlichkeitsmerkmale (frei)" value={profile.traits} onChange={e=>onChangeProfile('traits', e.target.value)} />
                      <textarea className="editor sm" style={{marginTop:8}} placeholder="Geheimnis / Wunde (privat)" value={profile.secret} onChange={e=>onChangeProfile('secret', e.target.value)} />
                    </div>
                  </div>
                </div>
              )}

              {tab === 'background' && (
                <div className="tab-body">
                  <div className="grid two gap16">
                    <div>
                      <input className="input" placeholder="Geburtsort" value={profile.birthplace} onChange={e=>onChangeProfile('birthplace', e.target.value)} />
                      <input className="input" style={{marginTop:8}} placeholder="Wohnort" value={profile.residence} onChange={e=>onChangeProfile('residence', e.target.value)} />
                      <input className="input" style={{marginTop:8}} placeholder="Beruf/Zugehörigkeit" value={profile.occupation} onChange={e=>onChangeProfile('occupation', e.target.value)} />
                    </div>
                    <div>
                      <div className="row" style={{gap:8}}>
                        <input className="input" placeholder="Größe/Größe" value={profile.height} onChange={e=>onChangeProfile('height', e.target.value)} />
                        <input className="input" placeholder="Haarfarbe" value={profile.hairColor} onChange={e=>onChangeProfile('hairColor', e.target.value)} />
                        <input className="input" placeholder="Augenfarbe" value={profile.eyeColor} onChange={e=>onChangeProfile('eyeColor', e.target.value)} />
                      </div>
                      <textarea className="editor sm" style={{marginTop:8}} placeholder="Aussehen (Silhouette, Merkmale …)" value={profile.appearance} onChange={e=>onChangeProfile('appearance', e.target.value)} />
                    </div>
                  </div>
                  <textarea className="editor" style={{marginTop:12}} placeholder="Biografie / Hintergrund" value={profile.backstory} onChange={e=>onChangeProfile('backstory', e.target.value)} />
                </div>
              )}

              {tab === 'skills' && (
                <div className="tab-body">
                  <TagInput
                    placeholder="Fähigkeit eingeben und Enter/Komma drücken …"
                    value={profile.skills}
                    onChange={(arr)=>onChangeProfile('skills', arr)}
                  />
                </div>
              )}

              {tab === 'relations' && (
                <div className="tab-body">
                  <div className="row" style={{justifyContent:'space-between', alignItems:'center', marginBottom:8}}>
                    <h4 style={{margin:0}}>Beziehungen</h4>
                    <div className="row" style={{gap:8, alignItems:'center'}}>
                      <span className="muted" style={{fontSize:12}}>
                        {relSaving ? 'Speichert…' : 'Alle Änderungen gespeichert'}
                      </span>
                      <button className="btn sm ghost" onClick={addRelationRow}>+ Beziehung hinzufügen</button>
                    </div>
                  </div>

                  {candidateChars.length === 0 && (
                    <p className="muted">Es gibt noch keine weiteren Charaktere. Lege zuerst weitere Figuren an.</p>
                  )}

                  {relItems.length === 0 ? (
                    <p className="muted">Noch keine Beziehungen. Füge oben eine hinzu.</p>
                  ) : (
                    <div className="rel-table">
                      <div className="rel-header">
                        <span>Ziel</span><span>Typ</span><span>Stärke</span><span>Notizen</span><span />
                      </div>
                      {relItems.map((r, i) => (
                        <div className="rel-row" key={i}>
                          <select className="input" value={r.toId ?? ''} onChange={e=>editRelRow(i, { toId: Number(e.target.value)||null })}>
                            {candidateChars.length===0 && <option value="">(keine weiteren Charaktere)</option>}
                            {candidateChars.map(c => <option key={c.id} value={c.id}>{c.name || `#${c.id}`}</option>)}
                          </select>

                          <select className="input" value={r.type} onChange={e=>editRelRow(i, { type: e.target.value })}>
                            <option>Freund</option><option>Feind</option><option>Familie</option>
                            <option>Mentor</option><option>Schüler</option>
                            <option>Liebe</option><option>Kollege</option><option>Kennt</option>
                          </select>

                          <input className="input" value={String(r.strength ?? 3)} onChange={e=>editRelRow(i,{ strength: clampInt(e.target.value,1,5) })} />

                          <input className="input" placeholder="Notizen" value={r.notes||''} onChange={e=>editRelRow(i, { notes: e.target.value })} />

                          <button className="icon-btn" title="Entfernen" onClick={()=>removeRelRow(i)}>🗑</button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {tab === 'notes' && (
                <div className="tab-body">
                  <textarea className="editor" placeholder="Freie Notizen …" value={description} onChange={e => onChangeField('description', e.target.value)} />
                </div>
              )}
            </div>
          )}
        </section>
      </div>

      {showGraph && (
        <GraphModal projectId={pid} onClose={()=>setShowGraph(false)} />
      )}
    </main>
  )
}

// utils
function clampInt(v, min, max){
  const n = Number(String(v).replace(/[^\d]/g,'')) || min
  return Math.max(min, Math.min(max, n))
}

/* ---------- Kleine, eigenständige Tag-Input Komponente ---------- */
function TagInput({ value = [], onChange, placeholder }) {
  const [text, setText] = useState('')

  function emit(arr){
    // Duplikate (case-insensitive) entfernen, leere ignorieren
    const norm = []
    const seen = new Set()
    for (const raw of arr) {
      const t = String(raw || '').trim()
      if (!t) continue
      const key = t.toLowerCase()
      if (seen.has(key)) continue
      seen.add(key); norm.push(t)
    }
    onChange?.(norm)
  }

  function addFromString(str){
    const parts = String(str).split(/[,\n;]+/).map(s=>s.trim()).filter(Boolean)
    if (parts.length === 0) return
    emit([...(value || []), ...parts])
    setText('')
  }

  function onKeyDown(e){
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      addFromString(text)
    } else if (e.key === 'Backspace' && text === '' && value.length > 0) {
      // letzte Kachel löschen, wenn Feld leer
      const next = value.slice(0, -1)
      emit(next)
    }
  }

  function onPaste(e){
    const s = e.clipboardData?.getData('text') || ''
    if (/[,\n;]/.test(s)) {
      e.preventDefault()
      addFromString(s)
    }
  }

  function removeAt(i){
    const next = (value || []).filter((_, idx) => idx !== i)
    emit(next)
  }

  function onBlur(){
    if (text.trim()) addFromString(text)
  }

  return (
    <div className="tag-input">
      <input
        className="input"
        value={text}
        onChange={e=>setText(e.target.value)}
        onKeyDown={onKeyDown}
        onPaste={onPaste}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      <div className="tags">
        {(value || []).map((t, i) => (
          <span className="tag" key={`${t}-${i}`}>
            {t}
            <button className="tag-x" aria-label={`„${t}“ entfernen`} onClick={()=>removeAt(i)}>×</button>
          </span>
        ))}
      </div>
    </div>
  )
}
