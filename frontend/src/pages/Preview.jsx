import React, { useMemo, useRef } from 'react'
import { useParams } from 'react-router-dom'
import '../preview.css'

// kleine Helper
const escapeHtml = (s = '') =>
  s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

// Plaintext -> <p>…</p> (optional Dropcap im ersten Absatz)
function paragraphsHTML(text, firstIsDropcap = false) {
  const parts = (text || '')
    .split(/\n\s*\n/)
    .map(s => s.trim())
    .filter(Boolean)
  return parts
    .map((p, i) => {
      const cls = firstIsDropcap && i === 0 ? ' class="dropcap"' : ''
      return `<p${cls}>${escapeHtml(p).replace(/\n+/g, ' ')}</p>`
    })
    .join('\n')
}

// Kapitel-Heading ohne Dopplung „Kapitel …“
const chapterHeading = (no, title = '') => {
  const t = (title || '').trim()
  return /^kapitel\b/i.test(t) ? t : `Kapitel ${no}${t ? ' — ' + escapeHtml(t) : ''}`
}

export default function Preview() {
  const { id } = useParams()
  const pid = Number(id)
  const iframeRef = useRef(null)

  const [book, setBook] = React.useState(null)
  const [err, setErr] = React.useState('')

  React.useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch(`/api/projects/${pid}/book`)
        if (!res.ok) throw new Error('HTTP ' + res.status)
        setBook(await res.json())
      } catch (e) {
        console.error(e)
        setErr('Konnte Buchdaten nicht laden.')
      }
    })()
  }, [pid])

  // gesamtes Dokument für das Iframe bauen (Paged.js läuft isoliert darin)
  const srcDoc = useMemo(() => {
    if (!book)
      return '<!doctype html><html><head><meta charset="utf-8"></head><body>Loading…</body></html>'

    const { project, chapters } = book

    let chNo = 0
    const chaptersHTML = chapters
      .map(ch => {
        chNo += 1
        const scenes = ch.scenes || []
        // keine Szenen-Titel in der Vorschau – nur Inhalte
        const scenesHTML = scenes
          .map((sc, idx) => paragraphsHTML(sc.content || '', idx === 0))
          .join('\n')
        return `
          <section>
            <h1 class="chapter-title">${chapterHeading(chNo, ch.title || '')}</h1>
            ${scenesHTML}
          </section>
        `
      })
      .join('\n')

    return `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1" />
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;700&family=Crimson+Pro:wght@400;600&display=swap" rel="stylesheet">
<style>
  :root{--book-font:"EB Garamond","Georgia",serif;--font-size:11pt;--lh:1.42;--zoom:1}
  html,body{margin:0;padding:0;background:#fff;overflow-x:hidden}
  .book{font-family:var(--book-font);font-size:var(--font-size);line-height:var(--lh);color:#111}

  /* 6×9" Taschenbuch mit angenehmen Rändern */
  @page{size:152.4mm 228.6mm;margin:20mm 18mm 24mm 18mm}
  @page{
    @top-center{content: string(running-chapter); font-family: var(--book-font); font-size:10pt; color:#444}
    @bottom-center{content: counter(page); font-family: var(--book-font); font-size:10pt; color:#444}
  }

  /* Typografie */
  h1.chapter-title{
    break-before: page;
    font-weight:600;font-size:18pt;text-align:center;margin:0 0 10mm;
    string-set: running-chapter content(text);
  }
  .book p{text-align:justify;margin:0 0 3.2mm;text-indent:1.2em;widows:2;orphans:2}
  .book h1 + p{ text-indent:0 }
  .dropcap:first-letter{ float:left;font-size:3.2em;line-height:0.8;padding-right:.1em }

  /* Seiten in der Bildschirmvorschau – automatisch an Breite anpassen */
  .pagedjs_pages{
    transform: scale(var(--zoom));
    transform-origin: top center;
  }
  /* Abstände bei Zoom anpassen, damit es hübsch bleibt */
  .pagedjs_page{box-shadow:0 10px 28px rgba(0,0,0,.10);margin: calc(16px / var(--zoom)) auto;border-radius:6px}
  .pagedjs_area, .pagedjs_pages { background: transparent !important; }
</style>

<script>
  // Paged.js automatisch starten
  window.PagedConfig = { auto: true };

  // Nach dem Rendern skalieren wir die Seiten so,
  // dass sie möglichst die verfügbare Breite nutzen (ohne Scrollbalken).
  function fitToWidth(){
    const first = document.querySelector('.pagedjs_page');
    if(!first) return;
    const margin = 32; // etwas Luft an den Seiten
    const viewport = window.innerWidth - margin;
    const pageWidth = first.getBoundingClientRect().width;
    if(!pageWidth) return;
    const desired = Math.min(1.8, Math.max(1.0, viewport / pageWidth));
    document.documentElement.style.setProperty('--zoom', desired.toFixed(2));
  }
  window.addEventListener('pagedjs:rendered', fitToWidth);
  window.addEventListener('resize', fitToWidth);
</script>
<script src="https://unpkg.com/pagedjs@0.4.3/dist/paged.polyfill.js"></script>
</head>
<body>
  <div class="book">
    <section style="break-before:page;text-align:center;margin-top:35mm">
      <h1 style="font-family:'EB Garamond',Georgia,serif;font-size:28pt;margin:0 0 3mm">
        ${escapeHtml(project?.title || 'Buch')}
      </h1>
      <div style="font-family:'Crimson Pro',Georgia,serif;font-size:12pt;color:#555">Roman – Vorschau</div>
    </section>
    ${chaptersHTML}
  </div>
</body>
</html>`
  }, [book])

  const printIframe = () => {
    const w = iframeRef.current?.contentWindow
    if (w) w.print()
  }

  if (err) {
    return (
      <main className="content content--fluid">
        
        <p>{err}</p>
      </main>
    )
  }

  return (
    <main className="content content--fluid">
     

      <div className="preview-toolbar">
        <strong>{book?.project?.title || 'Buch'}</strong>
        <button className="btn" onClick={printIframe}>Als PDF drucken</button>
      </div>

      {/* Große, volle Breite – zentriert dargestellt */}
      <div className="preview-wrap">
        <div className="preview-stage">
          <iframe
            ref={iframeRef}
            title="Book Preview"
            className="preview-frame"
            srcDoc={srcDoc}
          />
        </div>
      </div>
    </main>
  )
}
