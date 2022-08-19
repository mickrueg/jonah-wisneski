import React from 'react';
import "./Shows.css";
import BuiltBy from '../BuiltBy/BuiltBy';

const Shows = () => {
    return (
        <div className='Shows-main' id='Shows-main'>
            <div className='Shows-container'>
                <div className='whitespace'></div>
                <div className='left-side'>
                    <div className='Shows-image-container'><h6>Cervantes Masterpiece Ballroom</h6></div>
                </div>
                <div className='right-side'>
                    <div className='Shows-text'>
                        <h2>LIVE</h2>
                    </div>
                    <iframe 
                    className='google-calendar'
                    title="Google Calendar" 
                    src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FDenver&mode=AGENDA&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=1&src=b2VtaGduMWl0MmVjY2J0MGIzb3RqNnZwODBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23000000" frameBorder="0" scrolling="no">
                    </iframe>
                    <div className='whitespace'></div>
                </div>
            </div>
            <BuiltBy />
        </div>
    );
};

export default Shows;