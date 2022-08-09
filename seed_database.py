import backend.app as app

app.db.init_app(app.app)
app.db.create_all(app=app.app)
print("Attempted to seed database")