import React from 'react'
import { NavLink, Outlet, useParams, Navigate, Link } from 'react-router-dom'
import logo from '../assets/brand/logo.png' // dein 380×140 Logo

export default function ProjectTabsLayout() {
  const { id } = useParams()
  if (!id) return <Navigate to="/" replace />

  const LinkItem = ({ to, label }) => (
    <NavLink
      to={to}
      className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
    >
      <span>{label}</span>
      <span className="active-bar" />
    </NavLink>
  )

  const base = `/project/${id}`

  return (
    <>
      {/* TOP NAV */}
      <header className="topnav">
        <div className="topnav-inner">
          <div className="nav-left">
            {/* BRAND: nur Logo; Größe proportional, ohne runde Ecken */}
            <Link
              to="/"
              className="brand"
              aria-label="Roman"
              style={{ display:'inline-flex', alignItems:'center', padding:0, borderRadius:0, marginRight:12 }}
            >
              <img
                src={logo}
                alt="Roman"
                style={{ height:45, width:'auto', display:'block', borderRadius:0 }}
              />
            </Link>

            <nav className="nav-links">
              <LinkItem to={base} label="Schreiben" />
              <LinkItem to={`${base}/characters`} label="Charaktere" />
              <LinkItem to={`${base}/world`} label="Welt" />
              <LinkItem to={`${base}/preview`} label="Vorschau" />
            </nav>
          </div>

          <div className="nav-right">
            <div className="nav-search">
              <input placeholder="Suchen…" />
            </div>
          </div>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <Outlet />
    </>
  )
}
