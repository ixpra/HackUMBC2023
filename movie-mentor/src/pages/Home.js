import React from 'react';
import { Link } from 'react-router-dom';
import { HomeContainer, BackgroundVideo, Content, LargeText, TransparentButton } from '../components/InfoSection/HomeElements';

const Home = () => {

  return (
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
  );
};

export default Home;