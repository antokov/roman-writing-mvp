import React, { useEffect, useMemo, useState } from 'react'
import { updateCharacter } from '../lib/api.js'

export default function RelationshipDrawer({ character, allCharacters, onClose, onSaved }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const start = Array.isArray(character?.relations) ? character.relations : []
    setItems(start.map(r => ({...r})))
  }, [character])

  const candidates = useMemo(
    () => allCharacters.filter(c => c.id !== character.id),
    [allCharacters, character?.id]
  )

  function addItem() {
    const firstOther = candidates[0]?.id || null
    setItems(prev => [...prev, { toId: firstOther, type: 'Freund', strength: 3, notes: '' }])
  }
  function removeIndex(i) { setItems(prev => prev.filter((_, idx) => idx !== i)) }
  function edit(i, patch) { setItems(prev => prev.map((x, idx) => idx === i ? { ...x, ...patch } : x)) }

  async function save() {
    try {
      const updated = await updateCharacter(character.id, { relations: items })
      onSaved?.(updated)
      onClose?.()
    } catch (e) {
      console.error(e)
      alert('Speichern fehlgeschlagen.')
    }
  }

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <div className="drawer" onClick={e=>e.stopPropagation()}>
        <div className="drawer-head">
          <strong>Beziehungen – {character?.name || 'Unbenannt'}</strong>
          <button className="icon-btn" onClick={onClose}>✕</button>
        </div>

        <div className="drawer-body vstack" style={{gap:10}}>
          <p className="muted" style={{marginTop:0}}>
            Hinweise: Beziehungen werden automatisch <b>beidseitig</b> synchronisiert.
            Z.&nbsp;B. „Mentor“ erzeugt auf der Gegenseite „Schützling“.
          </p>

          {items.length === 0 && <p className="muted">Noch keine Beziehungen.</p>}

          {items.map((r, i) => (
            <div key={i} className="rel-row">
              <select className="input" value={r.toId ?? ''} onChange={e=>edit(i, { toId: Number(e.target.value)||null })}>
                {candidates.length===0 && <option value="">(keine weiteren Charaktere)</option>}
                {candidates.map(c => <option key={c.id} value={c.id}>{c.name || `#${c.id}`}</option>)}
              </select>
              <select className="input" value={r.type} onChange={e=>edit(i, { type: e.target.value })}>
                <option>Freund</option><option>Feind</option><option>Familie</option>
                <option>Liebe</option><option>Kollege</option><option>Kennt</option>
                <option>Mentor</option><option>Schützling</option>
              </select>
              <input className="input" style={{width:90}}
                     value={String(r.strength ?? 3)} onChange={e=>edit(i,{ strength: clampInt(e.target.value,1,5) })} />
              <input className="input" placeholder="Notizen" value={r.notes||''} onChange={e=>edit(i, { notes: e.target.value })} />
              <button className="icon-btn" title="Entfernen" onClick={()=>removeIndex(i)}>🗑</button>
            </div>
          ))}

          <button className="btn ghost" onClick={addItem}>+ Beziehung hinzufügen</button>
        </div>

        <div className="drawer-foot">
          <span />
          <button className="btn" onClick={save}>Speichern</button>
        </div>
      </div>
    </div>
  )
}

function clampInt(v, min, max){
  const n = Number(String(v).replace(/[^\d]/g,'')) || min
  return Math.max(min, Math.min(max, n))
}
