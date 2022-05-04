import './Testimonials2.css'
import { Carousel } from 'react-bootstrap';
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

function Testimonials2() {
    return (
            <div class="testimonial2">
                <div className="about-slide-heading-section-op2"><span>Testimonials</span></div>
                <div class="test-element">
                    <Carousel fade>
                    <Carousel.Item interval={1500}>
                        <img
                        className="d-block w-100"
                        src= '/assets/images/testimonial-1.jpg'
                        alt="First slide"
                        />
                        
                        <Carousel.Caption>
                            <p><RiDoubleQuotesL />&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin, sapien lorem dictum lacus, non consequat odio ipsum nec est. Sed mattis egestas elementum. Nulla facilisi. Quisque placerat risus ac nunc ornare tincidunt. Sed quis faucibus nunc. Pellentesque accumsan arcu mi, eget venenatis mauris.&nbsp;&nbsp;&nbsp;<RiDoubleQuotesR /></p>
                            <h3>Kane Williamson</h3>
                            <p>Apple</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                        className="d-block w-100"
                        src= '/assets/images/testimonial-2.jpg'
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                            <p><RiDoubleQuotesL />&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin, sapien lorem dictum lacus, non consequat odio ipsum nec est. Sed mattis egestas elementum. Nulla facilisi. Quisque placerat risus ac nunc ornare tincidunt. Sed quis faucibus nunc. Pellentesque accumsan arcu mi, eget venenatis mauris.&nbsp;&nbsp;&nbsp;<RiDoubleQuotesR /></p>
                            <h3>Kristina Augerstine</h3>
                            <p>Microsoft</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                        className="d-block w-100"
                        src= '/assets/images/testimonial-3.jpg'
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                            <p><RiDoubleQuotesL />&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin, sapien lorem dictum lacus, non consequat odio ipsum nec est. Sed mattis egestas elementum. Nulla facilisi. Quisque placerat risus ac nunc ornare tincidunt. Sed quis faucibus nunc. Pellentesque accumsan arcu mi, eget venenatis mauris.&nbsp;&nbsp;&nbsp;<RiDoubleQuotesR /></p>
                            <h3>Miranda Joy</h3>
                            <p>Google</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </div>
                
            </div>
        );
}

export default Testimonials2
