import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard.jsx'
import ProjectView from './pages/ProjectView.jsx'
import Characters from './pages/Characters.jsx'
import World from './pages/World.jsx'
import Preview from './pages/Preview.jsx'

import ProjectTabsLayout from './layouts/ProjectTabsLayout.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      {/* Projektbereich: Header + Tabs einmal oben, Seiten darunter */}
      <Route path="/project/:id" element={<ProjectTabsLayout />}>
        <Route index element={<ProjectView />} />
        <Route path="characters" element={<Characters />} />
        <Route path="world" element={<World />} />
        <Route path="preview" element={<Preview />} />
      </Route>
    </Routes>
  )
}
