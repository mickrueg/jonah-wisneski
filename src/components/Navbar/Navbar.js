import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const iconHamburgerMenu = "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z";
const iconX = "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z";

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState('mobile-menu-container')
    const [mobileIconHamburger, setMobileIconHamburger] = useState('mobile-icon')
    const [mobileIconX, setMobileIconX] = useState('mobile-icon hide')
    const [navBarContainer, setNavBarContainer] = useState('Navbar-container backdrop')

    const openMenu = () =>{
        (mobileMenu==='mobile-menu-container'? setMobileMenu('mobile-menu-container open') : setMobileMenu('mobile-menu-container'))
        if(mobileIconHamburger==='mobile-icon'){
            setMobileIconHamburger('mobile-icon hide')
            setMobileIconX('mobile-icon')
            setNavBarContainer('Navbar-container backdropped')
        }else{
            setMobileIconHamburger('mobile-icon')
            setMobileIconX('mobile-icon hide')
            setNavBarContainer('Navbar-container backdrop')
        }
    }

    return (
        <div className='Navbar-main'>
            <div className={navBarContainer}>
                <div className='nav-text'>
                    <Link to="/" className='jonah-wisneski-title'>
                        <h1>JONAH WISNESKI</h1>
                    </Link>
                </div>
                <div className='mobile-icon-container'>
                    <div className='mobile-icon' onClick={()=>openMenu()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" viewBox="0 0 16 16" className={mobileIconHamburger}>
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" viewBox="0 0 16 16" className={mobileIconX}>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className={mobileMenu}>
                <div className='whitespace'></div>
                <ul className='mobile-menu-items'>
                    <div className='mobile-menu-item'>
                        <Link className='mobile-menu-text' to="/" onClick={()=>openMenu()}><h2>MUSIC</h2></Link>
                    </div>
                    <div className='mobile-menu-item'>
                        <Link className='mobile-menu-text' to="/contact" onClick={()=>openMenu()}><h2>CONTACT</h2></Link>
                    </div>
                    <div className='mobile-menu-item'>
                        <li className='mobile-menu-text'><h2>SHOWS</h2></li>
                    </div>
                    <div className='mobile-menu-item'>
                        <li className='mobile-menu-text'><h2><u>OTHER
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="other-worlds-link" viewBox="0 0 16 16">
                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                        </svg>
                            <br></br>WORLDS
                        </u></h2>
                        </li>
                    </div>
                </ul>
                <div className='whitespace'></div>
            </div>
        </div>
    );
};

export default Navbar;