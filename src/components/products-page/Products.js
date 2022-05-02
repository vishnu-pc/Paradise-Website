import './Products.css'
import { Container, Row, Col } from "react-bootstrap";
import { Carousel } from 'react-bootstrap';
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
                        <img
                        className="d-block w-100"
                        src = "/assets/product/images/moodboard1.jpg"
                        alt="First slide"
                        />
                </div>
              </div>
            </Col>
          </Row>
          <Row className='gx-0'>
            <Col xs={12} md={8}>
              <div className='product-grid-element'>
                <Carousel controls={false} indicators={false} fade={true} >
                  <Carousel.Item interval={1500}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Tiles/Tile1.jpg"
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Tiles/Tile2.jpg"
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Tiles/Tile3.jpg"
                      alt="Third slide"
                      />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <div className='product-text-element'>
                  <p><h1>Ceramic</h1>Affordability and durability make ceramic the ideal choice for any room in your home, including the bathroom, kitchen, and front entrance. Glazed ceramic tile offers more protection against stains or damage compared to wood, carpet, or even vinyl plank flooring.<br /><br /><b>Find out More</b></p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className='gx-0'>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <div className='product-text-element'>
                  <p><h1>Porcelain</h1>Rectangular subway tiles, once relegated to the New York Subway system, have risen in popularity in recent years as the pinnacle tile shape for backsplashes. Subway tiles are easy to customize using differing lay patterns, lending dimensionality of design to any room.<br /><br /><b>Find out More</b></p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <Carousel controls={false} indicators={false} fade>
                  <Carousel.Item interval={3000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Creatives/c1.jpg"
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Creatives/c2.png"
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Creatives/c3.png"
                      alt="Third slide"
                      />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <video autoPlay loop muted>
                  <source src = "/assets/product/videos/airpods.mp4" type='video/mp4' />
                </video>
              </div>
            </Col>
          </Row>
          <Row className='gx-0'>
            <Col xs={12} md={6}>
              <div className='product-grid-element'>
                <Carousel controls={false} indicators={false} fade>
                  <Carousel.Item interval={1500}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Creatives/c4.png"
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Creatives/c5.png"
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Creatives/c6.png"
                      alt="Third slide"
                      />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className='product-grid-element'>
                <div className='product-text-element'>
                  <p><h1>Mandala</h1>A mandala is a geometric configuration of symbols. In various spiritual traditions, mandalas may be employed for focusing attention of practitioners and adepts, as a spiritual guidance tool, for establishing a sacred space and as an aid to meditation and trance induction.<br /><br /><b>Find out More</b></p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className='gx-0'>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <div className='product-text-element'>
                  <p><h1>Wooden</h1>Wood floor tile has become one of the trends in the flooring industry today. With the developments in manufacturing processes, Ceramic or Vitrified tiles that appears like natural wood is being used in projects big and small. No longer limited to conventional sizes, tile can now be manufactured in planks, rectangular.<br /><br /><b>Find out More</b></p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={8}>
              <div className='product-grid-element'>
                <Carousel controls={false} indicators={false} fade>
                  <Carousel.Item interval={3000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Tiles/Tile4.jpg"
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Tiles/Tile5.jpg"
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Tiles/Tile6.jpg"
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
                  <p><h1>Glazed</h1>A glazed tile is a tile with glaze. It is made by putting chemical glazes on the tile, let it dry, and putting it into a kiln (an oven that heats up to high temperatures). The kiln heats to about 2000 degrees turning the chemical glaze to colors. It is often framed and sold. This is a popular form of art.<br /><br /><b>Find out More</b></p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <Carousel controls={false} indicators={false} fade>
                  <Carousel.Item interval={1500}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Creatives/c7.png"
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Creatives/c8.png"
                      alt="Second slide"
                      />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
          </Row>
          <div className="about-slide-heading-section-op2"><span>Couldnt Find what you want? Browse Our Catelogs</span></div>
          <Row className='gx-0'>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <div className='product-element-catalog'>
                  <img
                    className="d-block w-100"
                    src= "/assets/product/images/Catalogs/catalog1.jpg"
                    alt="Third slide"
                  />
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <div className='product-element-catalog'>
                  <img
                    className="d-block w-100"
                    src= "/assets/product/images/Catalogs/catalog2.jpg"
                    alt="Third slide"
                  />
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <div className='product-element-catalog'>
                  <img
                    className="d-block w-100"
                    src= "/assets/product/images/Catalogs/catalog3.jpg"
                    alt="Third slide"
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row className='gx-0'>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <div className='product-element-catalog'>
                  <img
                    className="d-block w-100"
                    src= "/assets/product/images/Catalogs/catalog4.jpg"
                    alt="Third slide"
                  />
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <div className='product-element-catalog'>
                  <img
                    className="d-block w-100"
                    src= "/assets/product/images/Catalogs/catalog5.jpg"
                    alt="Third slide"
                  />
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <div className='product-element-catalog'>
                  <img
                    className="d-block w-100"
                    src= "/assets/product/images/Catalogs/catalog6.jpg"
                    alt="Third slide"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Products;