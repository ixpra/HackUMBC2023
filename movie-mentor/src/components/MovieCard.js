import React from 'react'


import {FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'
import {BsWhatsapp,BsTwitter,BsFacebook} from 'react-icons/bs'


import '../styles/About.css'



const MovieCard = ({title,description}) => {
    // const SerpApi = require('google-search-results-nodejs')
    // const search = new SerpApi.GoogleSearch("Your Private Key")
    // search.json({
    // q: "Coffee", 
    // location: ""
    // }, (result) => {
    // console.log(result)
    // })
  return (
    <div className='member-card-container' id={''}>
        {/* {picture} */}
        <h1 className='member-name'>{title}</h1>
        <p className='member-role'>{description}</p>
        {/* <p className='member-major'>{description}</p> */}
        
    </div>
  )
}

export default MovieCard