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
                                        A wooden cabin amidst nature is a fantasy arising from the need 
                                        for peace and serenity. A rustic interior space brings the same calm 
                                        to your urban abode. The timber finishes, exposed beams, and natural stones 
                                        only add to the Indic feel of your architectural haven.
                                        <br></br><br></br><br></br>
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
                                        The flavors of the east encapsulate the design in this 
                                        orient-inspired decor. The disciplined minimalism of the 
                                        Japanese is brushed in the bold and beautiful black and white 
                                        color palette. Less is more and this decor spells ‘lavish’ 
                                        with as little effort as possible.
                                        <br></br><br></br><br></br>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={4} className='recent-project-col'>
                                <div className='recent-project-image-container'>
                                    <img src= '/assets/images/recent-projects-3-1.jpg' alt="Category 3"/>
                                </div>
                                <div className='recent-project-text'>
                                    <div className='project-name'>
                                        Coastal Rendezvous
                                    </div>
                                    <div className='project-details'>
                                        The Goan chill oozes from this coastal-inspired 
                                        wall and floor tiles. The blue represents the ocean 
                                        in the summer, looking hip at any time of day. The 
                                        white represents the lush sand of the beaches. One 
                                        can picture the hammock and Pina Coladas already.
                                        <br></br><br></br><br></br>
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
                                        Nothing beats the classics and for good reason. 
                                        The traditional condo with its royal mosaics and 
                                        sophisticated brown look radiates elegance and luxury. 
                                        One can mix it up and add a dash of one's personality with 
                                        our personalized options.
                                        <br></br><br></br><br></br>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={4} className='recent-project-col'>
                                <div className='recent-project-image-container'>
                                    <img src= '/assets/images/recent-projects-5-1.jpg' alt="Category 5"/>
                                </div>
                                <div className='recent-project-text'>
                                    <div className='project-name'>
                                        Artistic Vigor
                                    </div>
                                    <div className='project-details'>
                                        Boldness and precision drip from these perfectly geometrical 
                                        shapes. With graphic patterns, timber, and minimalistic steel 
                                        furnishings, this style emulates personal art studios of Italy.
                                        <br></br><br></br><br></br>
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
                                        A timeless and old-school style of decor, the Bohemian 
                                        decor gives one’s haven the classic touch it requires. 
                                        Exotic yet rooted, global yet rustic, this mix of art 
                                        styles culminates into an aesthetic collage that somehow 
                                        blends to form a personality of its own.
                                        <br></br><br></br><br></br>
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