import React, { useState, useEffect, useRef } from "react";
import { Carousel, Button, Row, Col, Form } from "react-bootstrap";
import "./ContactUs.css";
import contactForm from "../assets/flintstones-images/ContactForm.png";

function ContactUs() {
  return (
    <div class="contact-us-body">
      <div
        style={{
          position: "absolute",
          height: "50%",
          width: "100%",

          top: "25%",
        }}
      >
        <iframe
          style={{
            border: "0",
            filter: "invert(100%)",
            opacity: "70%",
            backgroundAttachment: "fixed",
          }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.0061843994171!2d77.63793903098518!3d12.970268849505086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17bb7227497f%3A0x3084b4633af4fa97!2sFlintstones!5e0!3m2!1sen!2sin!4v1650678432883!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          width="100%"
          height="100%"
          frameborder="10"
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
      <Row style={{ height: "100vh" }}>
        <Col style={{ width: "50%" }}>
          <h1 id="scrolldiv" class="center-text-contact-us">
            Contact Us
          </h1>
        </Col>
        <Col style={{ width: "30%" }}>
          <div class="contact-card">
            {/* {" "}
            <img
              alt=""
              src={contactForm}
              style={{ transform: "scale(2)" }}
              className="d-inline-block align-top"
              width="50%"
            /> */}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ContactUs;
