from flask import Flask
from flask_cors import CORS, cross_origin
from model import get_prediction

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
@cross_origin()
def predict():
    return {"prediction": get_prediction()}

if __name__ == "__main__":
    app.run()