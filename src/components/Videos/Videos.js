import React, { useEffect, useRef, useState } from 'react';
import "./Videos.css";
import youtube from "./youtubeVideos.json"

const Videos = () => {
    
    const [videoIndex, setVideoIndex] = useState(0)
    const [videoSelected, setVideoSelected] = useState(youtube[videoIndex].youtubeEmbed);
    const [videoTitle, setVideoTitle] = useState(youtube[videoIndex].youtubeTitle);
    
    function updateVideoSelection(index){
        setVideoSelected(youtube[index].youtubeEmbed)
        setVideoTitle(youtube[index].youtubeEmbed)
        setVideoIndex(index)
        document.getElementById('Videos-main').scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }

    const youtubeList = youtube.map((video, index)=>{
        let videoClassName;
        let watchingClassName;
        if(index===videoIndex){
            videoClassName = 'youtube-thumbnail selected' 
            watchingClassName = 'watching-text selected';
        } else {
            videoClassName = 'youtube-thumbnail'
            watchingClassName = 'watching-text';
        }
        return(
            <div className='youtube-mini-video' key={index} onClick={()=>updateVideoSelection(index)}>
                <div className={watchingClassName}>WATCHING</div>
                <img className={videoClassName} src={video.youtubeThumbnail} alt={`Video for ${video.youtubeTitle}`} />
            </div>
        )
    })


    return (
        <div className='Videos-main' id="Videos-main">
            <div className='Videos-container'>
                <div className='whitespace'></div>
                <iframe 
                className='youtube-video'
                src={`https://www.youtube.com/embed/${videoSelected}`} 
                title={videoTitle}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                ></iframe>
                <div className='Videos-text'>
                    <h2>VIDEOS</h2>
                </div>
                <div className='Videos-container-selection'>
                    {youtubeList}
                </div>
                <div className='whitespace' ></div>
            </div>
        </div>
    );
};

export default Videos;