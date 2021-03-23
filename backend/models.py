import os
import json
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from sqlalchemy import (
Column,
String,
Integer,
Date,
LargeBinary,
create_engine
)


database_name = "capstone"
database_path = "postgresql://{}@{}/{}".format(
    'purvi', 'localhost:5432', database_name)

db = SQLAlchemy()

'''
setup_db(app)
    binds a flask application and a SQLAlchemy service
'''


def setup_db(app, database_path=database_path):
    app.config["SQLALCHEMY_DATABASE_URI"] = database_path
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)
    migrate = Migrate(app, db)
    db.create_all()


'''
Actor_Movie

'''
# Implement many-to-many relationship using actor_movie with Actor and Movie tables

class Movie_Actor(db.Model):
    __tablename__ = 'movie_actor'

    id = db.Column(db.Integer, primary_key=True)
    actor_id = db.Column(db.Integer, db.ForeignKey('actors.id', ondelete="CASCADE"), nullable=False)
    movie_id = db.Column(db.Integer, db.ForeignKey('movies.id', ondelete="CASCADE"), nullable=False)

    def __repr__(self):
        return f'<Movie_Actor {self.id}>'

'''
Movie

'''

class Movie(db.Model):
    __tablename__ = 'movies'

    id = Column(Integer, primary_key=True)
    title = Column(String)
    actor_ids = Column(String)
    release_date = Column(Date)
    movie_actors = db.relationship('Movie_Actor', cascade="all, delete", backref='movies', lazy=True)


    def __init__(self, title, release_date, actor_ids):
        self.title = title
        self.actor_ids = actor_ids
        self.release_date = release_date

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def format(self):
        # Get actor details for the movie
        actor_ids_values = self.actor_ids
        actor = []
        if(actor_ids_values):
            actor_ids_array = actor_ids_values.replace("}","").replace("{","")
            actor_ids = list(actor_ids_array.split(","))
            actors_details = Actor.id.in_(actor_ids)
            actor = [{'name': r['name'], 'age': r['age'], 'gender': r['gender']}
                        for r in actors_details]
        print(self.release_date)
        return {
            'id': self.id,
            'title': self.title,
            'release_date': self.release_date,
            'actor': actor,
        }


'''
Actor

'''

class Actor(db.Model):
    __tablename__ = 'actors'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    gender = Column(String)
    age = Column(Integer)
    movie_actors = db.relationship('Movie_Actor', cascade="all, delete", backref='actors', lazy=True)

    def __init__(self, name, gender, age):
        self.name = name
        self.gender = gender
        self.age = age

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def format(self):
        return {
            'id': self.id,
            'name': self.name,
            'gender': self.gender,
            'age': self.age
        }
