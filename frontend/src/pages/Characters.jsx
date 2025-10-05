import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../layout-2col.css'

export default function Characters() {
  const { id } = useParams()
  const pid = Number(id)

  const [project, setProject] = useState(null)
  const [list, setList]       = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState('')

  const [activeId, setActiveId] = useState(null)

  const [name, setName]       = useState('')
  const [role, setRole]       = useState('')
  const [age, setAge]         = useState('')
  const [bio, setBio]         = useState('')

  const saveTimer = useRef(null)
  const debounce = (fn) => { clearTimeout(saveTimer.current); saveTimer.current = setTimeout(fn, 500) }

  const active = useMemo(() => list.find(c => c.id === activeId) || null, [list, activeId])

  useEffect(() => {
    (async () => {
      setLoading(true); setError('')
      try {
        const p = await (await fetch(`/api/projects/${pid}`)).json()
        setProject({ id: p.id, title: p.title })

        const res = await fetch(`/api/projects/${pid}/characters`)
        if (!res.ok) throw new Error('HTTP ' + res.status)
        const data = await res.json()  // [{id,name,role,age,bio}]
        setList(data)
        const first = data[0]
        if (first) {
          setActiveId(first.id)
          setName(first.name || '')
          setRole(first.role || '')
          setAge(String(first.age ?? ''))
          setBio(first.bio || '')
        }
      } catch (e) { console.error(e); setError('Charaktere konnten nicht geladen werden.') }
      finally { setLoading(false) }
    })()
  }, [pid])

  useEffect(() => {
    if (!active) return
    setName(active.name || '')
    setRole(active.role || '')
    setAge(String(active.age ?? ''))
    setBio(active.bio || '')
  }, [activeId]) // eslint-disable-line

  const postJSON = (url, body) => fetch(url, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body||{}) })
  const putJSON  = (url, body) => fetch(url, { method:'PUT',  headers:{'Content-Type':'application/json'}, body: JSON.stringify(body||{}) })
  const del      = (url)      => fetch(url, { method:'DELETE' })

  async function addCharacter() {
    const res = await postJSON(`/api/projects/${pid}/characters`, { name:'Neuer Charakter', role:'', age:null, bio:'' })
    if (!res.ok) return alert('Anlegen fehlgeschlagen.')
    const c = await res.json()
    setList(prev => [...prev, c])
    setActiveId(c.id)
  }

  async function removeCharacter(cid) {
    if (!confirm('Charakter wirklich löschen?')) return
    const res = await del(`/api/characters/${cid}`)
    if (!res.ok) return alert('Löschen fehlgeschlagen.')
    setList(prev => prev.filter(c => c.id !== cid))
    if (activeId === cid) {
      const first = list.find(c => c.id !== cid)
      setActiveId(first?.id || null)
    }
  }

  function onChangeField(field, value) {
    // local state
    if (field === 'name') setName(value)
    if (field === 'role') setRole(value)
    if (field === 'age')  setAge(value)
    if (field === 'bio')  setBio(value)
    setList(prev => prev.map(c => c.id === activeId ? { ...c, [field]: field==='age' ? Number(value||0) : value } : c))
    // debounce save
    debounce(async () => {
      await putJSON(`/api/characters/${activeId}`, {
        name, role, age: Number(age||0), bio, [field]: field==='age' ? Number(value||0) : value
      })
    })
  }

  if (loading) return <main className="content"><p>Lade…</p></main>
  if (error)   return <main className="content"><p>{error}</p></main>

  return (
    <main className="content">
      <div className="two-col">
        {/* LEFT: Liste */}
        <aside className="two-col__sidebar">
          <div className="panel">
            <div className="panel-title row">
              <span>Charaktere</span>
              <button className="btn sm" onClick={addCharacter}>+ Neu</button>
            </div>

            <ul className="klist">
              {list.map(c => (
                <li key={c.id} className="kitem">
                  <div
                    className={'krow ' + (activeId === c.id ? 'active' : '')}
                    onClick={() => setActiveId(c.id)}
                  >
                    <input className="kinput" value={c.name || ''} onChange={e => onChangeField('name', e.target.value)} />
                    <div className="kactions">
                      <button className="icon-btn" title="Löschen" onClick={(ev)=>{ev.stopPropagation(); removeCharacter(c.id)}}>🗑</button>
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
            <input className="input" style={{flex:1}} placeholder="Name" value={name} onChange={e=>onChangeField('name', e.target.value)} />
            <input className="input" style={{flex:1}} placeholder="Rolle (z.B. Protagonist)" value={role} onChange={e=>onChangeField('role', e.target.value)} />
            <input className="input" style={{width:120}} placeholder="Alter" value={age} onChange={e=>onChangeField('age', e.target.value)} />
          </div>

          <div className="panel" style={{marginTop:8}}>
            <textarea className="editor" placeholder="Beschreibung / Hintergrund …" value={bio} onChange={e=>onChangeField('bio', e.target.value)} />
          </div>
        </section>
      </div>
    </main>
  )
}
