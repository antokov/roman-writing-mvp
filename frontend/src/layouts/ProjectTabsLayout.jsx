import React from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'

export default function ProjectTabsLayout() {
  const { id } = useParams()
  const pid = id || '1'

  const LinkItem = ({ to, label, icon }) => (
    <NavLink
      to={to}
      className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
    >
      {icon && <span className="nav-ico" aria-hidden>{icon}</span>}
      <span>{label}</span>
      <span className="active-bar" />
    </NavLink>
  )

  return (
    <>
      {/* HORIZONTALE TOP NAV */}
      <header className="topnav">
        <div className="topnav-inner">
          <div className="nav-left">
            <div className="brand">
              <span className="brand-logo" aria-hidden>▣</span>
              <span className="brand-name">Roman</span>
            </div>

            <nav className="nav-links">
              <LinkItem
                to={`/project/${pid}`}
                label="Schreiben"
                icon={(
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M4 20h16" stroke="currentColor" strokeWidth="2"/>
                    <path d="M6 16l10-10 2 2-10 10H6v-2z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )}
              />
              <LinkItem
                to={`/project/${pid}/characters`}
                label="Charaktere"
                icon={(
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M15 11a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M3 20a6 6 0 0112 0" stroke="currentColor" strokeWidth="2"/>
                    <path d="M13 20a6 6 0 016-6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )}
              />
              <LinkItem
                to={`/project/${pid}/world`}
                label="Welt"
                icon={(
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                    <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )}
              />
              <LinkItem
                to={`/project/${pid}/preview`}
                label="Vorschau"
                icon={(
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )}
              />
            </nav>
          </div>

          <div className="nav-right">
            <div className="nav-search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
                <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <input placeholder="Suchen…" />
            </div>
            <button className="icon-btn ghost" title="Benachrichtigungen">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M6 8a6 6 0 1112 0c0 7 3 6 3 8H3c0-2 3-1 3-8z" stroke="currentColor" strokeWidth="2"/>
                <path d="M10 20a2 2 0 004 0" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            <div className="nav-user" title="Profil">
              <div className="avatar">A</div>
              <span className="uname">Anton</span>
            </div>
          </div>
        </div>
      </header>

      {/* Seiten-Inhalt */}
      <Outlet />
    </>
  )
}
