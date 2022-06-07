import './Products.css'
import { Container, Row, Col } from "react-bootstrap";
import { Carousel } from 'react-bootstrap';

function Products() {
  return (
    <div className='products-section'>
      <div className='products-grid-layout'>
        <Container fluid className='gx-0'>
          {/* <Row className='gx-0'>
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
          </Row> */}
          <Row className='gx-0'>
            <Col xs={12} md={8}>
              <div className='product-grid-element'>
                <Carousel controls={false} indicators={false} fade={true} >
                  <Carousel.Item interval={3000}>
                      <img
                      className="d-block w-100"
                      srcset = "/assets/product/images/Hexagon/Pulpis-Series-20x24/img4-393.jpg  393w, /assets/product/images/Hexagon/Pulpis-Series-20x24/img4-786.jpg  786w, /assets/product/images/Hexagon/Pulpis-Series-20x24/img4.jpg  1572w"
                      sizes="(min-width: 774px) 100vh, 50vh"
                      src= "/assets/product/images/Hexagon/Pulpis-Series-20x24/img4.jpg"
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                      <img
                      // srcset = "/assets/product/images/Hexagon/Pulpis-Series-20x24/img4-786.jpg  786w, /assets/product/images/Hexagon/Pulpis-Series-20x24/img4.jpg  1572w"
                      // sizes="(min-width: 774px) 100vh, 50vh"
                      className="d-block w-100"
                      src= "assets/product/images/Hexagon/Pulpis-Series-20x24/img14.jpg"
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                      <img
                      // srcset = "/assets/product/images/Hexagon/Pulpis-Series-20x24/img4-786.jpg  786w, /assets/product/images/Hexagon/Pulpis-Series-20x24/img4.jpg  1572w"
                      // sizes="(min-width: 774px) 100vh, 50vh"
                      className="d-block w-100"
                      src= "assets/product/images/Hexagon/4c91e7b59cc6efa3531d1767305524af.jpg"
                      alt="Third slide"
                      />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <div className='product-text-element'>
                  <p><h1>Hexagon</h1>The emerald-like hexagons fit neatly on the walls and floors giving a regal touch to any space it adorns. They can be bold with a singular color palette or a splash of artistic madness, the diversity in the range is unparalleled.<br /><br /><a href="/contact"><b>Make Enquiry</b></a></p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className='gx-0'>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <Carousel controls={false} indicators={false} fade>
                  <Carousel.Item interval={4000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Printed/Printed-Premium/Metallico-Collection/img276.jpg"
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={4000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Printed/Printed-Premium/Metallico-Collection/img47.jpg"
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={4000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Printed/Printed-Premium/Metallico-Collection/img63.jpg"
                      alt="Third slide"
                      />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <div className='product-text-element'>
                  <p><h1>Printed</h1>Be it personified mindfulness tiles such as the Mandala or a customized design of your choice, printed tiles give a whole new definition for aesthetic. The intricate designs when installed together transform your space into a visual spectacle, telling your story to the world.<br /><br /><a href="/contact"><b>Make Enquiry</b></a></p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <Carousel controls={false} indicators={false} fade>
                  <Carousel.Item interval={5000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Printed/Printed-Premium/Metallico-Collection/img71.jpg"
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Printed/Printed-Premium/Metallico-Collection/img80.jpg"
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Printed/Printed-Premium/Metallico-Collection/img268.jpg"
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
                <Carousel controls={false} indicators={false} fade>
                  <Carousel.Item interval={3000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Wooden-Finish/01_150x1200_wooden Stripe/img18.jpg"
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Wooden-Finish/01_150x1200_wooden Stripe/img34.jpg"
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Wooden-Finish/01_150x1200_wooden Stripe/img42.jpg"
                      alt="Third slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Wooden-Finish/01_150x1200_wooden Stripe/img26.jpg"
                      alt="Fourth slide"
                      />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className='product-grid-element'>
                <div className='product-text-element'>
                  <p><h1>Wooden Finish</h1>A design that realizes our childhood desire for wooden treehouses, this wooden finish flooring brings adventure and nostalgia to the urban landscape.<br /><br /><a href="/contact"><b>Make Enquiry</b></a></p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className='gx-0'>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <div className='product-text-element'>
                  <p><h1>Subway</h1>Inspired by the subways of New York, these pristine tiles radiate purity. Be it the clean white look or the Rothko-inspired multi-colored masterpiece, these Subway tiles are sure to Americanize your architecture.<br /><br /><a href="/contact"><b>Make Enquiry</b></a></p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={8}>
              <div className='product-grid-element'>
                <Carousel controls={false} indicators={false} fade>
                  <Carousel.Item interval={4000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Subway/paradise 161/img90.jpg"
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={4000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Subway/CINQUETERRE SERIES 10 X 30 CM/img52.jpg"
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={4000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Subway/paradise 163/img77.jpg"
                      alt="Third slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={4000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Subway/CINQUETERRE SERIES 10 X 30 CM/img66.jpg"
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
                <Carousel controls={false} indicators={false} fade>
                  <Carousel.Item interval={5000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Mosaic/paradise 124/img516.jpg"
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Mosaic/paradise 124/img78.jpg"
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Mosaic/paradise 124/img320.jpg"
                      alt="Second slide"
                      />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <div className='product-text-element'>
                  <p><h1>Mosaics</h1>Nothing spells ‘royalty’ like mosaics. The gold shimmer and the silver shine are perfect ornaments for your luxurious havens. These dust and water-resistant mosaics add opulence to the walls they sit on, radically transforming the space.<br /><br /><a href="/contact"><b>Make Enquiry</b></a></p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <Carousel controls={false} indicators={false} fade>
                  <Carousel.Item interval={2000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Mosaic/12  X 48 SMALL KITKAT/img9.jpg"
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Mosaic/12 X 93 MM SPECIAL MOSAIC/img21.jpg"
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Mosaic/12 X 93 MM SPECIAL MOSAIC/img125.jpg"
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Mosaic/FISH SCALE 83 X 94 MM SPECIAL MOSAIC/img13.jpg"
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Mosaic/FISH SCALE 83 X 94 MM SPECIAL MOSAIC/img13.jpg"
                      alt="Second slide"
                      />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
          </Row>
          <Row className='gx-0'>
            <Col xs={12} md={8}>
              <div className='product-grid-element'>
                <Carousel controls={false} indicators={false} fade>
                  <Carousel.Item interval={4200}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Carpet/PARADISE EUROPE Floor All Tiles Catalogue 13/img25.jpg"
                      alt="Third slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={4200}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Carpet/PARADISE EUROPE Floor All Tiles Catalogue 13/img186.jpg"
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={4200}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Carpet/PARADISE EUROPE Floor All Tiles Catalogue 13/img194.jpg"
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={4200}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Carpet/PARADISE EUROPE Floor All Tiles Catalogue 13/img94.jpg"
                      alt="First slide"
                      />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <div className='product-text-element'>
                  <p><h1>Carpet</h1>Infused with modern style, it features a bold large-scale pattern of intersecting lines and curves in a neutral color palette of rich taupes, grays and blues to highlight the boldness of the pattern.<br /><br /><a href="/contact"><b>Make Enquiry</b></a></p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className='gx-0'>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <div className='product-text-element'>
                  <p><h1>Terazzo</h1>A blend of quartz, marble, glass, and other materials, these sleek Terrazzo tiles have a sand-like design with a sleek texture that is sure to perfectly blend into any space.<br /><br /><a href="/contact"><b>Make Enquiry</b></a></p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <Carousel controls={false} indicators={false} fade={true} >
                  <Carousel.Item interval={3300}>
                      <img
                      className="d-block w-100"
                      src= "assets/product/images/Terrazo/VENICE TERRAZO/img5.jpg"
                      alt="Third slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={3300}>
                      <img
                      className="d-block w-100"
                      src= "assets/product/images/Terrazo/VENICE TERRAZO/img15.jpg"
                      alt="Third slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={3300}>
                      <img
                      className="d-block w-100"
                      src= "assets/product/images/Terrazo/VENICE TERRAZO/img4.jpg"
                      alt="Third slide"
                      />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <Carousel controls={false} indicators={false} fade>
                  <Carousel.Item interval={1500}>
                      <img
                      className="d-block w-100"
                      src= "assets/product/images/Terrazo/LP Terrezo 600 x 1200/img45.jpg"
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
                      <img
                      className="d-block w-100"
                      src= "assets/product/images/Terrazo/LP Terrezo 600 x 1200/img46.jpg"
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
                      <img
                      className="d-block w-100"
                      src= "assets/product/images/Terrazo/paradise 160/img40.jpg"
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
                      <img
                      className="d-block w-100"
                      src= "assets/product/images/Terrazo/paradise 160/img68.jpg"
                      alt="Second slide"
                      />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
          </Row>
          <Row className='gx-0'>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <Carousel controls={false} indicators={false} fade>
                  <Carousel.Item interval={2000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Jungle-Series/Bali Stone _ Livorno Series 20 x 20/img59.jpg"
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Jungle-Series/Bali Stone _ Livorno Series 20 x 20/img62.jpg"
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Jungle-Series/Bali Stone _ Livorno Series 20 x 20/img61.jpg"
                      alt="Third slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Jungle-Series/Bali Stone _ Livorno Series 20 x 20/img68.jpg"
                      alt="Third slide"
                      />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <Carousel controls={false} indicators={false} fade>
                  <Carousel.Item interval={3500}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Jungle-Series/23 X 27 CM HEXA SERIES-2/img76.jpg"
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={3500}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Jungle-Series/23 X 27 CM HEXA SERIES-2/img93.jpg"
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={3500}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Jungle-Series/Bali Stone _ Livorno Series 20 x 20/img67.jpg"
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={3500}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Jungle-Series/Bali Stone _ Livorno Series 20 x 20/img66.jpg"
                      alt="Second slide"
                      />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <div className='product-text-element'>
                  <p><h1>Jungle Series</h1>A collection that takes it's inspiration from botanic influences. The tiles have random patterns that can be put together like a puzzle. The unique theme make this a statement collection that is the perfect match for a designer.<br /><br /><a href="/contact"><b>Make Enquiry</b></a></p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className='gx-0'>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <div className='product-text-element'>
                  <p><h1>Spanish</h1>Be it rooted, beige colors of the splashy wildness of the carnival, these tiles inspired by the aesthetics of Spain are sure to be a fiesta-worthy addition to your abode. Known originally as the Majolica, these tiles have a distinct, white glaze that adds a pristine look to the space.<br /><br /><a href="/contact"><b>Make Enquiry</b></a></p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <Carousel controls={false} indicators={false} fade>
                  <Carousel.Item interval={4700}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Spanish-Italian/Crema Avorio Series 45 x 90/img7.jpg"
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={4700}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Spanish-Italian/Aura Series 45 x 90/img10.jpg"
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={4700}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Spanish-Italian/Lavik Series 32 x 62.5 _ 45 x 90/img5.jpg"
                      alt="Third slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={4700}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Spanish-Italian/Sassi Series 45 x 90/img19.jpg"
                      alt="Fourth slide"
                      />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <Carousel controls={false} indicators={false} fade>
                  <Carousel.Item interval={3000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Spanish-Italian/Musa Series 33.15 x 33.15/img5.jpg"
                      alt="Fourth slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Spanish-Italian/Musa Series 33.15 x 33.15/img18.jpg"
                      alt="Fourth slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Spanish-Italian/Aura Series 45 x 90/img4.jpg"
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Spanish-Italian/Aura Series 45 x 90/img5.jpg"
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Spanish-Italian/Aura Series 45 x 90/img6.jpg"
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
                <div className='product-text-element'>
                  <p><h1>Italian</h1>The aesthetics of Europe is a specialty at Paradise and our next stop is vibrant Italy. With a rich history and a richer art history, these Roman-inspired tiles add not just royalty but genuine greatness to your architectural marvel.<br /><br /><a href="/contact"><b>Make Enquiry</b></a></p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <Carousel controls={false} indicators={false} fade>
                  <Carousel.Item interval={2000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Solid-Colors/paradise stile studio 89/img19.jpg"
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Solid-Colors/paradise stile studio 89/img38.jpg"
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Solid-Colors/paradise stile studio 89/img44.jpg"
                      alt="Third slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Solid-Colors/paradise stile studio 89/img27.jpg"
                      alt="Third slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Solid-Colors/paradise stile studio 89/img33.jpg"
                      alt="Third slide"
                      />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <div className='product-text-element'>
                  <p><h1>Solid Colors</h1>Minimalism at its finest, these solid colors are for the ones who envision sophistication in every edge. Make it an even design or mix it up with some solids, we are sure it would add personality to your sanctuary.<br /><br /><a href="/contact"><b>Make Enquiry</b></a></p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className='gx-0'>
            <Col xs={12} md={8}>
              <div className='product-grid-element'>
                <Carousel controls={false} indicators={false} fade>
                  <Carousel.Item interval={2000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Bigger-Size/paradise 132/img133.jpg"
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Bigger-Size/paradise 132/img127.jpg"
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Bigger-Size/paradise 132/img97.jpg"
                      alt="Third slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Bigger-Size/paradise 132/img60.jpg"
                      alt="Third slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                      <img
                      className="d-block w-100"
                      src= "/assets/product/images/Bigger-Size/paradise 132/img45.jpg"
                      alt="Third slide"
                      />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='product-grid-element'>
                <div className='product-text-element'>
                  <p><h1>Bigger Size</h1>Big tiles or Extra-large tiles provide a smoother and sleeker floor finish while making your home or office look more spacious. Sizes such as 1000x2000 | 1200x1800 | 1200x1200 | 800x1600 | 290x1800 mm and imparts a classy look to space.<br /><br /><a href="/contact"><b>Make Enquiry</b></a></p>
                </div>
              </div>
            </Col>
          </Row>
{/* *********************************************** */}
          {/* <div className="about-slide-heading-section-op2"><span>Couldnt Find what you want? Browse Our Catelogs</span></div>
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
          </Row> */}
        </Container>
      </div>
    </div>
  );
}

export default Products;