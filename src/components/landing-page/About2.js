import "./About2.css";
import { Row, Col } from "react-bootstrap";
import { Button } from 'react-bootstrap';

function About2() {

  return (
    <>
    <div  className='about-slide1'>
      <Row className='gx-0'>
        <Col xs={12} md={6}>
          <div className='about-slide-image-section'>
            <img src = '/assets/images/about-op2-1.jpg' alt="About 1" id="about-page-image-1"/>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className='about-slide-text-section'>
            <p>
              <div className="about-slide-heading-section-op2">
                <span>Our Story</span>
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
              <br></br><br></br><br></br>
              <Button variant="primary" id='about-learn-more-button' href='/about'>
                Learn More
              </Button>{' '}
            </p>
          </div>
        </Col>
      </Row>
      <Row className='gx-0'>
        <Col xs={12} md={6}>
          <div className='about-slide-text-section'>
            <p>
              <div className="about-slide-heading-section-op2">
                <span>Exclusive</span>
              </div>
              Our client base incorporates architects, interior designers,
              students of design, architecture and more. We cater to anybody
              with an eye for design and beauty, our customizable range of
              products being a testament to that.
              <br></br><br></br>
              They say luxury is in freedom and we provide our clients the
              freedom to pick the right design for their homes and
              architecture.
              <br></br><br></br><br></br>
              <Button variant="primary" id='about-learn-more-button' href='/products'>
                Learn More
              </Button>{' '}
            </p>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className='about-slide-image-section'>
            <img src= '/assets/images/about-op2-2.jpg' alt="About 2" id="about-page-image-1"/>
          </div>
        </Col>
      </Row>
      <Row className='gx-0'>
        <Col xs={12} md={6}>
          <div className='about-slide-image-section'>
            <img src= '/assets/images/about-op2-3.jpg' alt="About 3" id="about-page-image-1"/>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className='about-slide-text-section'>
            <p>
              <div className="about-slide-heading-section-op2">
                <span>Diverse</span>
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
              <br></br><br></br><br></br>
              <Button variant="primary" id='about-learn-more-button' href='/products'>
                Learn More
              </Button>{' '}
            </p>
          </div>
        </Col>
      </Row>
    </div>
    </>
  );
}

export default About2;
