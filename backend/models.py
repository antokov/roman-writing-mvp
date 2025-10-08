# backend/models.py
from __future__ import annotations

from datetime import datetime
from sqlalchemy import String, Text, Integer, ForeignKey, func
from sqlalchemy.types import DateTime
from sqlalchemy.orm import Mapped, mapped_column, relationship

from .db import Base

# -------- Schreiben --------
class Project(Base):
    __tablename__ = "projects"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    title: Mapped[str] = mapped_column(String(200), default="Neues Projekt")
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    chapters: Mapped[list["Chapter"]] = relationship(
        back_populates="project", cascade="all, delete-orphan", order_by="Chapter.order_index"
    )

    def to_dict_min(self) -> dict: return {"id": self.id, "title": self.title}
    def to_dict(self) -> dict:     return {"id": self.id, "title": self.title, "chapters": [c.to_dict_min() for c in self.chapters]}

class Chapter(Base):
    __tablename__ = "chapters"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    project_id: Mapped[int] = mapped_column(ForeignKey("projects.id", ondelete="CASCADE"), index=True)
    title: Mapped[str] = mapped_column(String(200), default="Kapitel")
    order_index: Mapped[int] = mapped_column(Integer, default=0)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    project: Mapped[Project] = relationship(back_populates="chapters")
    scenes: Mapped[list["Scene"]] = relationship(
        back_populates="chapter", cascade="all, delete-orphan", order_by="Scene.order_index"
    )

    def to_dict_min(self) -> dict: return {"id": self.id, "title": self.title}

class Scene(Base):
    __tablename__ = "scenes"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    chapter_id: Mapped[int] = mapped_column(ForeignKey("chapters.id", ondelete="CASCADE"), index=True)
    title: Mapped[str] = mapped_column(String(200), default="Neue Szene")
    content: Mapped[str] = mapped_column(Text, default="")
    order_index: Mapped[int] = mapped_column(Integer, default=0)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    chapter: Mapped[Chapter] = relationship(back_populates="scenes")

    def to_dict(self) -> dict: return {"id": self.id, "title": self.title, "content": self.content}

# -------- Charaktere --------
class Character(Base):
    __tablename__ = "characters"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    project_id: Mapped[int] = mapped_column(ForeignKey("projects.id", ondelete="CASCADE"), index=True)
    name: Mapped[str] = mapped_column(String(200))
    alias: Mapped[str] = mapped_column(String(200), default="")
    short_bio: Mapped[str] = mapped_column(Text, default="")
    avatar_url: Mapped[str] = mapped_column(String(500), default="")
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    def to_dict_min(self) -> dict: return {"id": self.id, "name": self.name, "alias": self.alias, "avatar_url": self.avatar_url}
    def to_dict(self) -> dict:     return {**self.to_dict_min(), "short_bio": self.short_bio}

# -------- Welt (generisch) --------
class WorldNode(Base):
    __tablename__ = "world_nodes"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    project_id: Mapped[int] = mapped_column(ForeignKey("projects.id", ondelete="CASCADE"), index=True)
    title: Mapped[str] = mapped_column(String(200))
    kind: Mapped[str] = mapped_column(String(80))        # z. B. "Königreich", "Kirche", "Beruf"
    summary: Mapped[str] = mapped_column(Text, default="")
    icon: Mapped[str] = mapped_column(String(80), default="")

    def to_dict_min(self) -> dict: return {"id": self.id, "title": self.title, "kind": self.kind, "icon": self.icon}
    def to_dict(self) -> dict:     return {**self.to_dict_min(), "summary": self.summary}
