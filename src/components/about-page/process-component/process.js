import './process.css'
import LineTo from 'react-lineto';
import { Container, Row, Col } from "react-bootstrap";

function AboutProcess() {
    return ( 
        <div className = "about-process-element">
            <div className="about-slide-heading-section-op2"><span>The Smooth Process of working with us</span></div>
            <Container fluid className='gx-0'>
                <div className = "about-process-node-grid">
                    <Row className='gx-0'>
                        <Col xs={12} md={6}>
                            <div className='about-process-node'>
                                <img
                                    className = "about-process-node-1"
                                    src= "/assets/about/images/about-node-1.jpg"
                                    alt="First node"
                                />
                                <div className='about-process-node-numbering'>1</div>
                            </div>
                            <div className='about-process-node-text'> In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. </div>
                        </Col>
                        <Col xs={0} md={6}></Col>
                    </Row>
                    <Row className='gx-0'>
                        <Col xs={0} md={6}></Col>
                        <Col xs={12} md={6}>
                            <div className='about-process-node'>
                                <img
                                    className = "about-process-node-2"
                                    src= "/assets/about/images/about-node-1.jpg"
                                    alt="First node"
                                />
                                <div className='about-process-node-numbering'>2</div>
                            </div>
                            <div className='about-process-node-text'> In publishing and graphic design, Lorem ipsum is aIn publishing and graphic design, Lorem ipsum is aIn publishing and graphic design, Lorem ipsum is aIn publishing and graphic design, Lorem ipsum is aIn publishing and graphic design, Lorem ipsum is a </div>
                        </Col>
                    </Row>
                    <Row className='gx-0'>
                        <Col xs={12} md={6}>
                            <div className='about-process-node'>
                                <img
                                    className = "about-process-node-3"
                                    src= "/assets/about/images/about-node-1.jpg"
                                    alt="First node"
                                />
                                <div className='about-process-node-numbering'>3</div>
                            </div>
                            <div className='about-process-node-text'> In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. </div>
                        </Col>
                        <Col xs={0} md={6}></Col>
                    </Row>
                    <Row className='gx-0'>
                        <Col xs={0} md={6}></Col>
                        <Col xs={12} md={6}>
                            <div className='about-process-node'>
                                <img
                                    className = "about-process-node-4"
                                    src= "/assets/about/images/about-node-1.jpg"
                                    alt="First node"
                                />
                                <div className='about-process-node-numbering'>4</div>
                            </div>
                            <div className='about-process-node-text'> In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. </div>
                        </Col>
                    </Row>
                </div>
                <LineTo from="about-process-node-1" to="about-process-node-2" borderStyle='dashed' borderColor='var(--primary-color)' borderWidth='0.4vh' delay='0'/>
                <LineTo from="about-process-node-2" to="about-process-node-3" borderStyle='dashed' borderColor='var(--primary-color)' borderWidth='0.4vh' delay='0'/>
                <LineTo from="about-process-node-3" to="about-process-node-4" borderStyle='dashed' borderColor='var(--primary-color)' borderWidth='0.4vh' delay='0'/>
            </Container>
        </div>
     );
}

export default AboutProcess;