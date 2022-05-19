import './Testimonials2.css'
import { Carousel } from 'react-bootstrap';
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

function Testimonials2() {
    return (
            <div class="testimonial2">
                <div className="about-slide-heading-section-op2"><span>Customer Testimonials</span></div>
                <br></br><br></br>
                <div class="test-element">
                    <Carousel fade>
                    <Carousel.Item interval={1500}>
                        <img
                        className="d-block w-100"
                        src= '/assets/images/testimonial-1-3.jpg'
                        alt="First slide"
                        />
                        
                        <Carousel.Caption>
                            <p><RiDoubleQuotesL />&nbsp;&nbsp;&nbsp; They have some of the most exclusive and unique ranges of products. Best in the city of bangalore in terms of quality and service, also they are available in all price ranges and do offer some nice discounts for big projects. Delivery of the product was in a timely manner with absolutely no damage. &nbsp;&nbsp;&nbsp;<RiDoubleQuotesR /></p>
                            <h3>Lakshmi Naga</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                        className="d-block w-100"
                        src= '/assets/images/testimonial-2-1.jpg'
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                            <p><RiDoubleQuotesL />&nbsp;&nbsp;&nbsp; Happened to buy tiles for my home as my architects referred this place, I am very happy the way they the entire firm treated me and my family and the delivery was spot on. I just can’t find a single flaw and would def recommend as they are unique in terms of their tile collection and very much satisfied with the price factor too. Please keep up the good work team Paradise Stile Studio Indiranagar Bangalore. &nbsp;&nbsp;&nbsp;<RiDoubleQuotesR /></p>
                            <h3>Shankar Thyagarajan</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                        className="d-block w-100"
                        src= '/assets/images/testimonial-3-1.jpg'
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                            <p><RiDoubleQuotesL />&nbsp;&nbsp;&nbsp; Lovely and wide range of pattern tiles. Such tiles Definitely make a huge difference in terms of aesthetics of your place. Certainly a place to go and see tiles before you go somewhere else. &nbsp;&nbsp;&nbsp;<RiDoubleQuotesR /></p>
                            <h3>Hetal Popat</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </div>
                
            </div>
        );
}

export default Testimonials2
