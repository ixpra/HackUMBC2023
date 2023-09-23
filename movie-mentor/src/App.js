import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';









function App() {
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