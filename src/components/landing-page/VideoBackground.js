import React from "react";
import "./VideoBackground.css";
import sample from "../../assets/videos/Sample-Background-Video.mp4";
import { Button } from 'react-bootstrap';

function Video() {
  return (
    <div class="background-video">
      <video autoPlay loop muted>
        <source src={sample} type='video/mp4' />
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
