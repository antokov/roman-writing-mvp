// Utility: zählt Erwähnungen eines Namens in Szenentexten.
// Erwartet, dass deine API mindestens eine der Funktionen bietet:
//   - listScenesByProject(projectId) -> [{ id, title, text, chapterId }]
//   - oder listChapters(projectId) + listScenes(chapterId)
// Fällt sonst sanft auf 0 Erwähnungen zurück.

export async function scanMentions(projectId, name, api) {
  const needle = (name || '').trim()
  if (!needle) return { total: 0, byChapter: {} }

  let scenes = []
  try {
    if (typeof api.listScenesByProject === 'function') {
      scenes = await api.listScenesByProject(projectId)
    } else if (typeof api.listChapters === 'function' && typeof api.listScenes === 'function') {
      const chapters = await api.listChapters(projectId)
      for (const ch of chapters) {
        const sc = await api.listScenes(ch.id)
        scenes.push(...sc.map(s => ({...s, chapterId: ch.id})))
      }
    }
  } catch (e) {
    console.warn('scanMentions: Konnte Szenen nicht laden:', e)
    return { total: 0, byChapter: {} }
  }

  const byChapter = {}
  let total = 0
  const rx = new RegExp(`\\b${escapeRegExp(needle)}\\b`, 'gi')

  for (const s of scenes) {
    const text = (s.text || s.body || s.content || '')
    const hits = (text.match(rx) || []).length
    if (hits > 0) {
      total += hits
      const key = s.chapterId ?? s.chapter_id ?? 'unknown'
      byChapter[key] = (byChapter[key] || 0) + hits
    }
  }
  return { total, byChapter }
}

function escapeRegExp(str){ return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') }
