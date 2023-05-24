import numpy as np
import pandas as pd
from flask import Flask, request, jsonify, render_template
import pickle
import sqlalchemy as sql

#create flask app
flask_app = Flask(__name__)

#get sqlitedb
engine=sql.create_engine('sqlite:///data/DataBase.sqlite')

# load the model
model = pickle.load(open("model.pkl","rb"))
scaler = pickle.load(open("scaler.pkl","rb"))
@flask_app.route("/")
def Home():
    return render_template("index.html")

# Points the to the directions of the data source
@flask_app.route('/data')
def other_data(): 
    results=engine.execute('select * from data').all()
    data=[]
    for each_result in results: 
        data.append(list(each_result))
    return jsonify(data)

@flask_app.route("/predict", methods = ["POST"])
def predict():
    float_features = [float(x) for x in request.form.values()]
    features = [np.array(float_features)]
    df_features = pd.DataFrame(features, columns = ['concave points_mean', 'radius_worst', 'perimeter_worst', 'area_worst', 'concavity_worst'])
    prediction = model.predict_proba(scaler.transform(df_features))
    probability_pred = prediction[0,1]*100

    return render_template("index.html", prediction_text = "Probability of being malignant is {}%.".format(probability_pred))

if __name__ == "__main__":
    flask_app.run(debug=True)