import React from 'react';
import { Configuration } from 'openai';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';










function App() {

  const config = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  })
  const openai = new OpenAIApi(config);
  const [prompt, setPrompt] = useState('')  
  const [result, setResult] = useState('')
  const [loading, setLoading] = UseState(false) 

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



  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path='/about' exact Component={About}/>

      </Routes>
    </Router>
  );
}



export default App;