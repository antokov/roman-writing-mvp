from flask import Flask, request, jsonify, abort, Response
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import selectinload
from sqlalchemy import text
from sqlalchemy.exc import SQLAlchemyError
from .db import engine, get_session, Base
from .models import Project, Chapter, Scene, Character, WorldNode
from datetime import datetime
import os, json, tempfile

# Optional: PyVis
try:
    from pyvis.network import Network
    HAS_PYVIS = True
except Exception:
    HAS_PYVIS = False

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# ⬇ ersetzt deinen SQLite-Block
db_url = os.getenv("DATABASE_URL")

if db_url:
    app.config["SQLALCHEMY_DATABASE_URI"] = db_url
else:
    is_aws = bool(os.getenv("AWS_EXECUTION_ENV"))
    db_path = "/tmp/app.db" if is_aws else os.path.join(os.path.dirname(__file__), "app.db")
    app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{db_path}"
    app.config["SQLALCHEMY_ENGINE_OPTIONS"] = {"connect_args": {"check_same_thread": False}}

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

# ----------------- Models -----------------
class Project(db.Model):
    __tablename__ = "projects"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, default="")
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    chapters = db.relationship("Chapter", backref="project", cascade="all, delete-orphan", lazy="selectin")
    characters = db.relationship("Character", backref="project", cascade="all, delete-orphan", lazy="selectin")
    locations = db.relationship("Location", backref="project", cascade="all, delete-orphan", lazy="selectin")  # legacy
    world_items = db.relationship("WorldItem", backref="project", cascade="all, delete-orphan", lazy="selectin")

    def to_dict(self):
        return {"id": self.id, "title": self.title, "description": self.description,
                "created_at": self.created_at.isoformat() if self.created_at else None,
                "updated_at": self.updated_at.isoformat() if self.updated_at else None}

class Chapter(db.Model):
    __tablename__ = "chapters"
    __table_args__ = (db.Index("ix_chapter_project_order", "project_id", "order_index"),)
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable=False)
    title = db.Column(db.String(255), nullable=False, default="Neues Kapitel")
    order_index = db.Column(db.Integer, default=0)
    content = db.Column(db.Text, default="")
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    scenes = db.relationship("Scene", backref="chapter", cascade="all, delete-orphan", lazy="selectin")

    def to_dict(self):
        return {"id": self.id, "project_id": self.project_id, "title": self.title,
                "order_index": self.order_index, "content": self.content,
                "updated_at": self.updated_at.isoformat() if self.updated_at else None}

class Scene(db.Model):
    __tablename__ = "scenes"
    __table_args__ = (db.Index("ix_scene_chapter_order", "chapter_id", "order_index"),)
    id = db.Column(db.Integer, primary_key=True)
    chapter_id = db.Column(db.Integer, db.ForeignKey("chapters.id"), nullable=False)
    title = db.Column(db.String(255), nullable=False, default="Neue Szene")
    order_index = db.Column(db.Integer, default=0)
    content = db.Column(db.Text, default="")
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def to_dict(self):
        return {"id": self.id, "chapter_id": self.chapter_id, "title": self.title,
                "order_index": self.order_index, "content": self.content,
                "updated_at": self.updated_at.isoformat() if self.updated_at else None}

class Character(db.Model):
    __tablename__ = "characters"
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(255), default="")
    age = db.Column(db.String(50), default="")
    description = db.Column(db.Text, default="")
    relations = db.Column(db.Text, default="[]")   # JSON-Array
    profile = db.Column(db.Text, default="{}")     # JSON

    def to_dict(self):
        return {"id": self.id, "project_id": self.project_id, "name": self.name,
                "role": self.role, "age": self.age, "description": self.description,
                "relations": _parse_relations(self.relations),
                "profile": _parse_profile(self.profile)}

# Legacy "locations" bleibt kompatibel (kannst du später entfernen)
class Location(db.Model):
    __tablename__ = "locations"
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    region = db.Column(db.String(255), default="")
    description = db.Column(db.Text, default="")
    def to_dict(self):
        return {"id": self.id, "project_id": self.project_id,
                "name": self.name, "region": self.region, "description": self.description}

# ✅ Neue generische Welt-Elemente
class WorldItem(db.Model):
    __tablename__ = "world_items"
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable=False)
    name = db.Column(db.String(255), nullable=False)     # z. B. "Eldoria"
    kind = db.Column(db.String(120), default="Allgemein")# z. B. "Königreich", "Organisation", "Beruf", "Stadt" …
    description = db.Column(db.Text, default="")
    props = db.Column(db.Text, default="{}")             # freie Attribute (JSON)
    relations = db.Column(db.Text, default="[]")         # JSON-Array zu anderen WorldItems

    def to_dict(self):
        return {"id": self.id, "project_id": self.project_id, "name": self.name,
                "kind": self.kind, "description": self.description,
                "props": _parse_props(self.props),
                "relations": _parse_relations(self.relations)}

# ----------------- Helpers -----------------
def get_or_404(model, id_):
    item = db.session.get(model, id_)
    if not item: abort(404, f"{model.__name__} {id_} not found")
    return item

def get_or_none(model, id_): return db.session.get(model, id_)

def ensure_column(table, column, ddl):
    insp = db.inspect(db.engine)
    cols = [c["name"] for c in insp.get_columns(table)]
    if column not in cols:
        with db.engine.begin() as conn:
            conn.exec_driver_sql(f"ALTER TABLE {table} ADD COLUMN {column} {ddl}")

def ensure_relations_column():
    ensure_column("characters", "relations", "TEXT DEFAULT '[]'")

def ensure_profile_column():
    ensure_column("characters", "profile", "TEXT DEFAULT '{}'")

def _parse_relations(text):
    try:
        data = json.loads(text or "[]")
        if not isinstance(data, list): return []
        out = []
        for r in data:
            if not isinstance(r, dict): continue
            toId = r.get("toId")
            if not isinstance(toId, int): continue
            typ = r.get("type") or "Verbunden"
            strength = r.get("strength", 3)
            try: strength = int(strength)
            except: strength = 3
            notes = r.get("notes", "")
            out.append({"toId": toId, "type": typ, "strength": strength, "notes": notes})
        return out
    except: return []

_PROFILE_DEFAULT = {
    "avatarUrl": "", "pitch": "", "goal": "", "conflict": "",
    "affiliations": [], "strengths": [], "weaknesses": [],
    "voice": "", "traits": "", "secret": "",
    "birthplace": "", "residence": "", "occupation": "",
    "appearance": "", "height": "", "hairColor": "", "eyeColor": "",
    "skills": [], "backstory": ""
}
def _parse_profile(text):
    try:
        raw = json.loads(text or "{}")
        if not isinstance(raw, dict): raw = {}
    except: raw = {}
    prof = {**_PROFILE_DEFAULT, **raw}
    for k in ["affiliations","strengths","weaknesses","skills"]:
        v = prof.get(k)
        if isinstance(v, str): prof[k] = [x.strip() for x in v.split(",") if x.strip()]
        elif not isinstance(v, list): prof[k] = []
    return prof

def _parse_props(text):
    try:
        raw = json.loads(text or "{}")
        if not isinstance(raw, dict): raw = {}
    except: raw = {}
    return raw

# Character inverse mapping
_RECIPROCAL = {"Freund":"Freund","Feind":"Feind","Familie":"Familie","Liebe":"Liebe",
               "Kollege":"Kollege","Kennt":"Kennt","Mentor":"Schüler","Schüler":"Mentor"}
def _reciprocal_type(t): return _RECIPROCAL.get(t, t)

# World inverse mapping
_WORLD_RECIPROCAL = {
    "Teil von":"Hat Teil",
    "Hat Teil":"Teil von",
    "Ort in":"Beherbergt",
    "Beherbergt":"Ort in",
    "Regiert":"Wird regiert von",
    "Wird regiert von":"Regiert",
    "Hauptstadt von":"Hat Hauptstadt",
    "Hat Hauptstadt":"Hauptstadt von",
    "Mitglied von":"Hat Mitglied",
    "Hat Mitglied":"Mitglied von",
    "Übergeordnet":"Untergeordnet",
    "Untergeordnet":"Übergeordnet",
    "Verbündet":"Verbündet",
    "Konkurriert":"Konkurriert",
    "Handelt mit":"Handelt mit",
}
def _world_inv(t): return _WORLD_RECIPROCAL.get(t, t)

def _sync_bidirectional_relations(source_char, new_relations, old_relations=None):
    new_rel = _parse_relations(json.dumps(new_relations, ensure_ascii=False))
    if old_relations is None:
        old_rel = _parse_relations(source_char.relations)
    else:
        old_rel = _parse_relations(json.dumps(old_relations, ensure_ascii=False)) if isinstance(old_relations, list) else _parse_relations(old_relations)
    old_targets = {r["toId"] for r in old_rel}
    new_targets = {r["toId"] for r in new_rel}

    for r in new_rel:
        tid = r["toId"]
        if tid == source_char.id: continue
        tgt = get_or_none(Character, tid)
        if not tgt or tgt.project_id != source_char.project_id: continue
        t_rel = _parse_relations(tgt.relations)
        idx = next((i for i,x in enumerate(t_rel) if x.get("toId")==source_char.id), None)
        inv = _reciprocal_type(r.get("type"))
        if idx is None:
            t_rel.append({"toId": source_char.id, "type": inv, "strength": r.get("strength",3), "notes": ""})
        else:
            t_rel[idx]["type"] = inv
            t_rel[idx]["strength"] = r.get("strength", t_rel[idx].get("strength",3))
        tgt.relations = json.dumps(t_rel, ensure_ascii=False)

    removed = old_targets - new_targets
    for tid in removed:
        tgt = get_or_none(Character, tid)
        if not tgt or tgt.project_id != source_char.project_id: continue
        t_rel = _parse_relations(tgt.relations)
        t_rel = [x for x in t_rel if x.get("toId") != source_char.id]
        tgt.relations = json.dumps(t_rel, ensure_ascii=False)

def _sync_world_relations(src, new_relations, old_relations=None):
    new_rel = _parse_relations(json.dumps(new_relations, ensure_ascii=False))
    if old_relations is None:
        old_rel = _parse_relations(src.relations)
    else:
        old_rel = _parse_relations(json.dumps(old_relations, ensure_ascii=False)) if isinstance(old_relations, list) else _parse_relations(old_relations)

    old_targets = {r["toId"] for r in old_rel}
    new_targets = {r["toId"] for r in new_rel}

    for r in new_rel:
        tid = r["toId"]
        if tid == src.id: continue
        tgt = get_or_none(WorldItem, tid)
        if not tgt or tgt.project_id != src.project_id: continue
        t_rel = _parse_relations(tgt.relations)
        idx = next((i for i,x in enumerate(t_rel) if x.get("toId")==src.id), None)
        inv = _world_inv(r.get("type"))
        if idx is None:
            t_rel.append({"toId": src.id, "type": inv, "strength": r.get("strength",3), "notes": ""})
        else:
            t_rel[idx]["type"] = inv
            t_rel[idx]["strength"] = r.get("strength", t_rel[idx].get("strength",3))
        tgt.relations = json.dumps(t_rel, ensure_ascii=False)

    removed = old_targets - new_targets
    for tid in removed:
        tgt = get_or_none(WorldItem, tid)
        if not tgt or tgt.project_id != src.project_id: continue
        t_rel = _parse_relations(tgt.relations)
        t_rel = [x for x in t_rel if x.get("toId") != src.id]
        tgt.relations = json.dumps(t_rel, ensure_ascii=False)

# ----------------- Routes -----------------
@app.errorhandler(404)
def _404(e): return jsonify({"error": str(e)}), 404

@app.errorhandler(400)
def _400(e): return jsonify({"error":"Bad Request","detail":str(e)}), 400

# Projects
@app.route("/api/projects", methods=["GET","POST"])
def projects():
    if request.method == "POST":
        data = request.get_json() or {}
        p = Project(title=data.get("title","Neues Projekt"), description=data.get("description",""))
        db.session.add(p); db.session.commit()
        return jsonify(p.to_dict()), 201
    return jsonify([x.to_dict() for x in Project.query.all()])

from sqlalchemy import func
import traceback
from flask import current_app

@app.route("/api/projects/<int:pid>", methods=["GET", "PUT", "DELETE"])
def project_detail(pid):
    p = get_or_404(Project, pid)

    if request.method == "GET":
        try:
            data = p.to_dict()
            # defensiv, ohne order_index sortieren (nur nach id)
            chs = (
                Chapter.query
                .filter_by(project_id=pid)
                .order_by(Chapter.id.asc())
                .all()
            )
            data["chapters"] = [
                {"id": c.id, "title": c.title, "order_index": (c.order_index or 0)}
                for c in chs
            ]
            return jsonify(data)
        except Exception as ex:
            # Log für dich im Terminal und eine klare 500-Antwort
            current_app.logger.exception("GET /api/projects/<pid> failed")
            return jsonify({"error": "internal", "detail": str(ex)}), 500

    elif request.method == "PUT":
        data = request.get_json() or {}
        p.title = data.get("title", p.title)
        p.description = data.get("description", p.description)
        db.session.commit()
        return jsonify(p.to_dict())

    else:  # DELETE
        db.session.delete(p)
        db.session.commit()
        return jsonify({"ok": True})



# Chapters / Scenes (unchanged)
@app.route("/api/projects/<int:pid>/chapters", methods=["GET","POST"])
def project_chapters(pid):
    get_or_404(Project, pid)
    if request.method == "POST":
        data = request.get_json() or {}
        ch = Chapter(project_id=pid, title=data.get("title","Neues Kapitel"),
                     order_index=data.get("order_index",0), content=data.get("content",""))
        db.session.add(ch); db.session.commit(); return jsonify(ch.to_dict()), 201
    items = Chapter.query.filter_by(project_id=pid).order_by(Chapter.order_index.asc(), Chapter.id.asc()).all()
    return jsonify([x.to_dict() for x in items])

@app.route("/api/chapters/<int:cid>", methods=["GET","PUT","DELETE"])
def chapter_detail(cid):
    c = get_or_404(Chapter, cid)
    if request.method == "GET": return jsonify(c.to_dict())
    if request.method == "PUT":
        data = request.get_json() or {}
        c.title = data.get("title", c.title)
        c.order_index = data.get("order_index", c.order_index)
        c.content = data.get("content", c.content)
        db.session.commit(); return jsonify(c.to_dict())
    db.session.delete(c); db.session.commit(); return jsonify({"ok":True})

@app.route("/api/chapters/<int:cid>/scenes", methods=["GET","POST"])
def chapter_scenes(cid):
    get_or_404(Chapter, cid)
    if request.method == "POST":
        data = request.get_json() or {}
        sc = Scene(chapter_id=cid, title=data.get("title","Neue Szene"),
                   order_index=data.get("order_index",0), content=data.get("content",""))
        db.session.add(sc); db.session.commit(); return jsonify(sc.to_dict()), 201
    items = Scene.query.filter_by(chapter_id=cid).order_by(Scene.order_index.asc(), Scene.id.asc()).all()
    return jsonify([x.to_dict() for x in items])

@app.route("/api/scenes/<int:sid>", methods=["GET","PUT","DELETE"])
def scene_detail(sid):
    sc = get_or_404(Scene, sid)
    if request.method == "GET": return jsonify(sc.to_dict())
    if request.method == "PUT":
        data = request.get_json() or {}
        sc.title = data.get("title", sc.title)
        sc.order_index = data.get("order_index", sc.order_index)
        sc.content = data.get("content", sc.content)
        db.session.commit(); return jsonify(sc.to_dict())
    db.session.delete(sc); db.session.commit(); return jsonify({"ok":True})

# Characters (mit bidirektionaler Relation)
@app.route("/api/projects/<int:pid>/characters", methods=["GET","POST"])
def project_characters(pid):
    get_or_404(Project, pid)
    if request.method == "POST":
        data = request.get_json() or {}
        ch = Character(
            project_id=pid,
            name=data.get("name","Neue Figur"),
            role=data.get("role",""),
            age=str(data.get("age","")) if data.get("age","") is not None else "",
            description=data.get("description",""),
            relations=json.dumps(_parse_relations(json.dumps(data.get("relations",[]))), ensure_ascii=False),
            profile=json.dumps(_parse_profile(json.dumps(data.get("profile",{}))), ensure_ascii=False),
        )
        db.session.add(ch); db.session.commit()
        _sync_bidirectional_relations(ch, _parse_relations(ch.relations))
        db.session.commit()
        return jsonify(ch.to_dict()), 201
    items = Character.query.filter_by(project_id=pid).all()
    return jsonify([x.to_dict() for x in items])

@app.route("/api/characters/<int:cid>", methods=["GET","PUT","DELETE"])
def character_detail(cid):
    ch = get_or_404(Character, cid)
    if request.method == "GET": return jsonify(ch.to_dict())
    if request.method == "PUT":
        data = request.get_json() or {}
        ch.name = data.get("name", ch.name)
        ch.role = data.get("role", ch.role)
        age_val = data.get("age", ch.age)
        ch.age = "" if age_val is None else str(age_val)
        ch.description = data.get("description", ch.description)
        if "relations" in data:
            old_rel = _parse_relations(ch.relations)
            new_rel = _parse_relations(json.dumps(data.get("relations") or []))
            ch.relations = json.dumps(new_rel, ensure_ascii=False)
            _sync_bidirectional_relations(ch, new_rel, old_rel)
        if "profile" in data:
            prof = _parse_profile(json.dumps(data.get("profile") or {}))
            ch.profile = json.dumps(prof, ensure_ascii=False)
        db.session.commit(); return jsonify(ch.to_dict())
    # Delete: remove inverse
    others = Character.query.filter(Character.project_id==ch.project_id, Character.id!=ch.id).all()
    for o in others:
        rels = _parse_relations(o.relations)
        o.relations = json.dumps([r for r in rels if r.get("toId") != ch.id], ensure_ascii=False)
    db.session.delete(ch); db.session.commit(); return jsonify({"ok":True})

# ---------- ✅ WorldItems (Welt-Elemente) ----------
@app.route("/api/projects/<int:pid>/world-items", methods=["GET","POST"])
def project_world_items(pid):
    get_or_404(Project, pid)
    if request.method == "POST":
        data = request.get_json() or {}
        wi = WorldItem(
            project_id=pid,
            name=data.get("name","Neues Element"),
            kind=data.get("kind","Allgemein"),
            description=data.get("description",""),
            props=json.dumps(_parse_props(json.dumps(data.get("props",{}))), ensure_ascii=False),
            relations=json.dumps(_parse_relations(json.dumps(data.get("relations",[]))), ensure_ascii=False),
        )
        db.session.add(wi); db.session.commit()
        _sync_world_relations(wi, _parse_relations(wi.relations))
        db.session.commit()
        return jsonify(wi.to_dict()), 201
    items = WorldItem.query.filter_by(project_id=pid).order_by(WorldItem.id.asc()).all()
    return jsonify([x.to_dict() for x in items])

@app.route("/api/world-items/<int:w_id>", methods=["GET","PUT","DELETE"])
def world_item_detail(w_id):
    wi = get_or_404(WorldItem, w_id)
    if request.method == "GET":
        return jsonify(wi.to_dict())
    if request.method == "PUT":
        data = request.get_json() or {}
        wi.name = data.get("name", wi.name)
        wi.kind = data.get("kind", wi.kind)
        wi.description = data.get("description", wi.description)
        if "props" in data:
            wi.props = json.dumps(_parse_props(json.dumps(data.get("props") or {})), ensure_ascii=False)
        if "relations" in data:
            old_rel = _parse_relations(wi.relations)
            new_rel = _parse_relations(json.dumps(data.get("relations") or []))
            wi.relations = json.dumps(new_rel, ensure_ascii=False)
            _sync_world_relations(wi, new_rel, old_rel)
        db.session.commit()
        return jsonify(wi.to_dict())
    # DELETE: inverse entfernen
    others = WorldItem.query.filter(WorldItem.project_id==wi.project_id, WorldItem.id!=wi.id).all()
    for o in others:
        rels = _parse_relations(o.relations)
        o.relations = json.dumps([r for r in rels if r.get("toId") != wi.id], ensure_ascii=False)
    db.session.delete(wi); db.session.commit(); return jsonify({"ok":True})

# ---------- Graphen ----------
@app.route("/api/projects/<int:pid>/relations-graph", methods=["GET"])
def project_relations_graph(pid):
    # Characters-Graph (unverändert, Labels etc.)
    if not HAS_PYVIS: abort(500, "PyVis nicht installiert (pip install pyvis).")
    get_or_404(Project, pid)
    chars = Character.query.filter_by(project_id=pid).all()
    net = Network(height="100%", width="100%", bgcolor="#ffffff", font_color="#222"); net.barnes_hut()
    for c in chars:
        label = c.name or f"#{c.id}"
        title = f"<b>{label}</b><br>Rolle: {c.role or '-'}<br>Alter: {c.age or '-'}"
        color = "#60a5fa" if (c.role or "").lower().startswith("protagon") else "#c084fc" if (c.role or "").lower().startswith("antagon") else "#94a3b8"
        net.add_node(c.id, label=label, title=title, shape='dot', size=16, color=color)
    pairs = {}
    for c in chars:
        for r in _parse_relations(c.relations):
            tid = r["toId"]; 
            if tid == c.id: continue
            a,b = (c.id, tid) if c.id < tid else (tid, c.id)
            e = pairs.setdefault((a,b), {"a":None,"b":None})
            if a == c.id: e["a"] = r
            else: e["b"] = r
    for (a,b), e in pairs.items():
        t1 = (e["a"] or {}).get("type"); t2 = (e["b"] or {}).get("type")
        s1 = int((e["a"] or {}).get("strength",3)) if str((e["a"] or {}).get("strength","")).isdigit() else 3
        s2 = int((e["b"] or {}).get("strength",3)) if str((e["b"] or {}).get("strength","")).isdigit() else 3
        weight = int(round((s1 + s2)/2))
        label = t1 if (t1 and t1==t2) else (f"{t1} ↔ {t2}" if (t1 and t2) else (t1 or t2 or "Beziehung"))
        net.add_edge(a,b, title=label, value=weight, label=label)
    net.set_options('{"physics":{"barnesHut":{"gravitationalConstant":-8000,"springLength":220,"springConstant":0.04},"stabilization":{"iterations":250}},"edges":{"smooth":{"type":"dynamic"},"color":{"inherit":true},"font":{"size":12,"background":"rgba(255,255,255,0.85)","align":"top"}},"nodes":{"scaling":{"min":10,"max":24}}}')
    tmp = os.path.join(tempfile.gettempdir(), f"relations_{pid}.html"); net.write_html(tmp, notebook=False)
    with open(tmp, "r", encoding="utf-8") as f: html = f.read()
    inject = "<style>html,body,#mynetwork{height:100vh!important;width:100%!important;margin:0;padding:0;}</style>"
    return Response(html.replace("</head>", f"{inject}</head>"), mimetype="text/html")

@app.route("/api/projects/<int:pid>/world-graph", methods=["GET"])
def project_world_graph(pid):
    if not HAS_PYVIS: abort(500, "PyVis nicht installiert (pip install pyvis).")
    get_or_404(Project, pid)
    items = WorldItem.query.filter_by(project_id=pid).all()
    net = Network(height="100%", width="100%", bgcolor="#ffffff", font_color="#222"); net.barnes_hut()
    # simple Farbpalette je Kind
    def color_for(kind):
        k = (kind or "").lower()
        if "könig" in k: return "#f59e0b"
        if "land" in k or "region" in k: return "#22c55e"
        if "stadt" in k or "ort" in k: return "#38bdf8"
        if "organisation" in k or "kirche" in k or "gilde" in k: return "#a78bfa"
        if "beruf" in k: return "#ef4444"
        return "#94a3b8"
    for it in items:
        label = it.name or f"#{it.id}"
        title = f"<b>{label}</b><br>Typ: {it.kind or '-'}"
        net.add_node(it.id, label=label, title=title, shape='dot', size=15, color=color_for(it.kind))
    pairs = {}
    for it in items:
        for r in _parse_relations(it.relations):
            tid = r["toId"]; 
            if tid == it.id: continue
            a,b = (it.id, tid) if it.id < tid else (tid, it.id)
            e = pairs.setdefault((a,b), {"a":None,"b":None})
            if a == it.id: e["a"] = r
            else: e["b"] = r
    for (a,b), e in pairs.items():
        t1 = (e["a"] or {}).get("type"); t2 = (e["b"] or {}).get("type")
        label = t1 if (t1 and t1==t2) else (f"{t1} ↔ {t2}" if (t1 and t2) else (t1 or t2 or "Beziehung"))
        net.add_edge(a,b, title=label, value=2, label=label)
    net.set_options('{"physics":{"barnesHut":{"gravitationalConstant":-9000,"springLength":220,"springConstant":0.05},"stabilization":{"iterations":250}},"edges":{"smooth":{"type":"dynamic"},"font":{"size":12,"background":"rgba(255,255,255,0.85)","align":"top"}}}')
    tmp = os.path.join(tempfile.gettempdir(), f"world_{pid}.html"); net.write_html(tmp, notebook=False)
    with open(tmp, "r", encoding="utf-8") as f: html = f.read()
    inject = "<style>html,body,#mynetwork{height:100vh!important;width:100%!important;margin:0;padding:0;}</style>"
    return Response(html.replace("</head>", f"{inject}</head>"), mimetype="text/html")

# Book export
@app.route("/api/projects/<int:pid>/book", methods=["GET"])
def project_book(pid):
    p = get_or_404(Project, pid)
    chapters = (Chapter.query.options(selectinload(Chapter.scenes))
                .filter_by(project_id=pid)
                .order_by(Chapter.order_index.asc(), Chapter.id.asc()).all())
    data = [{
        "id": c.id, "title": c.title, "order_index": c.order_index,
        "scenes": [{"id": s.id, "title": s.title, "order_index": s.order_index, "content": s.content or ""} 
                   for s in sorted(c.scenes, key=lambda s: (s.order_index, s.id))]
    } for c in chapters]
    return jsonify({"project": p.to_dict(), "chapters": data})

def ensure_project_columns():
    ensure_column("projects", "description", "TEXT DEFAULT ''")
    ensure_column("projects", "updated_at", "DATETIME")

def ensure_chapter_columns():
    ensure_column("chapters", "order_index", "INTEGER DEFAULT 0")
    ensure_column("chapters", "content", "TEXT DEFAULT ''")
    ensure_column("chapters", "updated_at", "DATETIME")

def ensure_scene_columns():
    ensure_column("scenes", "order_index", "INTEGER DEFAULT 0")
    ensure_column("scenes", "content", "TEXT DEFAULT ''")
    ensure_column("scenes", "updated_at", "DATETIME")


# ✅ Einmalige Initialisierung – läuft bei jedem Start (Gunicorn, flask run, python app.py)
with app.app_context():
    db.create_all()
    ensure_project_columns()
    ensure_chapter_columns()
    ensure_scene_columns()
    ensure_relations_column()
    ensure_profile_column()


@app.get("/healthz")
def healthz():
    # einfacher Lebenscheck – KEIN DB-Zugriff
    return {"ok": True}, 200

@app.get("/api/healthz/db")
def healthz_db():
    try:
        with engine.connect() as con:
            con.execute(text("select 1"))
        return {"ok": True}, 200
    except Exception as e:
        app.logger.exception("DB health failed")
        return {"ok": False, "error": str(e)}, 500

try:
    Base.metadata.create_all(bind=engine)
except SQLAlchemyError as e:
    app.logger.exception("DB init skipped: %s", e)

# Optional für lokalen Start per `python app.py`
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)