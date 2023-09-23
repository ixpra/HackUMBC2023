import {React, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


import '../styles/Navbar.css';
import '../styles/About.css';

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


  return (
    <>  
        <Navbar/>

        <div className='team-page-container'>

            <h1 className='events-page-title' id='team-page-title'>About us</h1>
            <p className='alt-subtitle'>
            Search for related movies by inputting your favorite titles!
            </p>
  
        
        </div>

        <Footer/>

    </>
  )
}

export default About 