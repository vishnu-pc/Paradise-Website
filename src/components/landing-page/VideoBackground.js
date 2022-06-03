import React from "react";
import "./VideoBackground.css";
import { Button } from 'react-bootstrap';

function Video() {
  return (
    <div class="background-video">
      <video autoPlay loop muted playsinline autobuffer preload="auto" poster="/assets/images/landing-loader.webp">
        <source src = "/assets/videos/Paradise-Studio-Video-3.webm" type='video/webm' />
        <source src = "/assets/videos/Paradise-Studio-Video-3.mp4" type='video/mp4' />
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
      <div class="mouse_scroll">
          <div class="mouse">
            <div class="wheel"></div>
          </div>
          <div>
            <span class="m_scroll_arrows unu"></span>
            {/* <span class="m_scroll_arrows doi"></span> */}
            {/* <span class="m_scroll_arrows trei"></span> */}
          </div>
        </div>
    </div>
  );
}

export default Video;
