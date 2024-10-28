import './App.css';
import { useState } from 'react'
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function App() {

  const [prediction, setPrediction] = useState(0)
  const [showPrediction, setShowPrediction] = useState(false)

  const [popTotal, setPopTotal] = useState(0)
  const [vaccineCoverage, setVaccineCoverage] = useState(0)
  const [visitsPrivate, setVisitsPrivate] = useState(0)
  const [drugOffences, setDrugOffences] = useState(0)
  const [alcoholSales, setAlcoholSales] = useState(0)
  const [combinedEmployed, setCombinedEmployed] = useState(0)
  const [combinedHigher, setCombinedHigher] = useState(0)
  const [combined_0_18, setCombined_0_18] = useState(0)
  const [combined_18_64, setCombined_18_64] = useState(0)
  const [combined_65, setCombined_65] = useState(0)


  function getPrediction(event) {
    event.preventDefault();
    axios({
      method: "GET",
      url: "https://datascienceintro.onrender.com/",
      params: {
        pop_total: popTotal,
        vaccine_coverage: vaccineCoverage,
        visits_private: visitsPrivate,
        drug_offences: drugOffences,
        alcohol_sales: alcoholSales,
        combined_employed: combinedEmployed,
        combined_higher_education: combinedHigher,
        combined_0_18: combined_0_18,
        combined_18_64: combined_18_64,
        combined_65: combined_65
      }
    }).then((response) => {
      const res = response.data
      setPrediction(res.prediction)
      setShowPrediction(true)
    }).catch((error) => {
      console.log("Something went wrong!")
    })
  }

  function resetState() {
    setPrediction(0)
    setShowPrediction(false)

    setPopTotal(0)
    setVaccineCoverage(0)
    setVisitsPrivate(0)
    setDrugOffences(0)
    setAlcoholSales(0)
    setCombinedEmployed(0)
    setCombinedHigher(0)
    setCombined_0_18(0)
    setCombined_18_64(0)
    setCombined_65(0)
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
                  <Form.Control type="number" placeholder="0" onChange={(e) => setPopTotal(parseInt(e.target.value))}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Higher education qualifications (% population)</Form.Label>
                  <Form.Control type="number" step="0.01" placeholder="0.0" onChange={(e) => setCombinedHigher(parseFloat(e.target.value))}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Employed (% population)</Form.Label>
                  <Form.Control type="number" step="0.01" placeholder="0.0" onChange={(e) => setCombinedEmployed(parseFloat(e.target.value))}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Flu vaccination coverage (% of population aged 65 and over)</Form.Label>
                  <Form.Control type="number" step="0.01" placeholder="0.0" onChange={(e) => setVaccineCoverage(parseFloat(e.target.value))}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Alcohol sales (litres in a year)</Form.Label>
                  <Form.Control type="number" step="0.01" placeholder="0.0" onChange={(e) => setAlcoholSales(parseFloat(e.target.value))}/>
                </Form.Group>
              </div>
              <div className='right'>
                <Form.Group>
                  <Form.Label>Drug offences (per 1000 inhabitants)</Form.Label>
                  <Form.Control type="number" step="0.01" placeholder="0.0" onChange={(e) => setDrugOffences(parseFloat(e.target.value))}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Visits to private healthcare services</Form.Label>
                  <Form.Control type="number" placeholder="0" onChange={(e) => setVisitsPrivate(parseInt(e.target.value))}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Population aged 0 to 18 (% of total population)</Form.Label>
                  <Form.Control type="number" step="0.01" placeholder="0.0" onChange={(e) => setCombined_0_18(parseFloat(e.target.value))}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Population aged 18 to 64 (% of total population)</Form.Label>
                  <Form.Control type="number" step="0.01" placeholder="0.0" onChange={(e) => setCombined_18_64(parseFloat(e.target.value))}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Population aged 65 and over (% of total population)</Form.Label>
                  <Form.Control type="number" step="0.01" placeholder="0.0" onChange={(e) => setCombined_65(parseFloat(e.target.value))}/>
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
          <Button className="custom-button" size="sm" onClick={() => resetState()}>Try again</Button>
        </>
      }
    </div>
  );
}

export default App;
