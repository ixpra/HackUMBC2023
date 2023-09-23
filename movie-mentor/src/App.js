import React from 'react';
import  OpenAI from 'openai';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Test from './pages/Test';









function App() {

  return (
    <Router>
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