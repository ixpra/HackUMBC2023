import {React, useState, useRef, useEffect} from 'react'

import { Link, useNavigate } from 'react-router-dom';
import {MdClose, MdMenu} from 'react-icons/md';



import '../css/Navbar.css'

const Navbar = () => {  

    const navigate = useNavigate();
    

    

    // setting up variables for window width and height
    const [width, setWidth]   = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    // setting up listener for window resize
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    
         


    

    



    return (
        <>
            {menu && (
                <div className='menu-container menu-enter' id='cool-menu'>
                    <MdClose className='close-menu' onClick={menuLeave}/>
                    <Link to='/'><p className='menu-btn'>Home</p></Link>
                    {/* <Link to='/blood-drive'><p className='menu-btn red-text-mobile'>Blood Drive</p></Link> */}

                    <Link to='/about'><p className='menu-btn'>About us</p></Link>






                    
                </div>
            )}

            
        
        {width > 900 && (
            <div className='nav' id='nav'>
                <div className='top_logo' id='top_logo'>
                <Link to='/'><div className='toplogo'><img src={require("../assets/hsslogo.png")} alt="logo" className='logo' id="small_topcorner"/ ></div></Link>
                </div>
                <div className='nav-buttons'>
                    <Link to='/about'><p className='nav-btn'>About us</p></Link>
                    
                    
                    
                </div>
            </div>
        )}
        {width < 900 && (
            <div className='mobile-nav' id='mobile-nav'>
                <div className='top_logo' id='top_logo'>
                <Link to='/'><img src={require("../assets/cornerlogo.png")} alt="logo" className='logo' id="small_topcorner"/ ></Link>
                </div>

                <MdMenu className='open-menu' onClick={()=>{setMenu(true)}}/>
            </div>
        )}

        </>
    )
}

export default Navbar;