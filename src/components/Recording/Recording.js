import React from 'react';
import './Recording.css';

const Recording = () => {
    return (
        <div className='Recording-main'>
            <div className='Recording-container'>
                <div className='whitespace'></div>
                <div className='whitespace-desktop'></div>
                <h2>RECORDING</h2>
                <h5>Need for guitars for a track or interested in a producer for an upcoming recording project? I can help! My professional home studio is equipped for remote and in-person tracking, with plenty of tonal/gear options to cater towards whatever sounds you're looking for. Feel free to reach out with any inquiries. See recording equipment below.</h5>
                <br></br>
                <h3>INTERFACE</h3>
                <h5 className='gear-list'>Universal Audio Apollo x8 (ProTools)</h5>
                <br></br>
                <h3>MICROPHONES</h3>
                <h5 className='gear-list'>Pearlman TM-1 Large Diaphragm Tube Condenser <br></br>
                Shure SM7a <br></br>
                Cascade Fathead Ribbon<br></br>
                Shure SM57</h5>
                <br></br>
                <h3>GUITARS</h3>
                <h5  className='gear-list'>Fender USA 65 RI Jazzmaster<br></br>
                Gibson ES333 (335)<br></br>
                Martin D28<br></br>
                Mcinturff Taurus Standard<br></br>
                Fender Stratocaster<br></br>
                Esteve Nylon String Guitar</h5>
                <br></br>
                <h3>AMPS</h3>
                <h5  className='gear-list'>2001 Vox AC30 TBX w/ Alnico Blue Speakers<br></br>
                1973 Fender Deluxe Reverb<br></br>
                1974 Fender Princeton Reverb<br></br>
                1980 Fender Vibro Champ </h5>
                <br></br>
                <h5><i><b>Various plug-ins, effects, and pedals</b></i></h5>
                <div className='whitespace'></div>
            </div>
        </div>
    );
};

export default Recording;