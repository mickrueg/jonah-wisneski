import React from 'react';
import "./Contact.css";
import BuiltBy from '../BuiltBy/BuiltBy';

const logoSize = 50;

const Contact = () => {
    return (
        <div className='Contact-main' id='Contact-main'>
            <div className='Contact-container'>
                <div className='whitespace one'></div>
                <div className='left-side'>
                    {/* <div className='Contact-intro-text'>
                        <h5>Intro Text Here</h5>
                    </div> */}
                    <div className='Contact-image-container'><h6>Cervantes Masterpiece Ballroom</h6></div>
                </div>
                <div className='Contact-text'>
                    <h2>CONTACT</h2>
                    <div className='Music-intro-text'>
                        <h5>Seeking sessions/tours, lessons and open to other inquiries. Please email or send direct message via socials below.</h5>
                    </div>
                        <div className='Contact-links'>
                            <h4>DIRECT</h4>
                            <a href="mailto:bandofrandoms@gmail.com">
                                <svg xmlns="http://www.w3.org/2000/svg" width={logoSize} height={logoSize} fill="currentColor" className="social-link-logo" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                </svg>
                                <h5>bandofrandoms@gmail.com</h5>
                            </a>
                        </div>
                </div>
                        <div className='whitespace'></div>
                        <div className='smallspace'></div>
            </div>
            <BuiltBy />
        </div>
    );
};

export default Contact;