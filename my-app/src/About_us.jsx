import React from 'react'
import { Link } from 'react-router-dom'
// import { a } from 'react-router-dom'
import Footer from './Footer'
import Cookies from 'js-cookie'
const About_us = () => {
  return (
    <>
   <div className="wrapper" id="wrapper">
  <div className="hdhdh"> 
<header className="header header-style-1 theme-color transparent-header megamenu-container sticky-header">

    <div className="container d-none d-lg-block">
        <div className="row">
            <div className="col-lg-12">
                <div className="header-inner">
                    <div className="logo">
                        <a href="index.html">
                            <img src={`${process.env.PUBLIC_URL}/images/logo/logo.png`}alt="logo secondary dark"/>
                        </a>
                    </div>
                    <nav className="menu">
                        <ul>
                    <li>
                        <Link to="/helix/">Home</Link>
                    </li>
                    <li>
                        <Link to="/helix/About_us">About Us</Link>
                    </li>
                    {!Cookies.get('jemail')?
                    <li>
                        <Link to="/helix/Employerss">Employers</Link>
                    </li>:''    
                }
                    {/* <li className="cr-dropdown">
                       <a href="#">Employers</a>
                       <ul>
                          <li>
                             <a href="javascript:;">Overview</a>
                          </li>
                          <li>
                             <Link to="/Place_Job_Order">Place Job Order</Link>
                          </li>
                          <li>
                             <Link to="/Testi">Testimonials</Link>
                          </li>
                       </ul>
                    </li> */}
                    <li>
                        < Link to="/helix/Job_seekers">Job seekers</Link>
                    </li>
                    <li>
                        < Link to="/helix/Staff_Augmentation">services</Link>
                    </li>
                    {/* <li className="cr-dropdown">
                                <a href="javascript:;">services</a>
                                <ul>
                                    <li className="cr-sub-dropdown">
                                        <Link to="/Staff_Augmentation">Employers</Link>
                                        <ul>
                                            <li>
                                                <Link to="/Staff_Augmentation">Staff Augmentation</Link>
                                            </li>
                                            <li>
                                                <Link to="/Software_Development">Software Development</Link>
                                            </li>
                                            <li>
                                                <Link to="/IT_Staffing">IT Staffing</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="cr-sub-dropdown">
                                        <Link to="/IT_Training">Consultant</Link>
                                        <ul>
                                            <li>
                                            <Link to="/IT_Training">IT Training & Development</Link>
                                            </li>
                                            <li>
                                                <Link to="/Professional">Professional Resume  Cover Letter Writing</Link>
                                            </li>
                                            <li>
                                                <a to="javascript:;">Benefits for Jobseekers</a>
                                            </li>
                                            <li>
                                                <Link to="/A_service">A service for lifetime</Link>
                                            </li>
                                            <li>
                                                <Link to="/Alumn">Alumni</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    
                                    </ul>
                                </li> */}
                    <li>
                        <Link to="/helix/Fa">Faq</Link>
                    </li>
                    <li>
                        <Link to="/helix/CONTACT_US">CONTACT US</Link>
                    </li>
                </ul>
                    </nav>
                    {/* <a href="#login" data-bs-toggle="modal" className="cr-btn cr-btn-sm">
                        <span>Sign in</span>
                    </a> */}
                </div>
            </div>
        </div>
    </div>

    
    {/* <div className="mobile-menu-wrapper">
        <div className="container d-block d-lg-none">
            <div className="mobile-menu clearfix">
                <a className="mobile-logo" href="index.html">
                    <img src="images/logo/logo.png" alt="mobile logo"/>
                </a>
                <a href="contact-us.html" className="cr-btn cr-btn-sm">
<span>Get A Quote</span>
</a>
            </div>
        </div>
    </div> */}
  

</header>

</div>
<div className='hsshshsh'>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/helix/"><img src={`${process.env.PUBLIC_URL}/images/logo/logo.png`} alt="" /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/helix/">Home</Link>
        </li>
        <li class="nav-item">
        <Link to="/helix/About_us">About Us</Link>
        </li>
        <li>
                        <Link to="/helix/Employerss">Employers</Link>
                    </li>
                    <li>
                        < Link to="/helix/Job_seekers">Job seekers</Link>
                    </li>
        <li class="nav-item">
        <Link to="/helix/Staff_Augmentation">Service</Link>
        </li>
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Servivce
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li> <Link to="/Staff_Augmentation">Employers</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li> <Link to="/IT_Training">Consultant</Link></li>
          </ul>
        </li> */}
        <li>
                        {/* <Link to="/Employerss">Employers</Link> */}
                    </li>
                    <li>
                        <Link to="/helix/Fa">Faq</Link>
                    </li>
                    <li>
                        <Link to="/helix/CONTACT_US">CONTACT US</Link>
                    </li>
                    
        {/* <li class="nav-item">
          <a class="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
</div>
<div className="breadcrumb-area" data-black-overlay="7">
    <div className="container">
        <div className="row">
            <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                <div className="cr-breadcrumb text-center">
                    <h1>About Us</h1>
                </div>
            </div>
        </div>
    </div>
</div>

<main className="page-content">

    
<section id="about-area" className="about-area section-padding-lg bg-grey">
        <div className="container">
            <div className="row align-items-center">
                
                <div className="col-xl-6 col-lg-6 col-12">
                <div className="about-image text-center wow fadeInRight" data-tilt="">
                        <img src={`${process.env.PUBLIC_URL}/images/about-2.jpg`} alt="about thumb" className='contact_dus_img'/>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-12">
                <div className="about-content">
                    <p className='about-usse'>ABOUT US</p>
                        <h2>Company History</h2>
                        <p className="text-justify">Helix Tech-IT Solutions was founded to bridge the gap between IT candidates and the companies that need them.</p>
                        <p className="text-justify">Quality IT professionals are great at their profession, but that doesn’t mean they’re great at finding work. Many top universities produce reliable professionals, but don’t equip them with the skills to find a position that maximizes their talent. That’s where Helix Tech-IT Solutions comes in.</p>
                        <p className="text-justify">We help to not only find the very best in IT talent but also match them with companies they can grow and evolve with. We're building a leading IT community by combining job-seeking, qualified candidates and organizations in need of their services. Our expertise expands across North America to include the United States and Canada. No matter where you're located, our highly experienced and talented team is here to help.</p>
                    </div>
                   </div>
            </div>
        </div>
    </section>
    
    <section className="services-area section-padding-lg bg-white">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-7 col-lg-6 order-2 order-lg-1">
                    <div className="about-content">
                        <h2>Company Mission and Goal</h2>
                        <p className="text-justify">At Helix Tech, we understand just how difficult it is for both individuals and organizations in the field of IT. Our team has experienced the struggle of finding a relevant, rewarding, and challenging position as an IT professional, and we've seen how difficult it is for businesses of any size to find the right talent. That's why we've made it our mission to provide world-className IT staffing solutions for individuals and professionals. We want to help qualified experts find a fulfilling job at a fantastic company, and we want to help great organizations find the talent they need to reach their IT goals. We're committed to living up to that goal every single day.</p>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-6 order-1 order-lg-2">
                    <div className="about-image text-center wow fadeInRight" data-tilt="">
                        <img className="goals-img" src={`${process.env.PUBLIC_URL}/1.jpg`} alt="about thumb"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

</main>

    
   <Footer/>

<div className="modal fade" id="login" tabindex="-1" aria-labelledby="applyNow" aria-hidden="true">
   <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
         <div className="modal-body p-5">
            <div className="text-center mb-4">
               <h5 className="modal-title" id="staticBackdropLabel"></h5>
            </div>
            <div className="position-absolute end-0 top-0 p-3">
               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            {/* <div className="mb-3">
               <label for="nameControlInput" className="form-label">Mobile Number</label>
               <input type="tel" className="form-control" id="nameControlInput" placeholder="Enter your Mobile Number"/>
            </div> */}
            <div className="mb-3">
               <label for="emailControlInput2" className="form-label">Email Address</label>
               <input type="email" className="form-control" id="emailControlInput2" placeholder="Enter your email"/>
            </div>
            <div className="mb-3">
               <label for="emailControlInput3" className="form-label">Password</label>
               <input type="password" className="form-control" id="emailControlInput3" placeholder="Enter your email"/>
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
         </div>
      </div>
   </div>
</div>

</div>
   
    </>
  )
}

export default About_us