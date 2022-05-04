import React from "react";
import "./VideoBackground.css";
import { Button } from 'react-bootstrap';

function Video() {
  return (
    <div class="background-video">
      <video autoPlay loop muted>
        <source src = "/assets/videos/Paradise-Studio-Video.mp4" type='video/mp4' />
      </video>
      <div class="text-in-video">
        <h1>Paradise</h1>
        <p>Style studio</p>
        <br></br>
        <a href='/products'><Button variant="primary" id='browse-products-button'>View</Button>{' '}</a>
      </div>
    </div>
  );
}

export default Video;
