import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import MessageInput from './components/MessageInput'
import PredictButton from './components/PredictButton'
import axios from "axios";
import ResultCard from "./components/ResultCard";

function App() {
  const [message, setMessage] = useState('')
  const [prediction, setPrediction] = useState("");
  const [confidence, setConfidence] = useState(0);



  const handlePredict = async () => {
    const response = await axios.post(
    "http://127.0.0.1:8000/predict",
    {
        message: message
    }
);
//  in do line se result UI par  show hoga 
setPrediction(response.data.prediction);
setConfidence(response.data.confidence);
}

 

 return (
  <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-100 flex justify-center items-center p-6">

      <div className="w-full max-w-4xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/40 p-8">


      <Header />

      <MessageInput
        message={message}
        setMessage={setMessage}
      />

      <PredictButton
        onPredict={handlePredict}
      />

      {prediction && (
        <ResultCard
          prediction={prediction}
          confidence={confidence}
        />
      )}

    </div>
  </div>
);
  
}

export default App
