from flask import Flask
from model import get_prediction

app = Flask(__name__)

@app.route("/")
def predict():
    return {"prediction": get_prediction()}

if __name__ == "__main__":
    app.run()