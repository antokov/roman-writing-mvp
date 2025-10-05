# Backend (Flask)

## Setup (Windows PowerShell)
```powershell
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python app.py
```
- API läuft unter: http://127.0.0.1:5000
- Healthcheck: `GET /api/health`

### Nützliche Endpunkte
- `GET /api/projects` – Liste Projekte
- `POST /api/projects` – Neues Projekt `{ "title": "Mein Roman", "description": "..." }`
- `GET/PUT/DELETE /api/projects/:id`
- `GET/POST /api/projects/:id/chapters`
- `GET/PUT/DELETE /api/chapters/:id`
- `GET/POST /api/projects/:id/characters`
- `GET/PUT/DELETE /api/characters/:id`
- `GET/POST /api/projects/:id/locations`
- `GET/PUT/DELETE /api/locations/:id`
