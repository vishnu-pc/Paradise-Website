// import React, { FC, useEffect, useRef, useState } from "react";
import "./About.css";
// import About1 from "../../assets/images/About1.jpeg";
import { Row, Col } from "react-bootstrap";
// import { render } from "@testing-library/react";
import sample from "../../assets/images/jd.jpg";
// import sample2 from "../assets/images/rolex.jpg";

function About() {
  const containerRef = useRef(null);
  const handleKeyDown = (event) => {
    console.log((event.pageY - 940) * 0.00125);
    let x = (event.pageY - 940) * 0.00125;
    setvisible(x);
    if (x < 1) {
      setsize(x * 100);
    }
  };
  const callbackFunction = (entries) => {
    const [entry] = entries;
    const text = entry.target;

    if (entry.isIntersecting) {
      text.classList.add("about-title-transition");
      return;
    }
    //text.classList.remove("about-text-transition");
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };
  useEffect(() => {
    let scrolldiv = document.getElementById("onscroll");

    scrolldiv.addEventListener("wheel", handleKeyDown);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);
  const [size, setsize] = useState(0);
  const [h1color, seth1color] = useState("white");

  const [visible, setvisible] = useState(0);
  return (
    <div className="about-background">
      <Row
        style={{
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
      >
        <Col span={12} style={{ height: "auto" }}>
          <div style={{ color: "white", padding: "50px 100px 50px 150px" }}>
            <div>
              <div style={{ paddingBottom: "250px", paddingTop: "50px" }}>
                <h1 className="about-title" id="onscroll">
                  Who we are
                </h1>

                <p>
                  Paradise Stile studio is one of the main voices in the floor
                  and wall tiles distribution market. Situated in Indiranagar,
                  Bangalore, we are a sanctuary for designer tiles and bring a
                  new and more nuanced voice to the sector.
                </p>
                <p>
                  Our vision is to be an all inclusive hub for aesthetic
                  building materials, providing lavish items that are customized
                  to the aesthetic of your architectural wonder. Our mission is
                  to be the go-to brand when one considers luxurious interiors
                  and exteriors.
                </p>
              </div>
            </div>
          </div>
          {/* <h1 ref={containerRef} className="about-text ">
            About Us
          </h1> */}

          {/* {
            <div
              style={{
                position: "sticky",
                top: "20%",
                opacity: visible,
              }}
              height="600"
              width="600"
              autoPlay
              loop
              muted
            >
              {<img width={size + "%"} src={sample} atype="video/mp4" />}
            </div>
          } */}
        </Col>
        <Col style={{ height: "auto" }} span={12}>
          <img src={sample} alt="jd" />
        </Col>
      </Row>
      <Row
        className="parallaxBackground"
        style={{
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
      >
        <Col span={12} style={{ height: "auto" }}></Col>
        <Col style={{ height: "auto" }} span={12}>
          <div
            style={{
              color: "black",
              margin: "50px 200px 50px 200px",
              padding: "50px 50px 50px 50px",
              background: "white",
              borderRadius: "30px",
            }}
          >
            <div>
              <div style={{ paddingBottom: "50px" }}>
                <h1 className="about-title">Who we work with</h1>
                <br />
                <br />

                <p>
                  Our client base incorporates architects, interior designers,
                  students of design, architecture and more. We cater to anybody
                  with an eye for design and beauty, our customizable range of
                  products being a testament to that.
                </p>
                <p>
                  They say luxury is in freedom and we provide our clients the
                  freedom to pick the right design for their homes and
                  architecture.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row
        style={{
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
      >
        <Col span={12} style={{ height: "auto" }}>
          <div style={{ color: "white", padding: "50px 100px 50px 150px" }}>
            <div>
              <div style={{ paddingBottom: "250px", paddingTop: "50px" }}>
                <h1 className="about-title">Who we are</h1>

                <p>
                  Paradise Stile studio is one of the main voices in the floor
                  and wall tiles distribution market. Situated in Indiranagar,
                  Bangalore, we are a sanctuary for designer tiles and bring a
                  new and more nuanced voice to the sector.
                </p>
                <p>
                  Our vision is to be an all inclusive hub for aesthetic
                  building materials, providing lavish items that are customized
                  to the aesthetic of your architectural wonder. Our mission is
                  to be the go-to brand when one considers luxurious interiors
                  and exteriors.
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col style={{ height: "auto", paddingTop: "50px" }} span={12}>
          <img src={sample} alt="jd" />
        </Col>
      </Row>
    </div>
  );
}

export default About;
