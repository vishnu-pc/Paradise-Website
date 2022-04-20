import './Products.css'
import { Container, Row, Col } from "react-bootstrap";
import { Carousel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import project1 from '../../assets/product/images/a1.jpg';
import project2 from '../../assets/product/images/a2.jpg';
import project3 from '../../assets/product/images/a5.jpg';

function Products() {
  return (
    <div className='products-section'>
      <div className='products-grid-layout'>
        <Container fluid className='gx-0'>
          <Row className='gx-0'>
            <Col xs={12} md={6}>
              <div className='product-grid-element'>
                <Carousel controls={false} indicators={false}>
                  <Carousel.Item interval={1500}>
                      <img
                      className="d-block w-100"
                      src= {project1}
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
                      <img
                      className="d-block w-100"
                      src= {project2}
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
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
                  Hello
                </div>
              </div>
            </Col>
          </Row>
          <Row className='gx-0'>
            <Col xs={12} md={6}>
              <div className='product-grid-element'>
                <Carousel controls={false} indicators={false}>
                  <Carousel.Item interval={1500}>
                      <img
                      className="d-block w-100"
                      src= {project1}
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
                      <img
                      className="d-block w-100"
                      src= {project2}
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
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
                <Carousel controls={false} indicators={false}>
                  <Carousel.Item interval={1500}>
                      <img
                      className="d-block w-100"
                      src= {project1}
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
                      <img
                      className="d-block w-100"
                      src= {project2}
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
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
            <Col xs={12} md={6}>
              <div className='product-grid-element'>
                <div className='product-text-element'>
                  Hello
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className='product-grid-element'>
                <Carousel controls={false} indicators={false}>
                  <Carousel.Item interval={1500}>
                      <img
                      className="d-block w-100"
                      src= {project1}
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
                      <img
                      className="d-block w-100"
                      src= {project2}
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
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