import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  listProjects,
  createProject,
  updateProject,
  deleteProject
} from '../lib/api.js'
import logo from '../assets/brand/logo.png'
import '../dashboard.css'

export default function Dashboard() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [projects, setProjects] = useState([])

  const [newTitle, setNewTitle] = useState('')
  const [creating, setCreating] = useState(false)

  const [editingId, setEditingId] = useState(null)
  const [editTitle, setEditTitle] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      setLoading(true); setError('')
      try {
        const data = await listProjects()
        setProjects(data || [])
      } catch (e) {
        console.error(e); setError('Projekte konnten nicht geladen werden.')
      } finally { setLoading(false) }
    })()
  }, [])

  async function onCreate() {
    const title = (newTitle || '').trim() || 'Neues Projekt'
    setCreating(true)
    try {
      const p = await createProject({ title })
      setProjects(prev => [p, ...prev])
      setNewTitle('')
    } catch { alert('Projekt konnte nicht angelegt werden.') }
    finally { setCreating(false) }
  }

  async function onDelete(id) {
    if (!confirm('Projekt wirklich löschen?')) return
    try {
      await deleteProject(id)
      setProjects(prev => prev.filter(p => p.id !== id))
    } catch { alert('Löschen fehlgeschlagen.') }
  }

  function startEdit(p) {
    setEditingId(p.id)
    setEditTitle(p.title || '')
  }

  async function saveEdit(p) {
    const title = (editTitle || '').trim()
    setEditingId(null)
    if (!title || title === p.title) return
    try {
      const upd = await updateProject(p.id, { title })
      setProjects(prev => prev.map(x => x.id === p.id ? { ...x, ...upd } : x))
    } catch { alert('Umbenennen fehlgeschlagen.') }
  }

  function fmt(dt) {
    if (!dt) return '–'
    const d = new Date(dt)
    return d.toLocaleDateString() + ', ' + d.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})
  }

  if (loading) return <main className="content"><p>Lade…</p></main>

  return (
    <>
      {/* TOP NAV nur mit Logo */}
      <header className="topnav">
        <div className="topnav-inner">
          <div className="nav-left">
            <Link
              to="/"
              className="brand"
              aria-label="Roman"
              style={{ display:'inline-flex', alignItems:'center', padding:0, borderRadius:0, marginRight:12 }}
            >
              <img src={logo} alt="Roman" style={{ height:22, width:'auto', display:'block', borderRadius:0 }} />
            </Link>
          </div>

          <div className="nav-right">
            <div className="nav-search">
              <input
                placeholder="Titel"
                value={newTitle}
                onChange={e=>setNewTitle(e.target.value)}
              />
              <button className="btn primary" style={{marginLeft:8}} onClick={onCreate} disabled={creating}>
                {creating ? '…' : '➕ Neues Projekt'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard */}
      <main className="content dashboard">
        <div className="page-head" style={{marginTop:8}}>
          <div className="page-crumbs"><h2 style={{margin:'0 0 2px 0'}}>Projekte</h2></div>
        </div>

        {error && <p style={{color:'crimson'}}>{error}</p>}

        <section className="proj-grid">
          {projects.map((p) => (
            <article key={p.id} className="proj-card">
              {/* Cover – 2:3 und klickbar */}
              <button
                className="cover"
                onClick={() => navigate(`/project/${p.id}`)}
                title="Öffnen"
              >
                <div className="cover-inner">
                  <span className="cover-mark">BUCH-COVER</span>
                </div>
              </button>

              {/* Inhalt der Kachel */}
              <div className="proj-meta">
                <div className="proj-header">
                  {editingId === p.id ? (
                    <input
                      className="title-input"
                      value={editTitle}
                      onChange={e=>setEditTitle(e.target.value)}
                      onKeyDown={(e)=>{ if (e.key==='Enter') saveEdit(p); if (e.key==='Escape') setEditingId(null) }}
                      onBlur={()=>saveEdit(p)}
                      autoFocus
                    />
                  ) : (
                    <h3
                      className="proj-title"
                      title={p.title || 'Unbenannt'}
                      onDoubleClick={()=>startEdit(p)}
                    >
                      {p.title || 'Unbenannt'}
                    </h3>
                  )}
                  <button className="icon-btn rename" title="Umbenennen" onClick={()=>startEdit(p)}>✎</button>
                </div>

                <div className="proj-sub">Zuletzt geändert: {fmt(p.updated_at)}</div>

                <div className="proj-actions">
                  <Link className="btn" to={`/project/${p.id}`}>Öffnen</Link>
                  <button className="btn" onClick={()=>onDelete(p.id)}>Löschen</button>
                </div>
              </div>
            </article>
          ))}

          {projects.length === 0 && (
            <div className="empty-hint">
              Noch keine Projekte – gib oben einen <em>Titel</em> ein und klicke <strong>„Neues Projekt“</strong>.
            </div>
          )}
        </section>
      </main>
    </>
  )
}
