import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
    const urlPath = window.location.pathname.substring(1);
    const [mobileMenu, setMobileMenu] = useState('mobile-menu-container')
    const [mobileIconHamburger, setMobileIconHamburger] = useState('mobile-icon')
    const [mobileIconX, setMobileIconX] = useState('mobile-icon hide')
    const [navBarContainer, setNavBarContainer] = useState('Navbar-container backdrop')
    const [routeSelected, setRouteSelected] = useState(urlPath)

    //Route Selection State
    const [homepage, setHomepage] = useState()
    const [contact, setContact] = useState()
    const [music, setMusic] = useState()
    const [shows, setShows] = useState()
    const [videos, setVideos] = useState()
    const [remoteRecording, setRemoteRecording] = useState()
    useEffect(()=>{
        function highlightSelection(pageSelected){
            pageSelected==='homepage'? setHomepage('selected') : setHomepage('')
            pageSelected==='contact'? setContact('selected') : setContact('')
            pageSelected==='music2'? setMusic('selected') : setMusic('')
            pageSelected==='shows'? setShows('selected') : setShows('')
            pageSelected==='videos'? setVideos('selected') : setVideos('')
            pageSelected==='remoteRecording'? setRemoteRecording('selected') : setRemoteRecording('')
        }

        switch (routeSelected){
            case 'homepage':
                highlightSelection(routeSelected)
                break;
            case 'contact':
                highlightSelection(routeSelected)
                break;
            case 'music2':
                highlightSelection(routeSelected)
                break;
            case 'shows':
                highlightSelection(routeSelected)
                break;
            case 'videos':
                highlightSelection(routeSelected)
                break;
            case 'remoteRecording':
                highlightSelection(routeSelected)
                break;
            default:
                setHomepage('selected')
                
        }
    }, [routeSelected])

    

    const openOrCloseMenu = () =>{
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
    const closeMenu = () =>{
        setMobileMenu('mobile-menu-container')
        setMobileIconHamburger('mobile-icon')
        setMobileIconX('mobile-icon hide')
        setNavBarContainer('Navbar-container backdrop')
    }

    

    return (
        <div className='Navbar-main'>
            <div className={navBarContainer}>
                <div className='nav-text'>
                    <div className="topbarScroll" onClick={()=>{
                        document.getElementById('Music-main').scrollTo({top: 0, left: 0, behavior: 'smooth'})
                        //onClick runs first scrollTo command but not the ones below. May need to create state for the current route in order to grab current ElementById
                        // document.getElementById('Videos-main').scrollTo({top: 0, left: 0, behavior: 'smooth'})
                        // document.getElementById('Contact-main').scrollTo({top: 0, left: 0, behavior: 'smooth'})
                        // document.getElementById('Shows-main').scrollTo({top: 0, left: 0, behavior: 'smooth'})
                    }}></div>
                    <Link to="/*" className='jonah-wisneski-title' onClick={()=>{
                            setRouteSelected('homepage')
                            closeMenu()
                            }}>
                        <h1>JONAH <br></br>WISNESKI</h1>
                    </Link>
                </div>
                <div className='mobile-icon-container'>
                    <div className='mobile-icon' onClick={()=>openOrCloseMenu()}>
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
                    <div className={`mobile-menu-item ${homepage}`}>
                        <Link className='mobile-menu-text' to="/homepage" onClick={()=>{
                            setRouteSelected('homepage')
                            openOrCloseMenu()
                            }}><h2>HOMEPAGE</h2></Link>
                    </div>
                    <div className={`mobile-menu-item ${music}`}>
                        <Link className='mobile-menu-text'to="/music2" onClick={()=>{
                            setRouteSelected('music2')
                            openOrCloseMenu()
                            }}><h2>MUSIC</h2></Link>
                    </div>
                    <div className={`mobile-menu-item ${shows}`}>
                        <Link className='mobile-menu-text' to="/shows" onClick={()=>{
                            setRouteSelected('shows')
                            openOrCloseMenu()
                            }}><h2>LIVE</h2></Link>
                    </div>
                    <div className={`mobile-menu-item ${videos}`}>
                        <Link className='mobile-menu-text' to="/videos" onClick={()=>{
                            setRouteSelected('videos')
                            openOrCloseMenu()
                            }}><h2>VIDEOS</h2></Link>
                    </div>
                    {/* <div className={`mobile-menu-item ${remoteRecording}`}>
                        <Link className='mobile-menu-text' to="/videos" onClick={()=>{
                            setRouteSelected('remoteRecording')
                            openOrCloseMenu()
                        }}><h2>REMOTE <br></br>RECORDING</h2></Link>
                    </div> */}
                    <div className={`mobile-menu-item ${contact}`}>
                        <Link className='mobile-menu-text' to="/contact" onClick={()=>{
                            setRouteSelected('contact')
                            openOrCloseMenu()
                            }}><h2>CONTACT</h2></Link>
                    </div>
                </ul>
                <div className='whitespace'></div>
                
            </div>
        </div>
    );
};

export default Navbar;