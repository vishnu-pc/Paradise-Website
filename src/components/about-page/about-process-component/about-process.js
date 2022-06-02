import './about-process.css'
import LineTo from 'react-lineto';
import { Container, Row, Col } from "react-bootstrap";

function AboutProcess() {
    return ( 
        <div className='about-process-component'>
            <div className = "about-process-element">
                <div className="about-slide-heading-section-op2"><span>The process of working with us</span></div>
                <Container fluid className='gx-0'>
                    <div className = "about-process-node-grid">
                        <Row className='gx-0'>
                            <Col xs={12} md={6}>
                                <div className='about-process-node'>
                                    <img
                                        className = "about-process-node-1"
                                        src= "/assets/about/images/about-node-1-1.jpg"
                                        alt="First node"
                                    />
                                    <div className='about-process-node-numbering'>1</div>
                                </div>
                                <div className='about-process-node-text'>
                                    <div className='about-process-node-text-heading'>Stage 1 - Union:</div>
                                    Designing is not just a scientific process, but a personal one as well. 
                                    There is an exchange of ideas and a union of artists to craft the perfect 
                                    design. Here is where we meet our clients, know their likes and tastes, and 
                                    accordingly, provide solutions that not only complement their design 
                                    but also align with current trends in the interior design world.
                                </div>
                            </Col>
                            <Col xs={0} md={6}></Col>
                        </Row>
                        <Row className='gx-0'>
                            <Col xs={0} md={6}></Col>
                            <Col xs={12} md={6}>
                                <div className='about-process-node'>
                                    <img
                                        className = "about-process-node-2"
                                        src= "/assets/about/images/about-node-2.jpg"
                                        alt="First node"
                                    />
                                    <div className='about-process-node-numbering'>2</div>
                                </div>
                                <div className='about-process-node-text'>
                                    <div className='about-process-node-text-heading'>Stage 2 - Choice:</div>
                                    As we mentioned, we have a diverse range of designs for our 
                                    clients to be spoilt for choice. Be it geometrically precise 
                                    mosaics or therapeutic Mandalas, we have them all. However, 
                                    if the client has a particular style or design in mind, we 
                                    customize it to their specification.
                                </div>
                            </Col>
                        </Row>
                        <Row className='gx-0'>
                            <Col xs={12} md={6}>
                                <div className='about-process-node'>
                                    <img
                                        className = "about-process-node-3"
                                        src= "/assets/about/images/about-node-3.jpg"
                                        alt="First node"
                                    />
                                    <div className='about-process-node-numbering'>3</div>
                                </div>
                                <div className='about-process-node-text'>
                                    <div className='about-process-node-text-heading'>Stage 3: Delivery:</div>
                                    Once the choice is made, our clients can breathe easy as 
                                    we take care of the rest. We deliver your choice of design 
                                    after a minimum waiting period, which ranges from 15 to 20 
                                    days depending on the order.
                                </div>
                            </Col>
                            <Col xs={0} md={6}></Col>
                        </Row>
                        <Row className='gx-0'>
                            <Col xs={0} md={6}></Col>
                            <Col xs={12} md={6}>
                                <div className='about-process-node'>
                                    <img
                                        className = "about-process-node-4"
                                        src= "/assets/about/images/about-node-4.jpeg"
                                        alt="First node"
                                    />
                                    <div className='about-process-node-numbering'>4</div>
                                </div>
                                <div className='about-process-node-text'>
                                    <div className='about-process-node-text-heading'>Stage 4: Installation:</div>
                                    From conceptualization to execution, it is a long road and we 
                                    have reached the destination. The process of finishing 
                                    your architectural marvel starts here. We recommend some 
                                    trusted vendors install the tiles. These are collaborators 
                                    who have been with us since the beginning. After installation, 
                                    we come to the end of our union, only to collaborate yet again 
                                    on your next project.
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <LineTo from="about-process-node-1" to="about-process-node-2" borderStyle='dashed' borderColor='var(--primary-color)' borderWidth='0.4vh' delay='0'/>
                    <LineTo from="about-process-node-2" to="about-process-node-3" borderStyle='dashed' borderColor='var(--primary-color)' borderWidth='0.4vh' delay='0'/>
                    <LineTo from="about-process-node-3" to="about-process-node-4" borderStyle='dashed' borderColor='var(--primary-color)' borderWidth='0.4vh' delay='0'/>
                </Container>
            </div>
        </div>
     );
}

export default AboutProcess;