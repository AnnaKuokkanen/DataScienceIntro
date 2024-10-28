import './App.css';
import { useState } from 'react'
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function App() {

  const [prediction, setPrediction] = useState(0)
  const [showPrediction, setShowPrediction] = useState(false)


  function getPrediction(event) {
    event.preventDefault();
    axios({
      method: "GET",
      url: "https://datascienceintro.onrender.com/",
      params: {
        pop_total: 100,
        vaccine_coverage: 50,
        visits_private: 243,
        drug_offences: 4.5,
        alcohol_sales: 28,
        combined_employed: 60,
        combined_higher_education: 80,
        combined_0_18: 22,
        combined_18_64: 62,
        combined_65: 16
      }
    }).then((response) => {
      const res = response.data
      setPrediction(res.prediction)
      setShowPrediction(true)
    }).catch((error) => {
      console.log("Something went wrong!")
    })
  }

  return (
    <div className="App">
      <header className="header">
        <span>Welcome to healthcare cost predictor!</span>
      </header>
      {!showPrediction &&
        <>
          <span>Please fill out the form to get your prediction</span>
          <Form className="form" onSubmit={getPrediction}>
            <div className="field-container">
              <div className='left'>
                <Form.Group>
                  <Form.Label>Total population</Form.Label>
                  <Form.Control type="number"/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Higher education qualifications (% population)</Form.Label>
                  <Form.Control type="number"/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Employed (% population)</Form.Label>
                  <Form.Control type="number"/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Flu vaccination coverage (% of population aged 65 and over)</Form.Label>
                  <Form.Control type="number"/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Alcohol sales (litres in a year)</Form.Label>
                  <Form.Control type="number"/>
                </Form.Group>
              </div>
              <div className='right'>
                <Form.Group>
                  <Form.Label>Drug offences (per 1000 inhabitants)</Form.Label>
                  <Form.Control type="number"/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Visits to private healthcare services</Form.Label>
                  <Form.Control type="number"/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Population aged 0 to 18 (% of total population)</Form.Label>
                  <Form.Control type="number"/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Population aged 18 to 64 (% of total population)</Form.Label>
                  <Form.Control type="number"/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Population aged 65 and over (% of total population)</Form.Label>
                  <Form.Control type="number"/>
                </Form.Group>
              </div>
            </div>
            <Button className="custom-button" type="submit" size="lg">Predict healthcare costs</Button>
          </Form>
        </>}
      {showPrediction &&
        <>
          <div>
            <span>Your prediction is {prediction}!</span>
          </div>
          <Button className="custom-button" size="sm" onClick={() => setShowPrediction(false)}>Try again</Button>
        </>
      }
    </div>
  );
}

export default App;
