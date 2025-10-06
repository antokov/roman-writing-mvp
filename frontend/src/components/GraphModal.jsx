import React, { useEffect, useRef } from 'react'

export default function GraphModal({ projectId, onClose, path = 'relations-graph' }) {
  const iframeRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose?.() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const srcUrl = `/api/projects/${projectId}/${path}`

  function reload() {
    const el = iframeRef.current
    if (!el) return
    el.src = `${srcUrl}?t=${Date.now()}`
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal graph-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-head">
          <h3 style={{margin:0}}>Graph</h3>
          <div className="row" style={{gap:8, alignItems:'center'}}>
            <button className="btn sm ghost" onClick={reload}>Neu laden</button>
            <button className="icon-btn" onClick={onClose} title="Schließen">✕</button>
          </div>
        </div>
        <div className="modal-body graph-body">
          <iframe
            ref={iframeRef}
            className="graph-frame"
            title="Graph"
            src={srcUrl}
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
        <div className="modal-foot">
          <span className="muted">Zieh &amp; zoome frei – Layout stabilisiert sich automatisch.</span>
          <button className="btn" onClick={onClose}>Schließen</button>
        </div>
      </div>
    </div>
  )
}
