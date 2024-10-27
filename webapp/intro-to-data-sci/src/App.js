import './App.css';
import { useState } from 'react'
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function App() {

  const [prediction, setPrediction] = useState(0)
  const [showPrediction, setShowPrediction] = useState(false)

  function getPrediction() {
    axios({
      method: "GET",
      url:"http://localhost:5000",
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
      <Form onSubmit={getPrediction}>
        <Button type="submit">Predict healthcare costs</Button>
      </Form>
      {showPrediction && <span>Your prediction is {prediction}!</span>}
    </div>
  );
}

export default App;
