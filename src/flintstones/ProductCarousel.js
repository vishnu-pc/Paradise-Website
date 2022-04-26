import { React, useState, useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";
import "./ProductCarousel.css";

function ProductCarousel() {
  return (
    <div class="body-section3">
      {/* <video autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video> */}
      <div>
        <Row style={{ height: "70vh", overflow: "hidden", cursor: "grab" }}>
          <Col style={{ alignItems: "center" }}>
            <div className="first-card " id="concrete">
              <div className="center-text-card">Stamped Concrete</div>
            </div>
          </Col>
          <Col>
            <Row style={{ height: "50%" }}>
              <div className="first-card" id="basins">
                <div className="center-text-card">Basins</div>
              </div>
            </Row>
            <Row style={{ height: "50%" }}>
              <div className="first-card" id="carpets">
                <div className="center-text-card">Carpets</div>
              </div>
            </Row>
          </Col>
          <Col>
            <div className="first-card" id="luxury">
              <div className="center-text-card">Luxury Stones</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ProductCarousel;
