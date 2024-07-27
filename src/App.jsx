import { useState } from 'react';
import axios from 'axios';

import './App.css';







function App() {
  const [quote, setQuote] = useState('')

  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice")
      const data = response.data.slip.advice
      setQuote(data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="app">
        <header className="app-header">
          <h1 className="header-title">Advice App</h1>
          <p className="header-subtitle">Get random pieces of advice to brighten your day!</p>
        </header>
        <div className="card">
          <h1 className="heading">{quote}</h1>
          <button className="button" onClick={fetchData}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default App
