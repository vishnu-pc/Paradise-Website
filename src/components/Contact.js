import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import {Form, Button} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import './Contact.css'

function Contact() {
    return (
        <div className='contact'>
            {/* <h1 className="about-title">CONTACT</h1> */}
            {/* For no left right margins use in container: fluid className="p-0" */}
            <Container fluid className="p-0">
                <Row>
                    {/* <Col xs={12}>
                        <div className="google-map-code">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </Col> */}
                </Row>
                <br></br>
                <br></br>
                <Row id="contact-spacer-bottom">
                    <Col>
                        <div className='contact-form'>
                            <h2 className="about-title">Get in touch with us</h2>
                            <br></br>
                            <Form>
                                <Row className="mb-3">
                                    <Col>
                                    <Form.Label >Name</Form.Label>
                                    <Form.Control placeholder="Full Name" size="lg"/>
                                    </Col>
                                    <Col>
                                    <Form.Label>Telephone</Form.Label>
                                    <Form.Control placeholder="Telephone No" size="lg"/>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control placeholder="Email ID" size="lg"/>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={5} placeholder="Enter a message here"/>
                                </Form.Group>
                                <Row className="mb-3">
                                    <Col xs='3'> 
                                        <Form.Label>Reseive Quote</Form.Label>
                                        <Form.Check 
                                            type="switch"
                                            id="custom-switch"
                                            label=""
                                        />
                                    </Col>
                                    <Col xs='3'> 
                                        <Form.Label>Tile Colour</Form.Label>
                                        <Form.Control
                                            type="color"
                                            id="exampleColorInput"
                                            defaultValue="#563d7c"
                                            title="Choose your color"
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label>Priority</Form.Label>
                                        <Form.Range />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <div className="d-grid gap-2">
                                        <Button size="lg">
                                            Submit
                                        </Button>
                                    </div>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                    <Col>
                        <div className="google-map-code">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <footer class="site-footer">
                            <div class="container">
                                <div class="row">
                                <div class="col-sm-12 col-md-6">
                                    <h6>Paradise Style Studio</h6>
                                    <div className='Landing-footer-text'>
                                        Premium manufacturer of designer tiles and stones. exotic collection of all types tiles indoor ,outdoor ,exterior , cladding, kitchen, floor.<br></br><br></br>
                                        Address: Address: 3273, 11th Main Rd, near ESI Hospital, HAL 2nd Stage, Appareddipalya, Indiranagar, Bengaluru, Karnataka 560038
                                    </div>
                                </div>

                                <div class="col-xs-6 col-md-3">
                                    <h6>Contact</h6>
                                    <ul class="footer-links">
                                        <li>Telephone: 080 4959 7762</li>
                                        <li>Email: godknowswhat@gmail.com</li>
                                        <li><strong>Hours:</strong></li>
                                        <li>Monday: 10AM - 8PM</li>
                                        <li>...</li>
                                        <li>Saturday: 10AM - 8PM</li>
                                    </ul>
                                </div>

                                <div class="col-xs-6 col-md-3">
                                    <h6>Quick Links</h6>
                                    <ul class="footer-links">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Products</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Catelogue</a></li>
                                    </ul>
                                </div>
                                </div>
                                <hr />
                            </div>
                            <div class="container">
                                <div class="row">
                                <div class="col-md-8 col-sm-6 col-xs-12">
                                    <div class="copyright-text">Copyright &copy; 2022 All Rights Reserved by <a href="#">Atliere Solutions</a></div>
                                </div>

                                <div class="col-md-4 col-sm-6 col-xs-12">
                                    <ul class="social-icons">
                                    <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                                    <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </footer>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contact