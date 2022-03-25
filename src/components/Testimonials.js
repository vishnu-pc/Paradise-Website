import React from 'react'
import './Testimonials.css'
import person1 from '../assets/images/person1.jpg';
import person2 from '../assets/images/person2.jpg';

function Testimonials() {
    return (
            <div class="testimonial">
                <h1>Testimonials</h1>
                {/* <p>This is what some of our customers had to say about us</p> */}
                <div class="test">
                    <div class="test1">
                        <img src={person1} />
                        <h2>Trader Joe</h2>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
                        <p>"For flooring, Vitrified tiles are the best bet since they are durable and can withstand heavy traffic. For walls, you can choose either ceramic or porcelain tiles as they are non-porous or do not absorb stains. For outdoors it's best to opt for either matt finish or anti-skid tiles to avoid slips."</p>
                    </div>
                    <div class="hover-text1">"For flooring, Vitrified tiles are the best bet since they are durable and can withstand heavy traffic. For walls, you can choose either ceramic or porcelain tiles as they are non-porous or do not absorb stains. For outdoors it's best to opt for either matt finish or anti-skid tiles to avoid slips."</div>
                </div>
                <div class="test">
                    <div class="test2">
                        <img src={person2} />
                        <h2>Trader Jack</h2>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-half-o"></i>
                        <p>"For flooring, Vitrified tiles are the best bet since they are durable and can withstand heavy traffic. For walls, you can choose either ceramic or porcelain tiles as they are non-porous or do not absorb stains. For outdoors it's best to opt for either matt finish or anti-skid tiles to avoid slips."</p>
                    </div>
                    <div class="hover-text2">abc abc abc</div>
                </div>
                <div class="test">
                    <div class="test3">
                        <img src={person1} />
                        <h2>Trader Bob</h2>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <p>"For flooring, Vitrified tiles are the best bet since they are durable and can withstand heavy traffic. For walls, you can choose either ceramic or porcelain tiles as they are non-porous or do not absorb stains. For outdoors it's best to opt for either matt finish or anti-skid tiles to avoid slips."</p>
                    </div>
                    <div class="hover-text3"><p>abc abc abc</p></div>
                </div>
            </div>

    );
}

export default Testimonials
