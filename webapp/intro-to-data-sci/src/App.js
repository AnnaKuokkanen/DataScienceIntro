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
      url:"https://datascienceintro.onrender.com/",
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
        <p></p>
        <span>Please fill out the form to get your prediction</span>
      </header>
      <Form onSubmit={getPrediction}>
        <Form.Group>
          <Form.Label>Total population</Form.Label>
          <Form.Control type="number" placeholder="population" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Higher education qualifications (% women)</Form.Label>
          <Form.Control type="number" placeholder="Higher education qualifications (% women)" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Higher education qualifications (% men)</Form.Label>
          <Form.Control type="number" placeholder="Higher education qualifications (% men)" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Employed (% women)</Form.Label>
          <Form.Control type="text" placeholder="population" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Employed (% men)</Form.Label>
          <Form.Control type="text" placeholder="population" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Flu vaccination coverage (% of population aged )</Form.Label>
          <Form.Control type="text" placeholder="population" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Alcohol sales (litres in a year)</Form.Label>
          <Form.Control type="text" placeholder="population" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Total population:</Form.Label>
          <Form.Control type="text" placeholder="population" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Total population:</Form.Label>
          <Form.Control type="text" placeholder="population" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Total population:</Form.Label>
          <Form.Control type="text" placeholder="population" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Total population:</Form.Label>
          <Form.Control type="text" placeholder="population" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Total population:</Form.Label>
          <Form.Control type="text" placeholder="population" />
        </Form.Group>

        <Button class="button" type="submit">Predict healthcare costs</Button>
      </Form>
      {showPrediction && <span>Your prediction is {prediction}!</span>}
    </div>
  );
}

export default App;
