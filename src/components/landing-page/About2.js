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
            <img src = '/assets/images/about-op2-1-1.jpg' alt="Our Story" id="about-page-image-1"/>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className='about-slide-text-section'>
            <p>
              <div className="about-slide-heading-section-op2">
                <span>About Us</span>
              </div>
              <br></br><br></br><br></br>
              Paradise Stile studio is one of the main voices in the floor
              and wall tiles industry. Situated in Indiranagar,
              Bangalore, we are a sanctuary for designer tiles and bring a
              new and more nuanced voice to the sector. 
              <br></br><br></br>
              Creatively driven, we believe in the power of creativity and are passionate about what we do.
              We are an all inclusive hub for aesthetic
              building materials, providing lavish items that are customized
              to the aesthetic of your architectural wonder. Our mission is
              to be the go-to brand when one considers luxurious interiors
              and exteriors. 
              {/* <br></br><br></br>
              Our client base incorporates architects, interior designers,
              students of design and more. We cater to anybody
              with an eye for design and beauty, our customizable range of
              products being a testament to that. */}
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
                <span>Exclusive Living</span>
              </div>
              <br></br><br></br><br></br>
              {/* They say luxury is in freedom and we provide our clients the
              freedom to pick the right design for their homes and
              architecture from our exceedingly wide range of products. Our collection is rich in intrinsic beauty and dimensional depth of glazes.
              <br></br><br></br> */}
              There's a reason tile and stone are the go-to materials for designers and architects determined to tell a memorable story. The lasting impact, the undeniable material integrity, the connection with the natural world — tile and stone deliver an experience that other materials just can’t.
              We curate our collections carefully, to make your life beautifully simple. The only question is, which one will you dive into first?
              <br></br><br></br>
              We are committed to giving you the best experience possible. Whether you're shopping from home or visiting one of our stores, we remain at your disposal and offer a range of products.
              <br></br><br></br><br></br>
              <Button variant="primary" id='about-learn-more-button' href='/products'>
                Learn More
              </Button>{' '}
            </p>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className='about-slide-image-section'>
            <img src= '/assets/images/about-op2-2-1.jpg' alt="Exclusive Living" id="about-page-image-1"/>
          </div>
        </Col>
      </Row>
      <Row className='gx-0'>
        <Col xs={12} md={6}>
          <div className='about-slide-image-section'>
            <img src= '/assets/images/about-op2-3-1.jpg' alt="Diverse Selection" id="about-page-image-1"/>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className='about-slide-text-section'>
            <p>
              <div className="about-slide-heading-section-op2">
                <span>Diverse Selection</span>
              </div>
              <br></br><br></br><br></br>
              {/* Whether you are building your dream kitchen, renovating an older space, or planning the addition of an outdoor living area, we have a wide range of materials to suit your specific design plans. 
              <br></br><br></br> */}
              Offering a stunning array of styles and patterns to bring a newfound sense of character to any space, our inventory boasts of a variety of designer tiles that are ideal for opulent living. They contain tiles of incalculable designs to compliment them, our items have universal allure as well as durability. 
              <br></br><br></br>
              Could find your ideal fit for your project within out wide range of selection? no problem, we can have your design custom printed according to your specifications.
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
