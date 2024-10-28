from flask import Flask, request 
from flask_cors import CORS, cross_origin
from model import get_prediction

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
@cross_origin()
def predict():
    pop_total = int(request.args.get('pop_total'))
    vaccine_coverage = float(request.args.get('vaccine_coverage'))
    visits_private = int(request.args.get('visits_private'))
    drug_offences = float(request.args.get('drug_offences'))
    alcohol_sales = float(request.args.get('alcohol_sales'))
    combined_employed = float(request.args.get('combined_employed'))
    combined_higher_education = float(request.args.get('combined_higher_education'))
    combined_0_18 = float(request.args.get('combined_0_18'))
    combined_18_64 = float(request.args.get('combined_18_64'))
    combined_65 = float(request.args.get('combined_65'))
    
    return {"prediction": get_prediction(pop_total,vaccine_coverage,visits_private,drug_offences,alcohol_sales,combined_employed,combined_higher_education,combined_0_18,combined_18_64, combined_65)}

if __name__ == "__main__":
    app.run()