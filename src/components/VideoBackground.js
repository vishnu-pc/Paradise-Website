import React from 'react'
import './VideoBackground.css'
import sample from '../assets/videos/Sample-Background-Video.mp4';

function Video() {
    return (
        <div class="video-container">
            <video className='background-video' autoPlay loop muted>
                <source src={sample} type='video/mp4' />
            </video>
            <div class="overlay-text">
                <h1>Paradise</h1>
                <p>Style Studio</p>
            </div>
        </div>
    );
}

export default Video;
