import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../layout-2col.css'

export default function World() {
  const { id } = useParams()
  const pid = Number(id)

  const [project, setProject] = useState(null)
  const [places, setPlaces]   = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState('')

  const [activeId, setActiveId] = useState(null)

  const [name, setName]     = useState('')
  const [region, setRegion] = useState('')
  const [desc, setDesc]     = useState('')

  const saveTimer = useRef(null)
  const debounce = (fn) => { clearTimeout(saveTimer.current); saveTimer.current = setTimeout(fn, 500) }

  const active = useMemo(() => places.find(p => p.id === activeId) || null, [places, activeId])

  useEffect(() => {
    (async () => {
      setLoading(true); setError('')
      try {
        const p = await (await fetch(`/api/projects/${pid}`)).json()
        setProject({ id: p.id, title: p.title })

        const res = await fetch(`/api/projects/${pid}/locations`)
        if (!res.ok) throw new Error('HTTP ' + res.status)
        const data = await res.json()  // [{id,name,region,description}]
        setPlaces(data)
        const first = data[0]
        if (first) {
          setActiveId(first.id)
          setName(first.name || '')
          setRegion(first.region || '')
          setDesc(first.description || '')
        }
      } catch (e) { console.error(e); setError('Orte konnten nicht geladen werden.') }
      finally { setLoading(false) }
    })()
  }, [pid])

  useEffect(() => {
    if (!active) return
    setName(active.name || '')
    setRegion(active.region || '')
    setDesc(active.description || '')
  }, [activeId]) // eslint-disable-line

  const postJSON = (url, body) => fetch(url, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body||{}) })
  const putJSON  = (url, body) => fetch(url, { method:'PUT',  headers:{'Content-Type':'application/json'}, body: JSON.stringify(body||{}) })
  const del      = (url)      => fetch(url, { method:'DELETE' })

  async function addPlace() {
    const res = await postJSON(`/api/projects/${pid}/locations`, { name:'Neuer Ort', region:'', description:'' })
    if (!res.ok) return alert('Anlegen fehlgeschlagen.')
    const p = await res.json()
    setPlaces(prev => [...prev, p])
    setActiveId(p.id)
  }

  async function removePlace(id) {
    if (!confirm('Ort wirklich löschen?')) return
    const res = await del(`/api/locations/${id}`)
    if (!res.ok) return alert('Löschen fehlgeschlagen.')
    setPlaces(prev => prev.filter(x => x.id !== id))
    if (activeId === id) {
      const first = places.find(x => x.id !== id)
      setActiveId(first?.id || null)
    }
  }

  function onChangeField(field, value) {
    if (field === 'name')     setName(value)
    if (field === 'region')   setRegion(value)
    if (field === 'desc')     setDesc(value)
    setPlaces(prev => prev.map(p => p.id === activeId ? { ...p, [field === 'desc' ? 'description' : field]: value } : p))
    debounce(async () => {
      await putJSON(`/api/locations/${activeId}`, {
        name, region, description: desc, [field === 'desc' ? 'description' : field]: value
      })
    })
  }

  if (loading) return <main className="content"><p>Lade…</p></main>
  if (error)   return <main className="content"><p>{error}</p></main>

  return (
    <main className="content">
      <div className="two-col">
        {/* LEFT: Orte-Liste */}
        <aside className="two-col__sidebar">
          <div className="panel">
            <div className="panel-title row">
              <span>Welt (Orte)</span>
              <button className="btn sm" onClick={addPlace}>+ Neu</button>
            </div>

            <ul className="klist">
              {places.map(p => (
                <li key={p.id} className="kitem">
                  <div
                    className={'krow ' + (activeId === p.id ? 'active' : '')}
                    onClick={() => setActiveId(p.id)}
                  >
                    <input className="kinput" value={p.name || ''} onChange={e => onChangeField('name', e.target.value)} />
                    <div className="kactions">
                      <button className="icon-btn" title="Löschen" onClick={(ev)=>{ev.stopPropagation(); removePlace(p.id)}}>🗑</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* RIGHT: Details */}
        <section className="two-col__main">
          <h3 style={{margin:'4px 0 8px 0'}}>{project?.title}</h3>

          <div className="row" style={{gap:8}}>
            <input className="input" style={{flex:1}} placeholder="Ort" value={name} onChange={e=>onChangeField('name', e.target.value)} />
            <input className="input" style={{flex:1}} placeholder="Region/Land" value={region} onChange={e=>onChangeField('region', e.target.value)} />
          </div>

          <div className="panel" style={{marginTop:8}}>
            <textarea className="editor" placeholder="Beschreibung, Geschichte, Kultur…" value={desc} onChange={e=>onChangeField('desc', e.target.value)} />
          </div>
        </section>
      </div>
    </main>
  )
}
