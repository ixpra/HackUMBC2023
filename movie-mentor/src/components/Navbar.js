import {React, useState, useRef, useEffect} from 'react'

import { Link, useNavigate } from 'react-router-dom';
import {MdClose, MdMenu} from 'react-icons/md';



import '../styles/Navbar.css';

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

    
         

    const menuLeave = () => {
        document.getElementById("cool-menu").classList.remove("menu-enter");
        document.getElementById("cool-menu").classList.add("menu-leave");

        setTimeout(()=>{
            setMenu(false);
        }, 400);
    };
    const [menu, setMenu] = useState(false);

    



    return (
        <>
            {menu && (
                <div className='menu-container menu-enter' id='cool-menu'>
                    <MdClose className='close-menu' onClick={menuLeave}/>
                    <Link to='/'><p className='menu-btn'>Home</p></Link>


                    <Link to='/about'><p className='menu-btn'>About us</p></Link>






                    
                </div>
            )}

            
        
        {width > 900 && (
            <div className='nav' id='nav'>

                <div className='nav-buttons'>
                    <Link to='/about'><p className='nav-btn'>About us</p></Link>
                    
                    
                    
                </div>
            </div>
        )}
        {width < 900 && (
            <div className='mobile-nav' id='mobile-nav'>


                <MdMenu className='open-menu' onClick={()=>{setMenu(true)}}/>
            </div>
        )}

        </>
    )
}

export default Navbar;