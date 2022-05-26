import React from "react";
import "./VideoBackground.css";
import { Button } from 'react-bootstrap';

function Video() {
  return (
    <div class="background-video">
      <video autoPlay loop muted playsinline autobuffer preload="auto" poster="/assets/images/landing-loader.png">
        <source src = "/assets/videos/Paradise-Studio-Video-1.mp4" type='video/mp4' />
      </video>
      <div class="text-in-video">
        {/* <h1>Paradise</h1>
        <p>Stile studio</p> */}
        <img
              alt="Paradise Stile Studio"
              src= 'assets/images/paradise-transparent.png'
              width="300"
              height="300"
              // className="d-inline-block align-top"
        /><br></br>
        {/* <a href='/products'><Button variant="primary" id='browse-products-button'>View</Button>{' '}</a> */}
      </div>
    </div>
  );
}

export default Video;
