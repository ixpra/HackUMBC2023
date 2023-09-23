import React from 'react';
import { Link } from 'react-router-dom';
import { HomeContainer, BackgroundVideo, Content, LargeText, TransparentButton } from '../components/InfoSection/HomeElements';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {

  return (
    <>
    <Navbar/>
    <HomeContainer>
      <BackgroundVideo autoPlay muted loop>
        {/* <source src={require('../assets/.mp4')} type="video/mp4" /> */}
      </BackgroundVideo>

      <Content>
        <LargeText>Delve Into The Cinematic Gems</LargeText>
        <div>
          <Link to="/roadmaps">
            <TransparentButton>ggg</TransparentButton>
          </Link>
          <Link to="/about">
            <TransparentButton>ggg</TransparentButton>
          </Link>
        </div>
      </Content>
    </HomeContainer>
    <Footer/>
    </>
  );
};

export default Home;