import React from 'react';
import { Link } from 'react-router-dom';
import { HomeContainer, BackgroundVideo, Content, LargeText, TransparentButton, SearchContainer, SearchInput } from '../components/InfoSection/HomeElements';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/About.css';

const Home = () => {

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
          <SearchInput type="text" placeholder="Search movies..." />
        </SearchContainer>
        {/* </div> */}
        
      </Content>
    </HomeContainer>
    <Footer/>
    </>
  );
};

export default Home;