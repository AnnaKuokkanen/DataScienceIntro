import pandas as pd
import numpy as np
from sklearn import LassoCV

def get_prediction(pop_total,vaccine_coverage,visits_private,drug_offences,alcohol_sales,combined_employed,combined_higher_education,combined_0_18,combined_18_64, combined_65):
    cols = ["pop_total", "vaccine_coverage", "visits_private", "drug_offences",
                  "alcohol_sales", "combined_employed", "combined_higher_education",
                  "combined_0_18", "combined_18_64", "combined_65", "health_cost"]
    
    df = pd.read_csv("../../data/data_clean.csv")[cols]

    X = df.iloc[:, :-1]
    y = df.iloc[:, -1]
    lasso_cv = LassoCV(cv=5, random_state=41)
    lasso_cv.fit(X, y)

    # Predictions
    y_pred = lasso_cv.predict(np.array([pop_total,vaccine_coverage,visits_private,drug_offences,alcohol_sales,combined_employed,combined_higher_education,combined_0_18,combined_18_64, combined_65]))

    return y_pred[0]