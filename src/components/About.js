import React from 'react'
import './About.css'
import About1 from '../assets/images/About1.jpeg';

function About() {
    return (
        <div class="about-image">
            <img src={About1} />
            {/* <img src={About1} class="about-img2" />
            <img src={About1} class="about-img3" /> */}
            <div class="text-block">
                <h1>This is the about us section</h1>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
            </div>
        </div>

    );
}

export default About