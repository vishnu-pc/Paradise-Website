import React from "react";
import "./About2.css";
import { Row, Col } from "react-bootstrap";
import about1 from "../assets/images/about1.png";
import about2 from "../assets/images/about2.png";
import about3 from "../assets/images/about3.png";

function About2() {
  return (
    <>
    <div  className='about-slide1'>
      <Row>
        <Col xs={12} md={7}>
          <div className='about-slide-image-section'>
            <img src={about1} alt="About image 1" id="about-page-image-1"/>
          </div>
        </Col>
        <Col xs={12} md={5}>
          <div className='about-slide-text-section'>
            <p>
              <div className="about-slide-heading-section">
                Our Story
              </div>
              Paradise Stile studio is one of the main voices in the floor
              and wall tiles distribution market. Situated in Indiranagar,
              Bangalore, we are a sanctuary for designer tiles and bring a
              new and more nuanced voice to the sector.
              <br></br><br></br>
              Our vision is to be an all inclusive hub for aesthetic
              building materials, providing lavish items that are customized
              to the aesthetic of your architectural wonder. Our mission is
              to be the go-to brand when one considers luxurious interiors
              and exteriors.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={5}>
          <div className='about-slide-text-section'>
            <p>
              <div className="about-slide-heading-section">
                Exclusive Selection
              </div>
              Our client base incorporates architects, interior designers,
              students of design, architecture and more. We cater to anybody
              with an eye for design and beauty, our customizable range of
              products being a testament to that.
              <br></br><br></br>
              They say luxury is in freedom and we provide our clients the
              freedom to pick the right design for their homes and
              architecture.
            </p>
          </div>
        </Col>
        <Col xs={12} md={7}>
          <div className='about-slide-image-section'>
            <img src={about2} alt="About image 2" id="about-page-image-1"/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={7}>
          <div className='about-slide-image-section'>
            <img src={about3} alt="About image 3" id="about-page-image-1"/>
          </div>
        </Col>
        <Col xs={12} md={5}>
          <div className='about-slide-text-section'>
            <p>
              <div className="about-slide-heading-section">
                Diverse Range
              </div>
              Paradise Stile studio is one of the main voices in the floor
              and wall tiles distribution market. Situated in Indiranagar,
              Bangalore, we are a sanctuary for designer tiles and bring a
              new and more nuanced voice to the sector.
              <br></br><br></br>
              Our vision is to be an all inclusive hub for aesthetic
              building materials, providing lavish items that are customized
              to the aesthetic of your architectural wonder. Our mission is
              to be the go-to brand when one considers luxurious interiors
              and exteriors.
            </p>
          </div>
        </Col>
      </Row>
    </div>
    </>
  );
}

export default About2;
