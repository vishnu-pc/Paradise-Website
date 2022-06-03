import './about-page-footer.css'

function AboutFooter() {
    return ( 
        <div className = "about-footer-element">
            <footer class="site-footer">
                {/* <hr style={{color:'goldenrod', width:'0', border: '0px solid gold'}}/> */}
                <div class="container">
                    {/* <hr style={{color:'var(--secondary-color)', width:'100%', height:'0.3vh', margin:'auto', border: '0px solid'}}/> */}
                    <br />
                    <div class="row">
                    <div class="col-sm-12 col-md-6" >
                        <h6>Paradise Stile Studio</h6>
                        <div className='Landing-footer-text'>
                            Premium manufacturers in the designer wall and floor tiles and stone. 
                            Extensive collection of printed, vitrified, wood finish, natural and 
                            artificial stones, and more that are perfect for indoors, outdoors, 
                            bathrooms, and kitchens.
                            {/* <br></br><br></br> */}
                            {/* Address 1: 3273, 11th Main Rd, near ESI Hospital, HAL 2nd Stage, 
                            Appareddipalya, Indiranagar, Bengaluru, Karnataka 
                            560038 <br></br><br></br>
                            Address 2: 1074/E, 11th Main Rd, HAL 2nd Stage, Appareddipalya, 
                            Indiranagar, Bengaluru, Karnataka 560038 */}
                        </div>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Contact</h6>
                        <ul class="footer-links">
                            <li>Telephone: 080 49597762</li>
                            <li>Telephone: +91 9739236663</li>
                            <li>Telephone: +91 7259678332</li>
                            {/* <li>Email: paradisestilestudio@gmail.com</li> */}
                            {/* <br />
                            <li>Hours:</li>
                            <li>Monday: 10AM - 8PM</li>
                            <li>...</li>
                            <li>Saturday: 10AM - 8PM</li> */}
                        </ul>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul class="footer-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        {/* <li><a href="/catalogue">Catalogue</a></li> */}
                        </ul>
                    </div>
                    </div>
                    <hr style={{color:'var(--primary-color)', width:'100%', height:'0.1vh', border: '0px solid'}}/>
                </div>
                <div class="container">
                    <div class="row">
                    <div class="col-md-8 col-sm-6 col-xs-12">
                        <div class="copyright-text">Copyright &copy; 2022 All rights reserved by Paradise style studio, Powered by <a href="/developers">Atliere Solutions</a></div>
                    </div>

                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <ul class="social-icons">
                        <li><a class="facebook" href="https://www.facebook.com/paradisestilestudio/"><i class="fa fa-facebook"></i></a></li>
                        {/* <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li> */}
                        <li><a class="linkedin" href="https://www.linkedin.com/in/paradise-stilestudio-2322001a4/?originalSubdomain=in"><i class="fa fa-linkedin"></i></a></li>   
                        </ul>
                    </div>
                    </div>
                </div>
            </footer>
        </div>
     );
}

export default AboutFooter;