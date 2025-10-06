import React, { useState } from 'react'
import { createCharacter, updateCharacter } from '../lib/api.js'

/**
 * 3-Schritt-Wizard zum Anlegen eines Charakters.
 * Speichert am Ende via createCharacter + updateCharacter.
 * Props:
 *  - projectId: number
 *  - onDone: (character) => void
 *  - onClose: () => void
 */
export default function CharacterWizard({ projectId, onDone, onClose }) {
  const [step, setStep] = useState(1)
  const [saving, setSaving] = useState(false)

  const [name, setName] = useState('')
  const [role, setRole] = useState('Protagonist')
  const [pitch, setPitch] = useState('')
  const [goal, setGoal] = useState('')
  const [conflict, setConflict] = useState('')

  const [age, setAge] = useState('')
  const [factions, setFactions] = useState('')
  const [strengths, setStrengths] = useState('')
  const [weaknesses, setWeaknesses] = useState('')

  const [secret, setSecret] = useState('')
  const [voice, setVoice] = useState('')
  const [notes, setNotes] = useState('')

  const canNext1 = name.trim().length > 0 && pitch.trim().length > 0 && goal.trim().length > 0 && conflict.trim().length > 0
  const canFinish = canNext1

  async function finish() {
    try {
      setSaving(true)
      const c = await createCharacter(projectId, {
        name: name.trim(),
        role,
        age: age === '' ? null : Number(age),
        description: '',
      })
      const meta = {
        completeness: 60,
        relationships: [], // Drawer speichert hier
      }
      await updateCharacter(c.id, {
        name: name.trim(),
        role,
        age: age === '' ? null : Number(age),
        description: buildDescription({ pitch, goal, conflict, factions, strengths, weaknesses, secret, voice, notes }),
        meta,
      })
      onDone?.({ ...c, role, age: age === '' ? null : Number(age), meta })
      onClose?.()
    } catch (e) {
      console.error(e)
      alert('Speichern fehlgeschlagen.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-head">
          <h3 style={{margin:0}}>Neuen Charakter anlegen</h3>
          <button className="icon-btn" onClick={onClose}>✕</button>
        </div>

        <div className="steps">
          <div className={'step ' + (step===1?'active':'')}>Kern</div>
          <div className={'step ' + (step===2?'active':'')}>Rolle & Tags</div>
          <div className={'step ' + (step===3?'active':'')}>Details</div>
        </div>

        <div className="modal-body">
          {step === 1 && (
            <div className="vstack" style={{gap:10}}>
              <div className="row" style={{gap:8}}>
                <input className="input" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
                <select className="input" value={role} onChange={e=>setRole(e.target.value)}>
                  <option>Protagonist</option>
                  <option>Antagonist</option>
                  <option>Nebenfigur</option>
                </select>
                <input className="input" placeholder="Alter" value={age} onChange={e=>setAge(e.target.value.replace(/[^\d]/g,''))} style={{width:120}} />
              </div>
              <textarea className="editor sm" placeholder="Kurzpitch (1–2 Sätze)" maxLength={280} value={pitch} onChange={e=>setPitch(e.target.value)} />
              <div className="row" style={{gap:8}}>
                <input className="input" placeholder="Ziel (1 Satz)" value={goal} onChange={e=>setGoal(e.target.value)} />
                <input className="input" placeholder="Konflikt (1 Satz)" value={conflict} onChange={e=>setConflict(e.target.value)} />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="vstack" style={{gap:10}}>
              <input className="input" placeholder="Fraktionen/Berufe (Tags, komma-getrennt)" value={factions} onChange={e=>setFactions(e.target.value)} />
              <input className="input" placeholder="Stärken (Tags, komma-getrennt)" value={strengths} onChange={e=>setStrengths(e.target.value)} />
              <input className="input" placeholder="Schwächen (Tags, komma-getrennt)" value={weaknesses} onChange={e=>setWeaknesses(e.target.value)} />
            </div>
          )}

          {step === 3 && (
            <div className="vstack" style={{gap:10}}>
              <textarea className="editor sm" placeholder="Geheimnis / Wunde (privat)" value={secret} onChange={e=>setSecret(e.target.value)} />
              <input className="input" placeholder="Stimme & Stil (3 Stichwörter)" value={voice} onChange={e=>setVoice(e.target.value)} />
              <textarea className="editor sm" placeholder="Notizen" value={notes} onChange={e=>setNotes(e.target.value)} />
            </div>
          )}
        </div>

        <div className="modal-foot">
          {step>1 ? <button className="btn ghost" onClick={()=>setStep(step-1)}>Zurück</button> : <span />}
          {step<3 ? (
            <button className="btn" disabled={step===1 && !canNext1} onClick={()=>setStep(step+1)}>Weiter</button>
          ) : (
            <button className="btn" disabled={!canFinish || saving} onClick={finish}>{saving?'Speichere…':'Fertig & Anlegen'}</button>
          )}
        </div>
      </div>
    </div>
  )
}

function buildDescription({ pitch, goal, conflict, factions, strengths, weaknesses, secret, voice, notes }) {
  const lines = []
  if (pitch) lines.push(`Pitch: ${pitch}`)
  if (goal) lines.push(`Ziel: ${goal}`)
  if (conflict) lines.push(`Konflikt: ${conflict}`)
  if (factions) lines.push(`Zugehörigkeit: ${factions}`)
  if (strengths) lines.push(`Stärken: ${strengths}`)
  if (weaknesses) lines.push(`Schwächen: ${weaknesses}`)
  if (secret) lines.push(`Geheimnis: ${secret}`)
  if (voice) lines.push(`Stimme: ${voice}`)
  if (notes) lines.push(`Notizen: ${notes}`)
  return lines.join('\n')
}
