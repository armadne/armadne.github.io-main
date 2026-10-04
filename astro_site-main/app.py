from flask import Flask, render_template

app = Flask(__name__)
app.secret_key = "hello"

@app.route("/")
def base():
    return render_template("base.html")

@app.route("/accueil")
def accueil():
    return render_template("accueil.html")

@app.route('/home')
def home():
    return render_template("home.html")

@app.route("/solar_system")
def solar():
    return render_template("solar_system.html")

@app.route("/galaxies")
def galaxies():
    return render_template("galaxies.html")

@app.route("/universe")
def universe():
    return render_template("universe.html")

if __name__ == "__main__":
    with app.app_context():
        #db.create_all()
        app.run(debug=True)

