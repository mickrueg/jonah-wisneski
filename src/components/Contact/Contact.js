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
                    <h2>ABOUT</h2>
                    <div className='Music-intro-text'>
                        <h5><b>Seeking sessions/tours, lessons and open to other inquiries. </b>Performing and recording as a soloist and with King Cardinal, Other Worlds, Brianna Straut, Hunter Stone, and others. Please email or send direct message via socials.

                        </h5>
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