# Roman Writing MVP (ohne KI)

Minimaler Prototyp zum Schreiben und Organisieren von Romanen.

## Schnellstart
1. **Backend starten**
```powershell
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python app.py
```
API: http://127.0.0.1:5000

2. **Frontend starten (neues Terminal)**
```powershell
cd frontend
npm install
npm run dev
```
Frontend: http://127.0.0.1:5173

## Features
- Projekte anlegen, umbenennen, löschen
- Kapitel erstellen, auswählen, löschen
- Einfacher Texteditor mit Autosave (Debounce)
- SQLite-Datenbank (Datei: `backend/app.db`)
- Vite-Proxy `/api` → Flask (kein CORS-Ärger)

## Nächste Schritte
- Charaktere & Orte als Tabs in der Projektansicht
- Markdown-Preview
- Export als `.md` oder `.docx`
- Reorder per Drag&Drop
