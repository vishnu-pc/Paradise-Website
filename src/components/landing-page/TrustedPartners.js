import './TrustedPartners.css'
import { Container, Row, Col } from "react-bootstrap";
import partner1 from '../../assets/images/trusted-partner-1.png';
import partner2 from '../../assets/images/trusted-partner-2.png';
import partner3 from '../../assets/images/trusted-partner-3.png';
import partner4 from '../../assets/images/trusted-partner-4.png';
import partner5 from '../../assets/images/trusted-partner-5.png';
import partner6 from '../../assets/images/trusted-partner-6.png';
import partner7 from '../../assets/images/trusted-partner-7.png';
import partner8 from '../../assets/images/trusted-partner-8.png';

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
                                <img src= {partner1} alt="Partner 1"/>
                            </div>
                        </Col>
                        <Col xs={6} md={3} className='trusted-partner-col'>
                            <div className='trusted-partner-logo'>
                                <img src= {partner2} alt="Partner 2"/>
                            </div>
                        </Col>
                        <Col xs={6} md={3} className='trusted-partner-col'>
                            <div className='trusted-partner-logo'>
                                <img src= {partner3} alt="Partner 3"/>
                            </div>
                        </Col>
                        <Col xs={6} md={3} className='trusted-partner-col'>
                            <div className='trusted-partner-logo'>
                                <img src= {partner4} alt="Partner 4"/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={3} className='trusted-partner-col'>
                            <div className='trusted-partner-logo'>
                                <img src= {partner5} alt="Partner 5"/>
                            </div>
                        </Col>
                        <Col xs={6} md={3} className='trusted-partner-col'>
                            <div className='trusted-partner-logo'>
                                <img src= {partner6} alt="Partner 6"/>
                            </div>
                        </Col>
                        <Col xs={6} md={3} className='trusted-partner-col'>
                            <div className='trusted-partner-logo'>
                                <img src= {partner7} alt="Partner 7"/>
                            </div>
                        </Col>
                        <Col xs={6} md={3} className='trusted-partner-col'>
                            <div className='trusted-partner-logo'>
                                <img src= {partner8} alt="Partner 8"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </> 
    );
}

export default Partners