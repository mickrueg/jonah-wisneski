import axios from 'axios';
import React from 'react';
import SpotifyAxios from './Spotify'
import './Music.css';

// To refresh music data from Spotify, do the following
// 1) Go to https://developer.spotify.com/console/get-playlist/?playlist_id=24qeMQk4FpwEqxzMY8PEhy&market=&fields=&additional_types=
// 2) Click "Get Token" > "Request Token" > and login
// 3) Double check Playlist ID is correct (you can get this by finding link in Spotify)
// 4) Set market to "US"
// 5) Click "Try It" to display results to copy/paste into Spotify.json
import spotifyPlaylist from './Spotify.json'
// SpotifyAxios();

const allSongs = spotifyPlaylist.tracks.items;
const songList = allSongs.map((item, index)=>{
    return (
        <div className='song-container' key={index}>
            <img className="song-cover" src={item.track.album.images[1].url} alt="Album cover"/>
            <div className='song-text'>
                <span className='song-artst'>{item.track.artists[0].name}</span><br></br>
                <span className='song-track-name'>{item.track.name}</span>
            </div>
            <div className='logo-links'>
                <a href={item.track.external_urls.spotify}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="spotify-logo" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"/>
                    </svg>
                </a>
            </div>
        </div>
        )
})



const Music = () => {
    return (
        <div className='Music-main'>
            <div className='Music-container'>
                <div className='whitespace'></div>
                <div className='Music-intro-text'>
                    <h5>Denver-based guitarist, singer/songwriter, <br></br>
                        producer, musical director, and teacher.<br></br>
                        Performing and recording under my own<br></br>
                        name/group; and with <b>King Cardinal, <br></br>
                        Other Worlds, Brianna Straut, <br></br>
                        Hunter Stone, </b>and others.</h5>
                </div>
                <div className='Music-image-container'>
                    <div className='Music-image-text'><h6>Bluebird Theater, Denver, Colorado</h6></div>
                </div>
                <div className='Music-section'>
                    <h2>MUSIC</h2>
                    <h4>WRITTEN &nbsp;|&nbsp; PERFORMED &nbsp;|&nbsp; OR &nbsp;PRODUCED</h4>
                    {songList}
                    <div className='whitespace'></div>
                </div>
                
            </div>
        </div>
    );
};

export default Music;