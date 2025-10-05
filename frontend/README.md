# Frontend (Vite + React)

## Setup (Windows PowerShell)
```powershell
cd frontend
npm install
npm run dev
```
- App läuft unter: http://127.0.0.1:5173
- API-Proxy ist konfiguriert: Anfragen an `/api` gehen an `http://127.0.0.1:5000`

### Seiten
- **/** – Dashboard (Projekte erstellen & öffnen)
- **/project/:id** – Projektansicht (Kapitel-Sidebar + Editor)

### Dateien
- `src/pages/Dashboard.jsx` – Projektliste
- `src/pages/ProjectView.jsx` – Kapitelverwaltung & Editor
- `src/ui/Editor.jsx` – Einfacher Texteditor (Textarea, mit Autosave)
- `src/lib/api.js` – Axios-Client
