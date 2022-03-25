import React, { FC, useEffect, useState } from "react";
import "./About.css";
import About1 from "../assets/images/About1.jpeg";
import { Row, Col } from "react-bootstrap";
import { render } from "@testing-library/react";
import sample from "../assets/videos/about-us-video.mov";

function About() {
  const handleKeyDown = (event) => {
    console.log(event);
    setvisible(false);
    // seth1back("goldenrod");
    // seth1color("black");
  };

  useEffect(() => {
    let scrolldiv = document.getElementById("onscroll");
    window.addEventListener("scroll", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleKeyDown);
    };
  }, []);
  const [h1background, seth1back] = useState("black");
  const [h1color, seth1color] = useState("white");

  const [visible, setvisible] = useState(true);
  return (
    <div>
      <Row id="onscroll">
        <Col span={14} style={{ background: "black", height: "auto" }}>
          <h1
            className="about-text"
            style={{
              position: "sticky",
              top: "50%",
              color: h1color,

              padding: "30px",
            }}
          >
            About Us
            {/* { <img src={sample}></img>} */}
          </h1>

          {
            // <video
            //   style={{ position: "sticky", top: "20%" }}
            //   height="600"
            //   width="600"
            //   autoPlay
            //   loop
            //   hidden={visible}
            //   muted
            // >
            //   <source src={sample} type="video/mp4" />
            // </video>
          }
        </Col>
        <Col style={{ background: "black", height: "auto" }} span={14}>
          <div style={{ color: "white", padding: "250px 250px 20px 250px" }}>
            <div>
              <div style={{ paddingBottom: "250px", paddingTop: "200px" }}>
                <h1 className="about-title">Who we are</h1>

                <p>
                  Paradise Stile studio is one of the main voices in the floor
                  and wall tiles distribution market. Situated in Indiranagar,
                  Bangalore, we are a sanctuary for designer tiles and bring a
                  new and more nuanced voice to the sector.
                </p>
              </div>

              <div style={{ paddingBottom: "250px" }}>
                <h1 className="about-title">Our Vision</h1>

                <p>
                  Our vision is to be an all inclusive hub for aesthetic
                  building materials, providing lavish items that are customized
                  to the aesthetic of your architectural wonder. Our mission is
                  to be the go-to brand when one considers luxurious interiors
                  and exteriors.
                </p>
              </div>

              <div style={{ paddingBottom: "250px" }}>
                <h1 className="about-title">Who we work with</h1>

                <p>
                  Our client base incorporates architects, interior designers,
                  students of design, architecture and more. We cater to anybody
                  with an eye for design and beauty, our customizable range of
                  products being a testament to that.
                </p>
              </div>

              <div style={{ paddingBottom: "10px" }}>
                <h1 className="about-title">Core Value</h1>

                <p>
                  They say luxury is in freedom and we provide our clients the
                  freedom to pick the right design for their homes and
                  architecture. Paradise offers clients visually appealing
                  materials that compliment their vision. We don't direct what
                  beauty is, it is entirely subjective. We are and will continue
                  to be a sanctuary for designer and luxurious products.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default About;
