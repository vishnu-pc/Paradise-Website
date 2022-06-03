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
            <img src= '/assets/images/px-about-op2-2-1.webp' alt="Exclusive Living" id="about-page-image-1"/>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className='about-slide-text-section'>
            <p>
              <div className="about-slide-heading-section-op2">
                <span>Exclusively Opulent Living</span>
              </div>
              <br></br><br></br><br></br>
              <strong>Tile and stone</strong> are not just trends anymore, they are classics. 
              Their universal allure, undeniable material integrity, durability, 
              and their connection with the natural world — no wonder tile and stones 
              are the go-to for architects and designers.
              <br></br><br></br>
              Luxury is in freedom and we provide our clients the freedom to 
              pick the right design for their homes and architecture. Paradise offers 
              a <strong>diverse range</strong> of visually appealing materials that complement its vision.
              <br></br><br></br>
              We curate our collections carefully, 
              to make your life beautifully simple.
              <br></br><br></br><br></br>
              <Button variant="primary" id='about-learn-more-button' href='/products'>
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
                <span>Redesign Your Vision</span>
              </div>
              <br></br><br></br><br></br>
              We do not direct what beauty is, it is entirely subjective. With our incalculable 
              designs and range of tiles, you are sure to find the right one. 
              <br></br><br></br>
              For the ones who require a personal touch, we offer <strong>custom products</strong>.
              We are committed to giving you the best experience possible. 
              Whether you are shopping from home or visiting one of our stores, we remain at 
              your disposal and offer a range of products.
              <br></br><br></br><br></br>
              <Button variant="primary" id='about-learn-more-button' href='/products'>
                Learn More
              </Button>{' '}
            </p>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className='about-slide-image-section'>
            <img src= '/assets/images/px-about-op2-3-1.webp' alt="Diverse Selection" id="about-page-image-1"/>
          </div>
        </Col>
      </Row>
      <Row className='gx-0'>
        <Col xs={12} md={6}>
          <div className='about-slide-image-section'>
            <img src = '/assets/images/px-img25.webp' alt="Our Story" id="about-page-image-1"/>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className='about-slide-text-section'>
            <p>
              <div className="about-slide-heading-section-op2">
                <span>About us</span>
              </div>
              <br></br><br></br><br></br>
              <strong>Paradise Stile studio</strong> is one of the main voices in the floor and wall tiles industry. 
              Situated in <strong>Indiranagar</strong>, Bangalore, we are a sanctuary for designer tiles and bring 
              a more focused vision to the sector.
              <br></br><br></br>
              We specialize exclusively in tiles. Our collection of tiles is vast and diverse 
              enough to be a perfect addition to any style of architecture.  
              <br></br><br></br>
              Our vision is constant growth. We aim to diversify our range, even more, 
              being ready for the architectural wonders of tomorrow. 
              We hope to provide more exclusive design solutions to our clients and help 
              transform their abodes. Our mission is to be the go-to brand when one thinks
              of <strong>luxurious interiors</strong> and exteriors.
              <br></br><br></br><br></br>
              <Button variant="primary" id='about-learn-more-button' href='/about'>
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
