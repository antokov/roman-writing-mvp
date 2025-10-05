import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { listProjects, createProject, deleteProject } from '../lib/api.js'

export default function Dashboard() {
  const [projects, setProjects] = useState([])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const load = async () => {
    setLoading(true)
    const data = await listProjects()
    setProjects(data)
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  const onCreate = async () => {
    const p = await createProject({ title: title || 'Neues Projekt', description: desc })
    setTitle(''); setDesc('')
    navigate(`/project/${p.id}`)
  }

  return (
    <div className="content">
      <div className="row" style={{justifyContent:'space-between', alignItems:'center'}}>
        <h2>Projekte</h2>
        <div className="row">
          <input className="input" placeholder="Titel" style={{minWidth:220}} value={title} onChange={e=>setTitle(e.target.value)} />
          <button className="btn primary" onClick={onCreate}>+ Neues Projekt</button>
        </div>
      </div>

      <hr/>

      {loading ? <p>Lade...</p> : (
        <div>
          {projects.length === 0 && <p>Noch keine Projekte. Erstelle dein erstes oben rechts.</p>}
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:12}}>
            {projects.map(p => (
              <div key={p.id} className="card">
                <h3 style={{marginTop:0}}>{p.title}</h3>
                <p className="status">Zuletzt geändert: {new Date(p.updated_at).toLocaleString()}</p>
                <div className="row">
                  <button className="btn" onClick={()=>navigate(`/project/${p.id}`)}>Öffnen</button>
                  <button className="btn" onClick={async ()=>{ 
                    if (confirm('Projekt wirklich löschen?')) { await deleteProject(p.id); load(); }
                  }}>Löschen</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
