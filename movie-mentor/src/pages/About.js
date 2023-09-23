import {React, useEffect} from 'react';



import '../css/Navbar.css';

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


  return (
    <>  
        <Navbar/>

        <div className='events-page-container'>

            <h1 className='events-page-title' id='team-page-title'>About us</h1>
            <p className='alt-subtitle'>
            Bharat Mahotsav Mandal (BMM) LATAM is an organization that strives to organize a diverse and vibrant 
            Santana Dharmic society that can contribute to the welfare of the world. BMM works to bring together the Santana Dharmic 
            community in LATAM to practice, preserve, and advance ideals and values of Sanatana Dharma. BMM organizes family camps, games,
             bhajans, service activities, community outreach projects, and much more! BMM LATAM strives to instill pride in Santana heritage 
             and to enhance appreciation of Santana Dharma practicers around the world, their traditions,
             and civilization by the broader community in LATAM.
            </p>
  
        
        </div>

        <Footer/>

    </>
  )
}

export default About