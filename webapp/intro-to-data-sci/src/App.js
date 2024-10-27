import './App.css';
import { useState } from 'react'
import axios from "axios";

function App() {

  const [prediction, setPrediction] = useState(0)
  const [showPrediction, setShowPrediction] = useState(false)

  function getPrediction() {
    axios({
      method: "GET",
      url:"/",
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
      <header className="App-header">
        <span>Welcome to healthcare cost predictor!</span>
        <button onClick={getPrediction}>Predict healthcare costs</button>
        {showPrediction && <span>Your prediction is {prediction}!</span>}
      </header>
    </div>
  );
}

export default App;
