import React from 'react';
import { Configuration, OpenAIApi } from 'openai';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Test from './pages/Test';









function App() {

  const config = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  })
  const openai = new OpenAIApi(config);
  const [prompt, setPrompt] = useState('')  
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false) 

  const handleChange = async () => {
    setLoading(true)
    try {
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 350,
      })
      setResult(response.data.choices[0].text)
    } catch(error) { 
        console.log(error);
    }
    setLoading(false)
  }

  const textAreaStyle = {
    top:"40px",
    left:"40px",
  };

  return (
    <Router>
      <div>
        <textarea 
        style={textAreaStyle}
        value = {prompt}
        placeholder = "Start writing here..."
        onChange = {e => setPrompt(e.target.value)}
        name="" id="" cols="30" rows="10"></textarea>
        <button onClick={handleChange}> 
          {loading ? 'Loading...' : 'Done'}
        </button>
      </div>
      <div>
        <p>{result}</p>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path='/about' exact Component={About}/>
        <Route path='/test' exact Component={Test}/>

      </Routes>
    </Router>
  );
}



export default App;