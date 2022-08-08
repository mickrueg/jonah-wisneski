import React, { useEffect, useState } from 'react';
import BuiltBy from '../BuiltBy/BuiltBy';
import './Music2.css';
import SpotifyAlbums from './SpotifyAlbums.json'


const Music2 = () => {

    const [spotifyID, setSpotifyID] = useState(SpotifyAlbums[0].id)


    const albumCollection = SpotifyAlbums.map((item, index)=>{
        let smallAlbumImageClassName;
        let soundPlayingIcon;
        if(item.id === spotifyID){
            smallAlbumImageClassName = 'small-album-image selected'
            soundPlayingIcon = (
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="sound-playing-icon" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5zm-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5zm12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5z"/>
                </svg>
            )
        } else{
            smallAlbumImageClassName = 'small-album-image'
        }

        return (
            <div className='small-album-container' 
                key={index}
                onClick={()=>{
                    setSpotifyID(item.id)
                    document.getElementById('Music-main').scrollTo({top: 0, left: 0, behavior: 'smooth'})
                }}>
                <img 
                    src={item.images[1].url} 
                    alt={`${item.name} album cover`} 
                    className={smallAlbumImageClassName}></img>
                {soundPlayingIcon}
            </div>
        )
    })

    return (
        <div className='Music-main' id='Music-main'>
            <div className='Music-container'>
                <div className='whitespace'></div>
                <div className='music-left-side'>
                    <div className='Music-image-container'>
                        <iframe title="Visuals" className='Spotify-plugin' src={`https://open.spotify.com/embed/album/${spotifyID}?utm_source=generator`} width="100%" height="100%" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    </div>
                </div>
                <div className='Music-section'>
                    <div className='whitespaceDesktop'></div>
                    <h2>MUSIC</h2>
                    <h4>WRITTEN &nbsp;|&nbsp; PERFORMED &nbsp;|&nbsp; OR &nbsp;PRODUCED</h4>
                    <hr></hr>
                    <div className='album-collection-container'>
                        {albumCollection}
                    </div>
                    <div className='whitespace'></div>
                    <div className='whitespace'></div>
                    <div className='whitespace'></div>
                    <div className='whitespaceDesktop'></div>
                </div>
            </div>
            <BuiltBy />
        </div>
    );
};

export default Music2;