import React, { useState, useEffect, useRef } from "react";
import { Carousel, Button, Row, Col } from "react-bootstrap";
import "./Testimonial.css";
import test1 from "../assets/flintstones-images/Testimonial2.jpg";

function Testimonial() {
  return (
    <div class="testimonial-body">
      <h1 class="center-text-testimonial">Testimonials</h1>
      <div>
        <Carousel controls={true} indicators={false} slide={true}>
          <Carousel.Item interval={1500}>
            <div class="testimonial-body">
              <Row style={{ height: "100vh" }}>
                <Col style={{ width: "50%" }}>
                  <p id="scrolldiv" class="center-text-para-testimonial">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                </Col>
                <Col style={{ width: "50%", position: "relative" }}>
                  <img
                    src={test1}
                    width="80%"
                    style={{
                      top: "50%",
                      left: "50%",
                      position: "absolute",
                      transform: "translate(-50%,-50%)",
                    }}
                  />
                </Col>
              </Row>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <div class="testimonial-body">
              <Row style={{ height: "100vh" }}>
                <Col style={{ width: "50%" }}>
                  <p id="scrolldiv" class="center-text-para-testimonial">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </Col>
                <Col style={{ width: "50%", position: "relative" }}>
                  <img
                    src={test1}
                    width="80%"
                    style={{
                      top: "50%",
                      left: "50%",
                      position: "absolute",
                      transform: "translate(-50%,-50%)",
                    }}
                  />
                </Col>
              </Row>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <div class="testimonial-body">
              <Row style={{ height: "100vh" }}>
                <Col style={{ width: "50%" }}>
                  <p id="scrolldiv" class="center-text-para-testimonial">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                    Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section
                    1.10.32.
                  </p>
                </Col>
                <Col style={{ width: "50%", position: "relative" }}>
                  <img
                    src={test1}
                    width="80%"
                    style={{
                      top: "50%",
                      left: "50%",
                      position: "absolute",
                      transform: "translate(-50%,-50%)",
                    }}
                  />
                </Col>
              </Row>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonial;
