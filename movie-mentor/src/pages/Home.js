import React from 'react';
import { Link } from 'react-router-dom';
import { HomeContainer, BackgroundVideo, Content, LargeText, TransparentButton, SearchContainer, SearchInput, SearchButton } from '../components/InfoSection/HomeElements';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';


import '../styles/About.css';

const Home = () => {
  const [question, setQuestion] = useState("");
  const [movies, setMovies] = useState([]);


  const askOpenAI = async () => {
    try {
        const response = await axios.post('http://127.0.0.1:5000/ask', { question: question });
        setMovies(response.data.movies);
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
        <SearchContainer>
          <SearchInput value={question} onChange={e => setQuestion(e.target.value)} placeholder="Search movies..." />
          <SearchButton onClick={askOpenAI}>
             <i className="fa fa-search" /> Search
          </SearchButton>

          <div>
             {movies.map(movie => (
                <div key={movie.title}>
                  <strong>{movie.title}</strong>: {movie.description}
                </div>
             ))}
          </div>
        </SearchContainer>
        
      </Content>
    </HomeContainer>
    <Footer/>
    </>
);

};

export default Home;