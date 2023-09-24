import React from 'react';
import { Link } from 'react-router-dom';
import { HomeContainer, BackgroundVideo, Content, LargeText, TransparentButton, SearchContainer, SearchInput } from '../components/InfoSection/HomeElements';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { useState } from 'react';
import axios from 'axios';


import '../styles/About.css';

const Home = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askOpenAI = async () => {
      try {
          const response = await axios.post('http://127.0.0.1:5000/ask', { question: question });
          setAnswer(response.data.answer)
      } catch (error) {
          console.error("Error asking OpenAI:", error);
      }
  }

  return (
    <>
    <Navbar/>
    <HomeContainer>
    
      <BackgroundVideo autoPlay muted loop>
         <source src={require('../assets/ocean.mp4')} type="video/mp4" /> 
      </BackgroundVideo>

      <Content>
        <LargeText>Your Cinematic Discovery</LargeText>
        {/* <div className='alt-subtitle'> */}
        <SearchContainer>
          <SearchInput value={question} onChange={e => setQuestion(e.target.value)} placeholder="Search movies..." />
          <button onClick={askOpenAI}>Search</button>
          <div>Answer: {answer} </div>
        </SearchContainer>
        {/* </div> */}
        
      </Content>
    </HomeContainer>
    <Footer/>
    </>
  );
};

export default Home;