import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import {Form, Button} from 'react-bootstrap';
import './Contact.css'
import { useState } from 'react';

// SMTP Email Server Details 
// https://stackoverflow.com/questions/55795125/how-to-send-email-from-my-react-web-application
// service ID: service_wc7mxsm
// template ID: template_l24vmlx
// public key: 1NOLixANzW7XUgaN2

function Contact()  {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const messageArray = (Object.values(inputs));
        const personName = messageArray[0];
        const personNumber = messageArray[1];
        const personEmail = messageArray[2];
        const personMessage = messageArray[3];
        console.log(personName, personNumber, personEmail, personMessage);
        alert("Thank you for your response, we will get back to you shortly.");

        const templateId = 'template_l24vmlx';
        const serviceId = 'service_hw6yfvl';
        // make sure to uncommit before deploying to production
        // sendFeedback(serviceId, templateId, {message_html: personMessage, from_name: personName, from_number: personNumber, reply_to: personEmail})
    }

    const sendFeedback = (serviceId, templateId, variables) => {
        window.emailjs.send(
        serviceId, templateId,
        variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
        // Handle errors here however you like, or use a React error boundary
        .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    return (
        <div className='bottom-setction-landing'>
            <div className='contact'>
                {/* <h1 className="about-title">CONTACT</h1> */}
                {/* For no left right margins use in container: fluid className="p-0" */}
                <Container fluid className="p-0">
                    {/* <Row>
                        <Col xs={12}>
                            <div className="google-map-code">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </div>
                        </Col>
                    </Row>
                    <br></br>
                    <br></br> */}
                    <Row id="contact-spacer-bottom">
                        <Col xs={12} md={8} className="mt-5 mb-2">
                            <div className="google-map-code">
                                {/* To make maps B/W use in filter: grayscale(100%) invert(100%) contrast(100%) */}
                                <iframe style={{border:'0', filter: '' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0233955170493!2d77.63467041378985!3d12.970354718417413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a74acc0e49%3A0xb0f0b496d272aee0!2sParadise%20Stile%20Studio!5e0!3m2!1sen!2sin!4v1649324575318!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="100%" height="100%" frameborder="0" aria-hidden="false" tabindex="0" title='location-in-maps'></iframe>
                            </div>
                        </Col>
                        <Col xs={12} md={4} className="mt-5 mb-2">
                            <div className='contact-form'>
                                {/* <h3 className="get-in-touch">Lets get in touch</h3> */}
                                <Form onSubmit={handleSubmit}>
                                    <Row className="mb-3">
                                        <Col>
                                        <Form.Label >Name</Form.Label>
                                        <Form.Control name="Name" value={inputs.name} onChange={handleChange} placeholder="Full Name" size="md" id="small-form-control-box" />
                                        </Col>
                                        <Col>
                                        <Form.Label>Telephone</Form.Label>
                                        <Form.Control name="Telephone" value={inputs.telephone} onChange={handleChange} placeholder="Telephone No" size="md" id="small-form-control-box"/>
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Col>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control name="EmailID" value={inputs.emailid} onChange={handleChange} placeholder="Email ID" size="md" id="small-form-control-box"/>
                                        </Col>
                                    </Row>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control name="Message" value={inputs.message} onChange={handleChange} as="textarea" rows={3} placeholder="Enter a message here" id="small-form-control-box-bg" />
                                    </Form.Group>
                                    {/* <Row className="mb-3">
                                        <Col xs='3'> 
                                            <Form.Label>Rceive Quote</Form.Label>
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
                                    </Row> */}
                                    <Row className="mb-3">
                                        <div className="d-grid gap-2">
                                            <Button size="lg" input type="submit" value="Submit">
                                                Submit
                                            </Button>
                                        </div>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <footer class="site-footer">
            {/* <hr style={{color:'var(--secondary-color)', width:'90%', margin:'auto', border: '0px solid'}}/> */}
            {/* <br /> */}
                <div class="container">
                    {/* <hr className='large-hr' style={{color:'var(--secondary-color)', width:'100%', height:'0.3vh', margin:'auto', border: '0px solid'}}/> */}
                    <br />
                    <div class="row">
                    <div class="col-sm-12 col-md-6" >
                        <h6>Paradise Stile Studio</h6>
                        <div className='Landing-footer-text'>
                            Premium manufacturers in the designer wall and floor tiles and stone. 
                            Extensive collection of printed, vitrified, wood finish, natural and 
                            artificial stones, and more that are perfect for indoors, outdoors, 
                            bathrooms, and kitchens.<br></br><br></br>
                            Address 1: 3273, 11th Main Rd, near ESI Hospital, HAL 2nd Stage, 
                            Appareddipalya, Indiranagar, Bengaluru, Karnataka 
                            560038 <br></br><br></br>
                            Address 2: 1074/E, 11th Main Rd, HAL 2nd Stage, Appareddipalya, 
                            Indiranagar, Bengaluru, Karnataka 560038
                        </div>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Contact</h6>
                        <ul class="footer-links">
                            <li>Telephone: 080 49597762</li>
                            <li>Telephone: +91 9739236663</li>
                            <li>Telephone: +91 7259678332</li>
                            <li>Email: paradisestilestudio@gmail.com</li>
                            <li><br></br></li>
                            <li>Hours:</li>
                            <li>Monday: 10AM - 8PM</li>
                            <li>...</li>
                            <li>Saturday: 10AM - 8PM</li>
                        </ul>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul class="footer-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/catalogue">Catalogue</a></li>
                        </ul>
                    </div>
                    </div>
                    <hr style={{color:'var(--secondary-color)', width:'100%', height:'0.2vh', border: '0px solid'}}/>
                </div>
                <div class="container">
                    <div class="row">
                    <div class="col-md-8 col-sm-6 col-xs-12">
                        <div class="copyright-text">Copyright &copy; 2022 Paradise stile studio. All rights reserved. Powered by <a href="/developers">Atliere Solutions</a></div>
                    </div>

                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <ul class="social-icons">
                        <li><a class="facebook" href="https://www.facebook.com/paradisestilestudio/"><i class="fa fa-facebook"></i></a></li>
                        {/* <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li> */}
                        <li><a class="linkedin" href="https://www.linkedin.com/in/paradise-stilestudio-2322001a4/?originalSubdomain=in"><i class="fa fa-linkedin"></i></a></li>   
                        </ul>
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Contact