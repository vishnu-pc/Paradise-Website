import './Products.css'
import { Container, Row, Col } from "react-bootstrap";
import { Carousel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import project1 from '../../assets/product/images/a1.jpg';
import project2 from '../../assets/product/images/a2.jpg';
import project3 from '../../assets/product/images/a5.jpg';
import sample from "../../assets/videos/Sample-Background-Video.mp4";

function Products() {
  return (
    <div className='products-section'>
      <div className='products-grid-layout'>
        <Container fluid className='gx-0'>
          <Row className='gx-0'>
            <Col xs={12} md={12}>
              <div className='product-grid-element'>
                <div className= 'product-grid-moodboard'>
                  <Carousel controls={false} indicators={false}>
                    <Carousel.Item interval={15000}>
                        <img
                        className="d-block w-100"
                        src= {project1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={15000}>
                        <img
                        className="d-block w-100"
                        src= {project2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={15000}>
                        <img
                        className="d-block w-100"
                        src= {project3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </Col>
          </Row>
          <Row className='gx-0'>
            <Col xs={12} md={8}>
              <div className='product-grid-element'>
                <Carousel controls={false} indicators={false}>
                  <Carousel.Item interval={15000}>
                      <img
                      className="d-block w-100"
                      src= {project1}
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={15000}>
                      <img
                      className="d-block w-100"
                      src= {project2}
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={15000}>
                      <img
                      className="d-block w-100"
                      src= {project3}
                      alt="Third slide"
                      />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <div className='product-text-element'>
                  <p><h1>Mosiac Tiles</h1>New Zealands premium luxury bathroom furniture designed for todays most sophisticated interiors. Explore our world and find the inspiration for the bathroom you have always wanted.<br /><br /><b>Read More</b></p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className='gx-0'>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <div className='product-text-element'>
                  <p><h1>Mosiac Tiles</h1>New Zealands premium luxury bathroom furniture designed for todays most sophisticated interiors. Explore our world and find the inspiration for the bathroom you have always wanted.<br /><br /><b>Read More</b></p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <Carousel controls={false} indicators={false}>
                  <Carousel.Item interval={15000}>
                      <img
                      className="d-block w-100"
                      src= {project1}
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={15000}>
                      <img
                      className="d-block w-100"
                      src= {project2}
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={15000}>
                      <img
                      className="d-block w-100"
                      src= {project3}
                      alt="Third slide"
                      />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <video autoPlay loop muted>
                  <source src={sample} type='video/mp4' />
                </video>
              </div>
            </Col>
          </Row>
          <Row className='gx-0'>
            <Col xs={12} md={6}>
              <div className='product-grid-element'>
                <Carousel controls={false} indicators={false}>
                  <Carousel.Item interval={15000}>
                      <img
                      className="d-block w-100"
                      src= {project1}
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={15000}>
                      <img
                      className="d-block w-100"
                      src= {project2}
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={15000}>
                      <img
                      className="d-block w-100"
                      src= {project3}
                      alt="Third slide"
                      />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className='product-grid-element'>
                <div className='product-text-element'>
                  <p><h1>Mosiac Tiles</h1>New Zealands premium luxury bathroom furniture designed for todays most sophisticated interiors. Explore our world and find the inspiration for the bathroom you have always wanted.<br /><br /><b>Read More</b></p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className='gx-0'>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <div className='product-text-element'>
                  <p><h1>Mosiac Tiles</h1>New Zealands premium luxury bathroom furniture designed for todays most sophisticated interiors. Explore our world and find the inspiration for the bathroom you have always wanted.<br /><br /><b>Read More</b></p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={8}>
              <div className='product-grid-element'>
                <Carousel controls={false} indicators={false}>
                  <Carousel.Item interval={15000}>
                      <img
                      className="d-block w-100"
                      src= {project1}
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={15000}>
                      <img
                      className="d-block w-100"
                      src= {project2}
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={15000}>
                      <img
                      className="d-block w-100"
                      src= {project3}
                      alt="Third slide"
                      />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
          </Row>
          <Row className='gx-0'>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <video autoPlay loop muted>
                  <source src={sample} type='video/mp4' />
                </video>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <div className='product-text-element'>
                  <p><h1>Mosiac Tiles</h1>New Zealands premium luxury bathroom furniture designed for todays most sophisticated interiors. Explore our world and find the inspiration for the bathroom you have always wanted.<br /><br /><b>Read More</b></p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <Carousel controls={false} indicators={false}>
                  <Carousel.Item interval={15000}>
                      <img
                      className="d-block w-100"
                      src= {project1}
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={15000}>
                      <img
                      className="d-block w-100"
                      src= {project2}
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={15000}>
                      <img
                      className="d-block w-100"
                      src= {project3}
                      alt="Third slide"
                      />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
          </Row>
          <div className="about-slide-heading-section-op2"><span>Couldnt Find what you want?</span></div>
          <Row className='gx-0'>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <video autoPlay loop muted>
                  <source src={sample} type='video/mp4' />
                </video>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <div className='product-text-element'>
                  <p><h1>Browse Our Catelogues</h1>New Zealands premium luxury bathroom furniture designed for todays most sophisticated interiors. Explore our world and find the inspiration for the bathroom you have always wanted.<br /><br /><b>Read More</b></p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <Carousel controls={false} indicators={false}>
                  <Carousel.Item interval={15000}>
                      <img
                      className="d-block w-100"
                      src= {project1}
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={15000}>
                      <img
                      className="d-block w-100"
                      src= {project2}
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={15000}>
                      <img
                      className="d-block w-100"
                      src= {project3}
                      alt="Third slide"
                      />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Products;