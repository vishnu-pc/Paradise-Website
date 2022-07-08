import "./Dev-team-v3.css";
import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Container, Row, Col } from "react-bootstrap";

function DevTeamV3() {
  
    const particlesInit = async (main) => {
      console.log(main);

      // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(main);
    };

    const particlesLoaded = (container) => {
      console.log(container);
    };

    return (
      <div className="developers-page-block">
        {/* <div className="developers-our-team-heading">Meet our Team</div> */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#350489",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                // onClick: {
                //   enable: true,
                //   mode: "push",
                // },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 1000,
                },
                value: 150,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 2 },
              },
            },
            // detectRetina: true,
          }}
        />
        <div className="developers-grid">
          <Container fluid className="gx-0">
              <Row>
                  <Col xs={12} md={4}>
                    <div className="developers-grid-node">
                      <Row><img src = '/assets/images/developers/vishnu.jpeg' alt=""/></Row>
                      <div className="developer-text-section">
                        <Row><div className="developer-name">Vishnu PC</div></Row>
                        <Row><div className="developer-text">Lead Software Developer</div></Row>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className="developers-grid-node">
                      <Row><img src = '/assets/images/developers/sidharth.png' alt=""/></Row>
                      <div className="developer-text-section">
                        <Row><div className="developer-name">Sidharth Narasimhan</div></Row>
                        <Row><div className="developer-text">Solutions Architect</div></Row>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className="developers-grid-node">
                      <Row><img src = '/assets/images/developers/rishabh1.png' alt=""/></Row>
                      <div className="developer-text-section">
                        <Row><div className="developer-name">Rishabh Sunil</div></Row>
                        <Row><div className="developer-text">Growth Strategist</div></Row>
                      </div>
                    </div>
                  </Col>
              </Row>
              <Row>
              <Col xs={12} md={4}>
                    <div className="developers-grid-node">
                      <Row><img src = '/assets/images/developers/hemant.jpg' alt=""/></Row>
                      <div className="developer-text-section">
                        <Row><div className="developer-name">Hemant Kumar</div></Row>
                        <Row><div className="developer-text">AR/VR Designer</div></Row>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className="developers-grid-node">
                      <Row><img src = '/assets/images/developers/nishanth.jpg' alt=""/></Row>
                      <div className="developer-text-section">
                        <Row><div className="developer-name">Nishanth S</div></Row>
                        <Row><div className="developer-text">Content Manager</div></Row>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className="developers-grid-node">
                      <Row><img src = '/assets/images/developers/devashish.jpg' alt=""/></Row>
                      <div className="developer-text-section">
                        <Row><div className="developer-name">Devashish Boralkar</div></Row>
                        <Row><div className="developer-text">Graphic Designer</div></Row>
                      </div>
                    </div>
                  </Col>
              </Row>
              <Row>
                <Col xs={0} md={2}></Col>
                <Col xs={12} md={4}>
                    <div className="developers-grid-node">
                      <Row><img src = '/assets/images/developers/Jai.jpg' alt=""/></Row>
                      <div className="developer-text-section">
                        <Row><div className="developer-name">Jai Vardhan</div></Row>
                        <Row><div className="developer-text">SEO & Marketing Head</div></Row>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className="developers-grid-node">
                      <Row><img src = '/assets/images/developers/dev-avitar.png' alt=""/></Row>
                      <div className="developer-text-section">
                        <Row><div className="developer-name">Claryse Michelle</div></Row>
                        <Row><div className="developer-text">Branding Consultant</div></Row>
                      </div>
                    </div>
                  </Col>
                  <Col xs={0} md={2}></Col>
              </Row>
          </Container>
        </div>
      </div>
    );
}

export default DevTeamV3;