from backend.app import app, db

db.create_all(app=app)