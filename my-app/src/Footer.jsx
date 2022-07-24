import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
   <>
    <footer id="footer" class="footer-area">

        
<div class="footer-top-area bg-dark-light section-padding-sm">
    <div class="container">
        <div class="footer-widgets widgets">
            <div class="row">

                <div class="col-xl-5 col-md-6 col-12">
                  
                    <div class="single-widget footer-widget-about">
                        <a href="index.html">
                            <img src={`${process.env.PUBLIC_URL}/images/logo/logo.png`} alt="footer logo"/>
                        </a>
                        <p>Helix Tech-IT Solutions is one of the leading Software Development/Staff Augmentation/IT Staffing services providers in the US. We bring together the clients and the suitable candidates, building a community in the IT industry.</p>
                    </div>
                  
                    <div class="single-widget widget-newsletter">
                        {/* <form action="#" method="post" class="newsletter-widget-form">
                            <input type="email" placeholder="Your Email"/>
                            <button type="submit" class="cr-btn cr-btn-sm">
                                <span>Subscribe</span>
                            </button>
                        </form> */}
                    </div>
                  
                </div>

                <div class="col-xl-3 col-md-6 col-12">
                   
                    <div class="single-widget widget-quick-links">
                        <h5 class="footer-widget-title">QUICK LINK</h5>
                        <ul>
                                    <li>
                                        <Link to="/helix/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/helix/About_us">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/helix/Employerss">Employer</Link>
                                    </li>
                                    <li>
                                        <Link to="/helix/Job_seekers">Job seekers</Link>
                                    </li>
                                    <li>
                                        <Link to="/helix/fa">Faq</Link>
                                    </li>
                                    <li>
                                        <Link to="/helix/CONTACT_US">CONTACT US</Link>
                                    </li>
                                </ul>
                    </div>
                   
                </div>

               

                <div class="col-xl-4 col-md-6 col-12">
                   
                    <div class="single-widget widget-quick-contact">
                        <h5 class="footer-widget-title">Quick Contact</h5>
                        <ul>
                            <li>
                                <span>Phone</span>
                                <p>
                                    <a href="tel:+1 (424) 334-1444">+1 (424) 334-1444</a>
                                </p>
                                <p>
                                    {/* <a href="+1 (424) 334-1444">+1 (424) 334-1444</a> */}
                                </p>
                            </li>
                            <li>
                                <span>Email</span>
                                <p>
                                    <a href="#">hr@helixtechinc.com</a>
                                </p>
                                <p>
                                    
                                </p>
                            </li>
                            <li>
                                <span>Address</span>
                                <p>34/5 evergreen road, concord city New work, United States</p>
                            </li>
                        </ul>
                    </div>
                   
                </div>

            </div>
        </div>
    </div>
</div>



</footer>
   
   </>
  )
}

export default Footer