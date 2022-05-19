import './Projects.css'
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
    return (
            <div class="recent-project">
                <div className="about-slide-heading-section-op2"><span>Project Profiles</span></div>
                <br></br><br></br>
                <div className='recent-project-grid'>
                    <Container>
                        <Row className='recent-project-row'>
                            <Col xs={12} md={4} className='recent-project-col'>
                                <div className='recent-project-image-container'>
                                    <img src= '/assets/images/recent-projects-1-1.jpg' alt="Category 1"/>
                                </div>
                                <div className='recent-project-text'>
                                    <div className='project-name'>
                                        Rustic Meandering
                                    </div>
                                    <div className='project-details'>
                                        Rustic design is all about bringing the outdoors in, but without the biting bugs and the risks of inclement weather. Think raw, reclaimed timbers, exposed beams and unfinished stones, popular with a lot of hipster cafes and restaurants of today. There’s no reason why you can’t recreate this interior design style at home.<br></br><br></br><br></br>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={4} className='recent-project-col'>
                                <div className='recent-project-image-container'>
                                    <img src= '/assets/images/recent-projects-2-1.jpg' alt="Category 2"/>
                                </div>
                                <div className='recent-project-text'>
                                    <div className='project-name'>
                                        Oriental Mindset
                                    </div>
                                    <div className='project-details'>
                                    Asian-style interiors are more often than not a fusion of styles, with Japanese and Chinese expression leading the way of popular interior design themes.
                                    Japanese design is minimalist with colours from the natural world informing the colour palette while Chinese design is more opulent with richer, lavish colours are used.<br></br><br></br><br></br>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={4} className='recent-project-col'>
                                <div className='recent-project-image-container'>
                                    <img src= '/assets/images/recent-projects-3-1.jpg' alt="Category 3"/>
                                </div>
                                <div className='recent-project-text'>
                                    <div className='project-name'>
                                        Coastal Randevu
                                    </div>
                                    <div className='project-details'>
                                        Coastal interior design notes feature light, bright, and airy environs often dreamed up in vibrant neutrals to soak up the suns rays. Common coastal color palettes include shades of light blues and greens inspired by the ocean along with an array of creams and neutrals for a relaxed yet elegant finish.<br></br><br></br><br></br>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className='recent-project-row'>
                            <Col xs={12} md={4} className='recent-project-col'>
                                <div className='recent-project-image-container'>
                                    <img src= '/assets/images/recent-projects-4-1.jpg' alt="Category 4"/>
                                </div>
                                <div className='recent-project-text'>
                                    <div className='project-name'>
                                        Traditional Condo
                                    </div>
                                    <div className='project-details'>
                                        When it comes to interior design styles, almost everything is rooted in traditional interior design ideas, and for good reason. That said, you can make traditional style interior design all your own by incorporating pieces that speak to your personality and lifestyle while making a statement.<br></br><br></br><br></br>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={4} className='recent-project-col'>
                                <div className='recent-project-image-container'>
                                    <img src= '/assets/images/recent-projects-5-1.jpg' alt="Category 5"/>
                                </div>
                                <div className='recent-project-text'>
                                    <div className='project-name'>
                                        Art Deco Delight
                                    </div>
                                    <div className='project-details'>
                                        Features of this interior design style include geometric shapes and graphic patterns, timber furnishings, minimalistic steel furnishing and natural lighting layered with fluroscent lamp for evening lighting. It incorporates being bold and artistic expression with fresh touches.<br></br><br></br><br></br>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={4} className='recent-project-col'>
                                <div className='recent-project-image-container'>
                                    <img src= '/assets/images/recent-projects-6-1.jpg' alt="Category 6"/>
                                </div>
                                <div className='recent-project-text'>
                                    <div className='project-name'>
                                        Bohemian Escape
                                    </div>
                                    <div className='project-details'>
                                    One of the most timeless and endlessly popular interior design styles out there, bohemian décor represents a care and fuss-free freedom that’s unquestionably heady and intoxicating. Boasting a globally inspired comfortable mix of exotic finds and vintage and antique furnishings.<br></br><br></br><br></br>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
    );
}

export default Projects