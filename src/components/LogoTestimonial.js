import React from "react";
import "./LogoTestimonials.css";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import about1 from "../assets/images/twitter.jpeg";
import about2 from "../assets/images/Cisco-logo.jpeg";
import about3 from "../assets/images/Facebook.png";
import about4 from "../assets/images/GOOGLE.png";
import about5 from "../assets/images/Swiggy-Emblem.png";
import Header from "./Header";
import Header2 from "./Header2";

function Logo() {
  return (
    <>
      <div className="logo-testimonial">
        <h1 style={{ fontSize: "20px", padding: "20px", textAlign: "center" }}>
          Companies we've worked with
        </h1>
        <Row>
          <Col>
            <img id="image" src={about1} width="300px" height="250px" />
          </Col>
          <Col>
            <img id="image" src={about2} width="400px" height="250px" />
          </Col>
          <Col>
            <img id="image" src={about3} width="300px" height="250px" />
          </Col>
          <Col>
            <img id="image" src={about4} width="250px" height="250px" />
          </Col>
          <Col>
            {" "}
            <img id="image" src={about5} width="400px" height="250px" />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Logo;
