import React from 'react'

export default function Editor({ value, onChange }) {
  return (
    <textarea
      className="textarea"
      style={{minHeight: '60vh', lineHeight: '1.6'}}
      value={value || ''}
      onChange={e => onChange(e.target.value)}
      placeholder="Hier schreiben... (MVP: einfacher Texteditor)"
    />
  )
}
