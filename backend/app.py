from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import os

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# SQLite config
db_path = os.path.join(os.path.dirname(__file__), "app.db")
app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{db_path}"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

# -----------------
# Models
# -----------------
class Project(db.Model):
    __tablename__ = "projects"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, default="")
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    chapters = db.relationship("Chapter", backref="project", cascade="all, delete-orphan", lazy=True)
    characters = db.relationship("Character", backref="project", cascade="all, delete-orphan", lazy=True)
    locations = db.relationship("Location", backref="project", cascade="all, delete-orphan", lazy=True)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "created_at": self.created_at.isoformat() if self.created_at else None,
            "updated_at": self.updated_at.isoformat() if self.updated_at else None,
        }


class Chapter(db.Model):
    __tablename__ = "chapters"
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable=False)
    title = db.Column(db.String(255), nullable=False, default="Neues Kapitel")
    order_index = db.Column(db.Integer, default=0)
    content = db.Column(db.Text, default="")
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    scenes = db.relationship("Scene", backref="chapter", cascade="all, delete-orphan", lazy=True)


    def to_dict(self):
        return {
            "id": self.id,
            "project_id": self.project_id,
            "title": self.title,
            "order_index": self.order_index,
            "content": self.content,
            "updated_at": self.updated_at.isoformat() if self.updated_at else None,
        }

class Scene(db.Model):
    __tablename__ = "scenes"
    id = db.Column(db.Integer, primary_key=True)
    chapter_id = db.Column(db.Integer, db.ForeignKey("chapters.id"), nullable=False)
    title = db.Column(db.String(255), nullable=False, default="Neue Szene")
    order_index = db.Column(db.Integer, default=0)
    content = db.Column(db.Text, default="")
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "chapter_id": self.chapter_id,
            "title": self.title,
            "order_index": self.order_index,
            "content": self.content,
            "updated_at": self.updated_at.isoformat() if self.updated_at else None,
        }


class Character(db.Model):
    __tablename__ = "characters"
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(255), default="")
    age = db.Column(db.String(50), default="")  # keep flexible
    description = db.Column(db.Text, default="")

    def to_dict(self):
        return {
            "id": self.id,
            "project_id": self.project_id,
            "name": self.name,
            "role": self.role,
            "age": self.age,
            "description": self.description,
        }


class Location(db.Model):
    __tablename__ = "locations"
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    region = db.Column(db.String(255), default="")
    description = db.Column(db.Text, default="")

    def to_dict(self):
        return {
            "id": self.id,
            "project_id": self.project_id,
            "name": self.name,
            "region": self.region,
            "description": self.description,
        }


# -----------------
# Helpers
# -----------------
def get_or_404(model, id_):
    item = db.session.get(model, id_)
    if not item:
        return None
    return item


# -----------------
# API Routes
# -----------------
@app.route("/api/health", methods=["GET"])
def health():
    return {"status": "ok", "time": datetime.utcnow().isoformat()}


# Projects
@app.route("/api/projects", methods=["GET", "POST"])
def projects():
    if request.method == "POST":
        data = request.get_json() or {}
        title = data.get("title", "Neues Projekt")
        description = data.get("description", "")
        p = Project(title=title, description=description)
        db.session.add(p)
        db.session.commit()
        return jsonify(p.to_dict()), 201

    # GET
    items = Project.query.order_by(Project.updated_at.desc()).all()
    return jsonify([x.to_dict() for x in items])


@app.route("/api/projects/<int:pid>", methods=["GET", "PUT", "DELETE"])
def project_detail(pid):
    p = get_or_404(Project, pid)
    if not p:
        return jsonify({"error": "Project not found"}), 404

    if request.method == "GET":
        # Include chapter list (lightweight)
        data = p.to_dict()
        chapters = Chapter.query.filter_by(project_id=pid).order_by(Chapter.order_index.asc()).all()
        data["chapters"] = [{"id": c.id, "title": c.title, "order_index": c.order_index} for c in chapters]
        return jsonify(data)

    if request.method == "PUT":
        data = request.get_json() or {}
        p.title = data.get("title", p.title)
        p.description = data.get("description", p.description)
        db.session.commit()
        return jsonify(p.to_dict())

    if request.method == "DELETE":
        db.session.delete(p)
        db.session.commit()
        return jsonify({"ok": True})


# Chapters
@app.route("/api/projects/<int:pid>/chapters", methods=["GET", "POST"])
def project_chapters(pid):
    # ensure project exists
    if not get_or_404(Project, pid):
        return jsonify({"error": "Project not found"}), 404

    if request.method == "POST":
        data = request.get_json() or {}
        title = data.get("title", "Neues Kapitel")
        order_index = data.get("order_index", 0)
        c = Chapter(project_id=pid, title=title, order_index=order_index, content=data.get("content", ""))
        db.session.add(c)
        db.session.commit()
        return jsonify(c.to_dict()), 201

    # GET
    items = Chapter.query.filter_by(project_id=pid).order_by(Chapter.order_index.asc()).all()
    return jsonify([x.to_dict() for x in items])


@app.route("/api/chapters/<int:cid>", methods=["GET", "PUT", "DELETE"])
def chapter_detail(cid):
    c = get_or_404(Chapter, cid)
    if not c:
        return jsonify({"error": "Chapter not found"}), 404

    if request.method == "GET":
        return jsonify(c.to_dict())

    if request.method == "PUT":
        data = request.get_json() or {}
        c.title = data.get("title", c.title)
        c.order_index = data.get("order_index", c.order_index)
        c.content = data.get("content", c.content)
        db.session.commit()
        return jsonify(c.to_dict())

    if request.method == "DELETE":
        db.session.delete(c)
        db.session.commit()
        return jsonify({"ok": True})

# Scenes � list/create per chapter
@app.route("/api/chapters/<int:cid>/scenes", methods=["GET", "POST"])
def chapter_scenes(cid):
    ch = get_or_404(Chapter, cid)
    if not ch:
        return jsonify({"error": "Chapter not found"}), 404

    if request.method == "POST":
        data = request.get_json() or {}
        sc = Scene(
            chapter_id=cid,
            title=data.get("title", "Neue Szene"),
            order_index=data.get("order_index", 0),
            content=data.get("content", "")
        )
        db.session.add(sc)
        db.session.commit()
        return jsonify(sc.to_dict()), 201

    items = Scene.query.filter_by(chapter_id=cid).order_by(Scene.order_index.asc()).all()
    return jsonify([x.to_dict() for x in items])


# Scenes � detail/update/delete
@app.route("/api/scenes/<int:sid>", methods=["GET", "PUT", "DELETE"])
def scene_detail(sid):
    sc = get_or_404(Scene, sid)
    if not sc:
        return jsonify({"error": "Scene not found"}), 404

    if request.method == "GET":
        return jsonify(sc.to_dict())

    if request.method == "PUT":
        data = request.get_json() or {}
        sc.title = data.get("title", sc.title)
        sc.order_index = data.get("order_index", sc.order_index)
        sc.content = data.get("content", sc.content)
        db.session.commit()
        return jsonify(sc.to_dict())

    if request.method == "DELETE":
        db.session.delete(sc)
        db.session.commit()
        return jsonify({"ok": True})



# Characters
@app.route("/api/projects/<int:pid>/characters", methods=["GET", "POST"])
def project_characters(pid):
    if not get_or_404(Project, pid):
        return jsonify({"error": "Project not found"}), 404

    if request.method == "POST":
        data = request.get_json() or {}
        ch = Character(
            project_id=pid,
            name=data.get("name", "Neue Figur"),
            role=data.get("role", ""),
            age=data.get("age", ""),
            description=data.get("description", ""),
        )
        db.session.add(ch)
        db.session.commit()
        return jsonify(ch.to_dict()), 201

    items = Character.query.filter_by(project_id=pid).all()
    return jsonify([x.to_dict() for x in items])


@app.route("/api/characters/<int:cid>", methods=["GET", "PUT", "DELETE"])
def character_detail(cid):
    ch = get_or_404(Character, cid)
    if not ch:
        return jsonify({"error": "Character not found"}), 404

    if request.method == "GET":
        return jsonify(ch.to_dict())

    if request.method == "PUT":
        data = request.get_json() or {}
        ch.name = data.get("name", ch.name)
        ch.role = data.get("role", ch.role)
        ch.age = data.get("age", ch.age)
        ch.description = data.get("description", ch.description)
        db.session.commit()
        return jsonify(ch.to_dict())

    if request.method == "DELETE":
        db.session.delete(ch)
        db.session.commit()
        return jsonify({"ok": True})


# Locations
@app.route("/api/projects/<int:pid>/locations", methods=["GET", "POST"])
def project_locations(pid):
    if not get_or_404(Project, pid):
        return jsonify({"error": "Project not found"}), 404

    if request.method == "POST":
        data = request.get_json() or {}
        loc = Location(
            project_id=pid,
            name=data.get("name", "Neuer Ort"),
            region=data.get("region", ""),
            description=data.get("description", ""),
        )
        db.session.add(loc)
        db.session.commit()
        return jsonify(loc.to_dict()), 201

    items = Location.query.filter_by(project_id=pid).all()
    return jsonify([x.to_dict() for x in items])


@app.route("/api/locations/<int:lid>", methods=["GET", "PUT", "DELETE"])
def location_detail(lid):
    loc = get_or_404(Location, lid)
    if not loc:
        return jsonify({"error": "Location not found"}), 404

    if request.method == "GET":
        return jsonify(loc.to_dict())

    if request.method == "PUT":
        data = request.get_json() or {}
        loc.name = data.get("name", loc.name)
        loc.region = data.get("region", loc.region)
        loc.description = data.get("description", loc.description)
        db.session.commit()
        return jsonify(loc.to_dict())

    if request.method == "DELETE":
        db.session.delete(loc)
        db.session.commit()
        return jsonify({"ok": True})

# Buchstruktur als JSON: Projekt > Kapitel (sortiert) > Szenen (sortiert)
@app.route("/api/projects/<int:pid>/book", methods=["GET"])
def project_book(pid):
    p = get_or_404(Project, pid)
    if not p:
        return jsonify({"error": "Project not found"}), 404

    chapters = Chapter.query.filter_by(project_id=pid).order_by(Chapter.order_index.asc(), Chapter.id.asc()).all()
    data = []
    for c in chapters:
        scenes = Scene.query.filter_by(chapter_id=c.id).order_by(Scene.order_index.asc(), Scene.id.asc()).all()
        data.append({
            "id": c.id,
            "title": c.title,
            "order_index": c.order_index,
            "scenes": [
                {
                    "id": s.id,
                    "title": s.title,
                    "order_index": s.order_index,
                    "content": s.content or ""
                } for s in scenes
            ]
        })

    return jsonify({
        "project": p.to_dict(),
        "chapters": data
    })



if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(host="127.0.0.1", port=5000, debug=True)
