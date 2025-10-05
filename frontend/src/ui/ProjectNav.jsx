import React from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'

export default function ProjectNav() {
  const { id } = useParams()
  const { pathname } = useLocation()
  const base = `/project/${id}`
  const tabs = [
    { to: base, label: 'Schreiben' },
    { to: `${base}/characters`, label: 'Charaktere' },
    { to: `${base}/world`, label: 'Welt' },
    { to: `${base}/preview`, label: 'Vorschau' },  
  ]
  return (
    <div className="tabs">
      {tabs.map(t => (
        <Link key={t.to} className={`tab ${pathname === t.to ? 'active' : ''}`} to={t.to}>
          {t.label}
        </Link>
      ))}
    </div>
  )
}
