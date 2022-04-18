import './Projects.css'
import { Container, Row, Col } from "react-bootstrap";
import project1 from '../assets/images/recent-projects-1.jpeg';
import project2 from '../assets/images/recent-projects-2.jpeg';
import project3 from '../assets/images/recent-projects-3.jpeg';
import project4 from '../assets/images/recent-projects-4.jpeg';
import project5 from '../assets/images/recent-projects-5.jpeg';
import project6 from '../assets/images/recent-projects-6.jpeg';

function Projects() {
    return (
            <div class="recent-project">
                <div className="about-slide-heading-section-op2"><span>Recent Projects</span></div>
                <div className='recent-project-grid'>
                    <Container>
                        <Row className='recent-project-row'>
                            <Col xs={12} md={4} className='recent-project-col'>
                                <div className='recent-project-image-container'>
                                    <img src= {project1} alt="First slide"/>
                                </div>
                                <div className='recent-project-text'>
                                    <div className='project-name'>
                                        Urban Loft
                                    </div>
                                    <div className='project-details'>
                                        The urban loft is the height of sophisticated, cool, urban living. This style developed when homeowners started to inhabit large, open mono-spaces, typically in ex-commercial or industrial buildings and warehouses.
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={4} className='recent-project-col'>
                                <div className='recent-project-image-container'>
                                    <img src= {project2} alt="First slide"/>
                                </div>
                                <div className='recent-project-text'>
                                    <div className='project-name'>
                                        California Style B&B
                                    </div>
                                    <div className='project-details'>
                                        An accommodation offered by an inn, hotel, or especially a private home, consisting of a room for the night and breakfast the next morning for one inclusive price. an inn, hotel, or private home offering such an accommodation.
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={4} className='recent-project-col'>
                                <div className='recent-project-image-container'>
                                    <img src= {project3} alt="First slide"/>
                                </div>
                                <div className='recent-project-text'>
                                    <div className='project-name'>
                                        Clean Design Apartment
                                    </div>
                                    <div className='project-details'>
                                        Clean lines are simply put, lines that are unbroken and uninterrupted. We tend to associate clean lines with modern architectural and design periods and contemporary decorating styles.
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className='recent-project-row'>
                            <Col xs={12} md={4} className='recent-project-col'>
                                <div className='recent-project-image-container'>
                                    <img src= {project4} alt="First slide"/>
                                </div>
                                <div className='recent-project-text'>
                                    <div className='project-name'>
                                        Midtown Artist Condo
                                    </div>
                                    <div className='project-details'>
                                        A condo, short for condominium, is an individually owned residential unit in a building or complex comprised of other residential units. Condo owners share a common space and often pay association fees to maintain the common space, amenities, and other shared resources.
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={4} className='recent-project-col'>
                                <div className='recent-project-image-container'>
                                    <img src= {project5} alt="First slide"/>
                                </div>
                                <div className='recent-project-text'>
                                    <div className='project-name'>
                                        Classic Family Home
                                    </div>
                                    <div className='project-details'>
                                        A nuclear family, elementary family or conjugal family is a family group consisting of parents and their children (one or more). It is in contrast to a single-parent family, the larger extended family, or a family with more than two parents.
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={4} className='recent-project-col'>
                                <div className='recent-project-image-container'>
                                    <img src= {project6} alt="First slide"/>
                                </div>
                                <div className='recent-project-text'>
                                    <div className='project-name'>
                                        Rustic Cabin
                                    </div>
                                    <div className='project-details'>
                                        Rustic interior design represents a natural, rough, aged, and casual design style. The category is broad and incorporates a range of variations on the style, including Tuscan, coastal, cottage and modern rustic. Regardless of the variation, rustic style highlights rugged, natural beauty.
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