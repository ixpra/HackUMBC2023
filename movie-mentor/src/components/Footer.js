import React from 'react'
import '../styles/Footer.css'

import { FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='foot-branding'>
            <span>Code & Design by Movie Mentor</span>
            {/* <img src={require('../assets/hsslogo.png')}/> */}
            {/* <span>Movie Mentor</span> */}
            {/* <a target="_blank" href="https://www.instagram.com/bmmlatam/">
                <FaInstagram className='foot-social'/>
            </a> */}
            
        </div>

        <p>HackUMBC 2023</p>

    </div>
  )
}

export default Footer