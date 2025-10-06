import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Dashboard from './pages/Dashboard.jsx'
import ProjectTabsLayout from './layouts/ProjectTabsLayout.jsx'
import ProjectView from './pages/ProjectView.jsx'
import Characters from './pages/Characters.jsx'
import World from './pages/World.jsx'
import Preview from './pages/Preview.jsx'

import './styles.css'
import './layout-2col.css'
// optional – nur falls vorhanden:
import './projectview.css'
import './dashboard.css'

export default function App() {
  return (
    <Routes>
      {/* Startseite */}
      <Route path="/" element={<Dashboard />} />

      {/* Projektbereich mit Tabs */}
      <Route path="/project/:id" element={<ProjectTabsLayout />}>
        <Route index element={<ProjectView />} />
        <Route path="characters" element={<Characters />} />
        <Route path="world" element={<World />} />
        <Route path="preview" element={<Preview />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
