import React from "react";
import "./VideoBackground.css";
import sample from "../assets/videos/Sample-Background-Video.mp4";

function Video() {
  return (
    <div class="background-video">
      {/* <video autoPlay loop muted>
                <source src={sample} type='video/mp4' />
            </video> */}
      <div class="text-in-video">
        <h1>Paradise</h1>
        <p>Style studio</p>
      </div>
    </div>
  );
}

export default Video;
