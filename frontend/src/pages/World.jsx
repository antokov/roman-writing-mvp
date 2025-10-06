import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProject, listWorldItems, createWorldItem, updateWorldItem, deleteWorldItem } from '../lib/api.js'
import GraphModal from '../components/GraphModal.jsx'
import '../projectview.css'
import '../layout-2col.css'

const REL_TYPES = [
  'Teil von','Hat Teil','Ort in','Beherbergt','Regiert','Wird regiert von',
  'Hauptstadt von','Hat Hauptstadt','Mitglied von','Hat Mitglied',
  'Übergeordnet','Untergeordnet','Verbündet','Konkurriert','Handelt mit'
]
const KINDS = ['Allgemein','Organisation','Kirche','Gilde','Beruf','Königreich','Land','Region','Stadt','Ort','Rang/Titel']

export default function World(){
  const { id } = useParams()
  const pid = Number(id)

  const [project, setProject] = useState(null)
  const [list, setList] = useState([])
  const [activeId, setActiveId] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showGraph, setShowGraph] = useState(false)

  // Tabs
  const [tab, setTab] = useState('general') // 'general' | 'relations'

  // form
  const [name, setName] = useState('')
  const [kind, setKind] = useState('Allgemein')
  const [description, setDescription] = useState('')
  const [relations, setRelations] = useState([])
  const [relSaving, setRelSaving] = useState(false)

  const active = useMemo(()=>list.find(x => x.id === activeId) || null,[list,activeId])

  const debounceRef = useRef(null)
  const debounce = useCallback((fn, ms=600) => { clearTimeout(debounceRef.current); debounceRef.current = setTimeout(fn, ms) }, [])
  const relSkipNextSave = useRef(false)
  const relDeb = useRef(null)

  useEffect(()=>{
    (async ()=>{
      setLoading(true); setError('')
      try{
        const p = await getProject(pid); setProject(p)
        const items = await listWorldItems(pid); setList(items)
        if(items[0]){ setActiveId(items[0].id); hydrate(items[0]) }
      }catch(e){ console.error(e); setError('Elemente konnten nicht geladen werden.') }
      finally{ setLoading(false) }
    })()
  },[pid])

  useEffect(()=>{ if(active) hydrate(active) },[activeId]) // eslint-disable-line

  function hydrate(it){
    setName(it.name || '')
    setKind(it.kind || 'Allgemein')
    setDescription(it.description || '')
    // Beziehungen hydratisieren, ohne sofort zu speichern
    relSkipNextSave.current = true
    setRelations(Array.isArray(it.relations)? it.relations.map(r=>({...r})) : [])
  }

  async function addItem(){
    try{
      const created = await createWorldItem(pid,{ name:'Neues Element', kind:'Allgemein', description:'', relations:[], props:{} })
      setList(prev => [...prev, created]); setActiveId(created.id)
    }catch{ alert('Anlegen fehlgeschlagen.') }
  }

  async function removeItem(id){
    if(!confirm('Welt-Element wirklich löschen?')) return
    try{
      await deleteWorldItem(id)
      setList(prev => prev.filter(x => x.id !== id))
      if(activeId === id){
        const first = list.find(x => x.id !== id)
        setActiveId(first?.id || null)
      }
    }catch{ alert('Löschen fehlgeschlagen.') }
  }

  function onField(field, value){
    if(!activeId) return
    if(field==='name') setName(value)
    if(field==='kind') setKind(value)
    if(field==='description') setDescription(value)

    setList(prev => prev.map(x => x.id === activeId ? { ...x, [field]: value } : x))

    debounce(async ()=>{
      try{ await updateWorldItem(activeId, { name, kind, description, [field]: value }) }
      catch(e){ console.error(e) }
    })
  }

  // ----- Beziehungen (Autosave) -----
  const candidates = useMemo(()=> list.filter(x => x.id !== activeId), [list,activeId])

  function addRel(){
    setRelations(prev => [...prev, {
      toId: candidates[0]?.id ?? null,
      type: 'Teil von',
      strength: 3,
      notes: ''
    }])
  }
  function editRel(i, patch){ setRelations(prev => prev.map((r,idx)=> idx===i ? { ...r, ...patch } : r)) }
  function delRel(i){ setRelations(prev => prev.filter((_,idx)=> idx!==i)) }

  useEffect(()=>{
    if(!activeId) return
    if(relSkipNextSave.current){ relSkipNextSave.current = false; return }
    const canSave = relations.every(r => typeof r.toId === 'number' && !Number.isNaN(r.toId))
    if(!canSave) return
    setRelSaving(true)
    clearTimeout(relDeb.current)
    relDeb.current = setTimeout(async ()=>{
      try{
        const updated = await updateWorldItem(activeId, { relations })
        setList(prev => prev.map(x => x.id === updated.id ? updated : x))
        // Gegenseite direkt aktualisieren
        const fresh = await listWorldItems(pid)
        setList(fresh)
      }catch(e){ console.error(e) }
      finally{ setRelSaving(false) }
    }, 700)
  },[relations, activeId, pid])

  return (
    <main className="content">
      <div className="page-head">
        <div className="page-crumbs">
          <span className="crumb strong">{project?.title || 'Projekt'}</span>
          <span className="sep">·</span>
          <span className="crumb">Welt</span>
        </div>
        <div className="page-meta">
          <span className="chip">{list.length} Einträge</span>
          <button className="btn sm ghost" style={{marginLeft:8}} onClick={()=>setShowGraph(true)}>Graph</button>
        </div>
      </div>

      {error && <p style={{color:'crimson', marginTop:0}}>{error}</p>}

      <div className="two-col equalize">
        <aside className="two-col__sidebar">
          <div className="panel fill">
            <div className="panel-title row">
              <span>Welt-Elemente</span>
              <button className="btn sm" onClick={addItem}>+ Neu</button>
            </div>
            {loading ? (
              <div className="empty"><p className="muted">Lade…</p></div>
            ) : list.length===0 ? (
              <div className="empty">
                <p className="muted">Du hast noch keine Welt-Elemente.</p>
                <button className="btn" onClick={addItem}>+ Erstes Element anlegen</button>
              </div>
            ) : (
              <ul className="klist slim">
                {list.map((it, idx)=>(
                  <li key={it.id} className={'kitem tile '+(activeId===it.id?'active':'')}>
                    <div className="krow tile-head" onClick={()=>setActiveId(it.id)} role="button" tabIndex={0}>
                      <span className="ordinal">{String(idx+1).padStart(2,'0')}</span>
                      <span className="ktitle" title={it.name || 'Unbenannt'}>{it.name?.trim() || 'Unbenannt'}</span>
                      <div className="kactions">
                        <button className="icon-btn" title="Löschen" onClick={(ev)=>{ev.stopPropagation(); removeItem(it.id)}}>🗑</button>
                      </div>
                    </div>
                    {activeId===it.id && (
                      <div className="tile-body subtle">
                        <div className="dot-row"><span className="dot"/><span className="muted">{it.kind || '–'}</span></div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>

        <section className="two-col__main">
          {list.length===0 || !active ? (
            <div className="panel grow empty center">
              <h3 style={{margin:0}}>Kein Element ausgewählt</h3>
              <p className="muted" style={{marginTop:4}}>Lege links ein Element an oder wähle eines aus.</p>
            </div>
          ) : (
            <div className="panel grow">
              <div className="row" style={{gap:8, marginBottom:10, alignItems:'center'}}>
                <input className="input" style={{flex:1}} placeholder="Name" value={name} onChange={e=>onField('name', e.target.value)} />
                <select className="input" style={{width:220}} value={kind} onChange={e=>onField('kind', e.target.value)}>
                  {KINDS.map(k => <option key={k} value={k}>{k}</option>)}
                </select>
              </div>

              <div className="tabs">
                <button className={'tab-btn ' + (tab==='general'?'active':'')} onClick={()=>setTab('general')}>Allgemein</button>
                <button className={'tab-btn ' + (tab==='relations'?'active':'')} onClick={()=>setTab('relations')}>Beziehungen</button>
              </div>

              {tab === 'general' && (
                <div className="tab-body">
                  <textarea className="editor" placeholder="Beschreibung …" value={description} onChange={e=>onField('description', e.target.value)} />
                </div>
              )}

              {tab === 'relations' && (
                <div className="tab-body">
                  <div className="row" style={{justifyContent:'space-between', alignItems:'center', marginBottom:8}}>
                    <h4 style={{margin:0}}>Beziehungen</h4>
                    <div className="row" style={{gap:8, alignItems:'center'}}>
                      <span className="muted" style={{fontSize:12}}>{relSaving ? 'Speichert…' : 'Alle Änderungen gespeichert'}</span>
                      <button className="btn sm ghost" onClick={addRel}>+ Beziehung hinzufügen</button>
                    </div>
                  </div>

                  {relations.length===0 ? (
                    <p className="muted">Noch keine Beziehungen.</p>
                  ) : (
                    <div className="rel-table">
                      <div className="rel-header">
                        <span>Ziel</span><span>Typ</span><span>Stärke</span><span>Notizen</span><span/>
                      </div>
                      {relations.map((r,i)=>(
                        <div className="rel-row" key={i}>
                          <select className="input" value={r.toId ?? ''} onChange={e=>editRel(i, { toId:Number(e.target.value)||null })}>
                            {candidates.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                          </select>
                          <select className="input" value={r.type} onChange={e=>editRel(i, { type:e.target.value })}>
                            {REL_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                          </select>
                          <input className="input" value={String(r.strength ?? 3)} onChange={e=>editRel(i, { strength: clamp(e.target.value,1,5) })} />
                          <input className="input" placeholder="Notizen" value={r.notes||''} onChange={e=>editRel(i, { notes:e.target.value })} />
                          <button className="icon-btn" title="Entfernen" onClick={()=>delRel(i)}>🗑</button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </section>
      </div>

      {showGraph && <GraphModal projectId={pid} path="world-graph" onClose={()=>setShowGraph(false)} />}
    </main>
  )
}

function clamp(v,min,max){
  const n = Number(String(v).replace(/[^\d]/g,'')) || min
  return Math.max(min, Math.min(max, n))
}
