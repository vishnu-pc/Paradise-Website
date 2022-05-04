import './TrustedPartners.css'
import { Container, Row, Col } from "react-bootstrap";

function Partners() {
    return (
        <>  
            <div class="trusted-partners">
                <div className="about-slide-heading-section-op2"><span>Trusted Partners</span></div> 
            </div>
            <div class="parnter-logo-grid">
                <Container>
                    <Row>
                        <Col xs={6} md={3} className='trusted-partner-col'>
                            <div className='trusted-partner-logo'>
                                <img src= 'assets/images/trusted-partner-1.png' alt="Partner 1"/>
                            </div>
                        </Col>
                        <Col xs={6} md={3} className='trusted-partner-col'>
                            <div className='trusted-partner-logo'>
                                <img src= 'assets/images/trusted-partner-2.png' alt="Partner 2"/>
                            </div>
                        </Col>
                        <Col xs={6} md={3} className='trusted-partner-col'>
                            <div className='trusted-partner-logo'>
                                <img src= 'assets/images/trusted-partner-3.png' alt="Partner 3"/>
                            </div>
                        </Col>
                        <Col xs={6} md={3} className='trusted-partner-col'>
                            <div className='trusted-partner-logo'>
                                <img src= 'assets/images/trusted-partner-4.png' alt="Partner 4"/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={3} className='trusted-partner-col'>
                            <div className='trusted-partner-logo'>
                                <img src= 'assets/images/trusted-partner-5.png' alt="Partner 5"/>
                            </div>
                        </Col>
                        <Col xs={6} md={3} className='trusted-partner-col'>
                            <div className='trusted-partner-logo'>
                                <img src= 'assets/images/trusted-partner-6.png' alt="Partner 6"/>
                            </div>
                        </Col>
                        <Col xs={6} md={3} className='trusted-partner-col'>
                            <div className='trusted-partner-logo'>
                                <img src= 'assets/images/trusted-partner-7.png' alt="Partner 7"/>
                            </div>
                        </Col>
                        <Col xs={6} md={3} className='trusted-partner-col'>
                            <div className='trusted-partner-logo'>
                                <img src= 'assets/images/trusted-partner-8.png' alt="Partner 8"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </> 
    );
}

export default Partners