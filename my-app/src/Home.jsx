import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom'
// import Slider from "react-slick";
import axios from 'axios'

import swal from 'sweetalert';
 const Home = () => {
     const navigate = useNavigate()
  const [empLogin,setEmpLogin] = useState({
    "email":"",
    "password":""
  })
  const signOut = () =>{
    Cookies.remove('jemail')
    navigate('/helix/Job_seekers')
    swal('logout successfully','','success')
    // window.location.reload();
   }
  const changesData = (e) =>{
    setEmpLogin({
        ...empLogin,[e.target.name]:e.target.value
    })
  }
  useEffect(()=>{
    if(Cookies.get('email')){
        navigate('/helix/dashboardemp')
    }
  })
       const SubmitForm =  (e) => {
        e.preventDefault();
        try {
            const loginEmp = async() =>{
                const data = await axios.post(`https://helix12.herokuapp.com/helix/login/checklogin`,empLogin)
                console.log(data.data)
                if(data.data === 'employer'){
                    // alert('login successful')
                    swal("login successful!",'', "success");
                    Cookies.set('email',empLogin.email,{expires:1})
                    navigate('/helix/dashboardemp')
                    setEmpLogin({email:"",password:""})
                    // window.location.reload()
                }
                else if(data.data === false){
                    // alert('')
                    swal("email is not registerd",'', "error");
                }
                else if(data.data === 'jobseeker'){
                    swal("login successful!",'', "success");
                    Cookies.set('jemail',empLogin.email,{expires:1})
                    navigate('/helix/Job_seekers')
                    setEmpLogin({email:"",password:""})
                }
                else if(data.data === 'admin'){
                  Cookies.set('admin',empLogin.email,{expires:1})
                    navigate("/helix/Admin_Home")
                }
                else{
                    // alert(data.data)
                    swal(data.data,'', "error");
                }
            }
            loginEmp()
        } catch (error) {
            // console.log(error)
            swal(error,'','error')
        }
      
      };
    
  return (
<>
<div class="wrapper sidemenu-wrapper" id="wrapper">
    <div className="hdhdh">  
<aside class="header header-sidemenu sticky-header d-none d-lg-block">
    <div className="header-sidemenu-inner">
        <div class="header-sidemenu-inner-inside">
            <div class="logo">
                <Link to="/helix/">
                    <img src={`${process.env.PUBLIC_URL}/images/logo/logo.png`} alt="logo secondary dark"/>
                </Link>
            </div>
            <nav class="menu">
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
                    {/* <li class="cr-dropdown">
                       <a href="javascript:;">Employers</a>
                       <ul>
                          <li>
                             <a href="javascript:;">Overview</a>
                          </li>
                          <li>
                             <Link to="Place_Job_Order">Place Job Order</Link>
                          </li>
                          <li>
                             <Link to="Testi">Testimonials</Link>
                          </li>
                       </ul>
                    </li> */}
                    <li>
                        <Link to="/helix/Job_seekers">Job seekers</Link>
                    </li>
                    <li>
                        <Link to="/helix/Staff_Augmentation">Services</Link>
                    </li>
                    {/* <li class="cr-dropdown">
                                <a href="javascript:;">services</a>
                                <ul>
                                    <li class="cr-sub-dropdown">
                                        <Link to="/Staff_Augmentation">Employers</Link>
                                        <ul>
                                            <li>
                                                <Link to="Staff_Augmentation">Staff Augmentation</Link>
                                            </li>
                                            <li>
                                                <Link to="Software_Development">Software Development</Link>
                                            </li>
                                            <li>
                                                <Link to="IT_Staffing">IT Staffing</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="cr-sub-dropdown">
                                        <Link to="/IT_Training">Consultant</Link>
                                        <ul>
                                            <li>
                                                <Link to="IT_Training">IT Training & Development</Link>
                                            </li>
                                            <li>
                                                <Link to="Professional">Professional Resume & Cover Letter Writing</Link>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Benefits for Jobseekers</a>
                                            </li>
                                            <li>
                                                <Link to ="A_service">A service for lifetime</Link>
                                            </li>
                                            <li>
                                                <Link to="Alumn">Alumni</Link>
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
                    {
                     Cookies.get('email') || Cookies.get('jemail') || Cookies.get('admin')?
                     <a  data-bs-toggle="modal"  onClick={()=>signOut()}class="cr-btn cr-btn-round">
                     
                        Logout
                     
                 </a>
                     :
                    <a href="#login" data-bs-toggle="modal" class="cr-btn cr-btn-round">
                            <span>Log In</span>
                        </a>
                    }
                </ul>
            </nav>
            {/* {!Cookies.get('jemail') && !Cookies.get('email')?
            <a href="#login"  data-bs-toggle="modal" class="cr-btn cr-btn-round">
                <span>Sign in</span>
            </a>
            :
            <a href="#login" onClick={()=>loginOut()} data-bs-toggle="modal" class="cr-btn cr-btn-round">
                <span>Sign out</span>
            </a>
            } */}
            {/* <div class="address">
                <span>
                    <a href="tel:+1 (424) 334-1444">+1 (424) 334-1444</a>
                </span>
                <span>
                    <a href="mailto://hr@helixtechinc.com">hr@helixtechinc.com</a>
                </span>
            </div> */}
            <div class="social-icons">
                <ul>
                    <li class="facebook">
                        <a href="#">
                            {/* <i class="bi bi-facebook"></i> */}
                        </a>
                    </li>
                    <li class="twitter">
                        <a href="#">
                            {/* <i class="bi bi-youtube"></i> */}
                        </a>
                    </li>
                    <li class="twitter">
                        <a href="#/">
                            {/* <i class="bi bi-twitter-bird"></i> */}
                        </a>
                    </li>
                    <li class="google-plus">
                        <a href="#">
                            {/* <i class="bi bi-google"></i> */}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</aside>
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
          <Link class="nav-link active" aria-current="page" to="">Home</Link>
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
        <Link to="/helix/Staff_Augmentation">Services</Link>
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
                    {
                     Cookies.get('email') || Cookies.get('jemail') || Cookies.get('admin')?
                     <a  data-bs-toggle="modal"  onClick={()=>signOut()}class="cr-btn cr-btn-round">
                     
                        Logout
                     
                 </a>
                     :
                    <a href="#login" data-bs-toggle="modal" class="cr-btn cr-btn-round">
                            <span>Log In</span>
                        </a>
                    }
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

<div class="sidemenu-wrapper-body">

    <header class="header header-style-1 bg-white fixed-header d-block d-lg-none">

        <div class="container d-none d-lg-block">
            <div class="row">
                <div class="col-lg-12">
                    <div class="header-inner">
                        <div class="logo">
                            <a href="/">
                                <img src={`${process.env.PUBLIC_URL}/images/logo/logo.png`} alt="logo secondary dark"/>
                            </a>
                        </div>
                        <nav class="menu">
                            <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="/about-us.html">About Us</a>
                    </li>
                    <li>
                        <a href="/">Employer</a>
                    </li>
                    <li>
                        <a href="/">Job seekers</a>
                    </li>
                    <li class="cr-dropdown">
                                <a href="javascript:;">services</a>
                                <ul>
                                    <li class="cr-sub-dropdown">
                                        <a href="about-us.html">Employers</a>
                                        <ul>
                                            <li>
                                                <a href="Staff-Augmentation.html">Staff Augmentation</a>
                                            </li>
                                            <li>
                                                <a href="Software-Development.html">Software Development</a>
                                            </li>
                                            <li>
                                                <a href="It-Staffing.html">IT Staffing</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="cr-sub-dropdown">
                                        <a href="services.html">Consultant</a>
                                        <ul>
                                            <li>
                                                <a href="IT-Training -Development.html">IT Training & Development</a>
                                            </li>
                                            <li>
                                                <a href="Professional-Resume.html">Professional Resume & Cover Letter Writing</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Benefits for Jobseekers</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">A service for lifetime</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Alumni</a>
                                            </li>
                                        </ul>
                                    </li>
                                    
                                    </ul>
                                </li>
                    <li>
                        <a href="faq.html">Faq</a>
                    </li>
                    <li>
                        <a href="contact-us.html">CONTACT US</a>
                    </li>
                </ul>
                        </nav>
                        <a href="#login" data-bs-toggle="modal" class="cr-btn cr-btn-round">
                            <span>Log In</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

      
        {/* <div class="mobile-menu-wrapper">
            <div class="container d-block d-lg-none">
                <div class="mobile-menu clearfix">
                    <a class="mobile-logo" href="index.html">
                        <img src="images/logo/logo.png" alt="mobile logo"/>
                    </a>
                </div>

            </div>
        </div> */}
        

    </header>
    
    <div class="banner-area">

       
        <div class="single-banner bg-image-9 fullscreen bg-parallax" data-black-overlay="5" data-velocity=".2">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 offset-xl-1 col-lg-12">
                        <div class="single-banner-content">
                            <h1 class="font-medium cd-headline no-cursor clip text-left">
                                <span class="cd-words-wrapper">
                                    <b class="is-visible">Your One-Stop-Shop for Rewarding Jobs & Capable Talent</b>
                                    <b>Get the talent you need to succeed</b>
                                    <b>Find a rewarding job in IT</b>
                                </span>
                            </h1>
                            <p id='jj'>We bring together skilled IT professionals in North America and businesses seeking tech-savvy experts. At Helix Tech, we understand how difficult it is on both sides of the coin: finding a job as an IT pro and finding talent as a company. We’re here to bridge that gap to help individuals and companies reach their goals
                            </p>
                            <Link to="/helix/About_us" class="cr-btn cr-btn-lg cr-btn-round">
                                <span id='KONW'>Know More</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     

    </div>
   
    <main class="page-content">

        
        <section id="feature-area" class="feature-area section-padding-lg bg-grey">
            <div class="container">

                <div class="row">
                   <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12 offset-0">
                      <div class="section-title text-center">
                         <h2>What We Offer</h2>
                      </div>
                   </div>
                </div>

                <div class="row justify-content-center services-grid">

                 
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 wow zoomIn">
                        <div class="service text-center">
                            <div class="service-icon">
                                <span>
                                    <img src={`${process.env.PUBLIC_URL}/images/icons/feature-icon-1.png`} alt="feature icon"/>
                                </span>
                                <span>
                                    <img src={`${process.env.PUBLIC_URL}/images/icons/feature-icon-1.png`} alt="feature icon"/>
                                </span>
                            </div>
                            <div class="service-content">
                                <h4>Staff Augmentation</h4>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 wow zoomIn">
                        <div class="service text-center">
                            <div class="service-icon">
                                <span>
                                    <img src={`${process.env.PUBLIC_URL}/images/icons/feature-icon-2.png`} alt="feature icon"/>
                                </span>
                                <span>
                                    <img src={`${process.env.PUBLIC_URL}/images/icons/feature-icon-2.png`}alt="feature icon"/>
                                </span>
                            </div>
                            <div class="service-content">
                                <h4>Software & Web Development</h4>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 wow zoomIn">
                        <div class="service text-center">
                            <div class="service-icon">
                                <span>
                                    <img src={`${process.env.PUBLIC_URL}/images/icons/feature-icon-3.png`} alt="feature icon"/>
                                </span>
                                <span>
                                    <img src={`${process.env.PUBLIC_URL}/images/icons/feature-icon-3.png`} alt="feature icon"/>
                                </span>
                            </div>
                            <div class="service-content">
                                <h4>IT Training</h4>
                            </div>
                        </div>
                    </div>
                  
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 wow zoomIn">
                        <div class="service text-center">
                            <div class="service-icon">
                                <span>
                                    <img src={`${process.env.PUBLIC_URL}/images/icons/feature-icon-3.png`} alt="feature icon"/>
                                </span>
                                <span>
                                    <img src={`${process.env.PUBLIC_URL}/images/icons/feature-icon-3.png`} alt="feature icon"/>
                                </span>
                            </div>
                            <div class="service-content">
                                <h4>Immigration Assistance</h4>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
        </section>
       
        <section class="services-area section-padding-lg bg-white">
            <div class="container">

                <div class="row">
                    <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12 offset-0">
                        <div class="section-title text-center">
                            <h2>Employer Description</h2>
                        </div>
                    </div>
                </div>

                <div class="row align-items-center">
                    <div class="col-xl-12 col-lg-12">
                        <div class="about-content">
                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                              <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"> For Employers</button>
                              </li>
                              <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">For Employees</button>
                              </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                              <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div class="row">
                                    <div class="col-lg-5 employee-img">
                                        <img src={`${process.env.PUBLIC_URL}/images/employer.png`}/>
                                    </div>
                                   <div class="col-lg-7 col-12">
                                      <div class="section-title text-center mt-5">
                                         <h6>Find the Employees</h6>
                                         <h2>Find your ideal candidate on Helix Tech IT Solutions</h2>
                                         <p class="text-justify">Helix Tech-IT Solutions is your one-stop staff provider, we conduct psychometric and personality testing of candidates to evaluate them in different aspects such as knowledge, expertise, behaviour, experience and others. As we follow an analytical method of recruitment, it enables us to filter thousands of candidates and narrow your search to a selective few that matches best with your work culture.</p>
                                         <a href="javascript:;" class="cr-btn">
                                            <span>YOUR REQUIRED TALENT</span>
                                        <b class="top: 167.406px; left: 172.5px;"></b></a>
                                      </div>
                                   </div>
                                </div>
                              </div>
                              <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                  <div class="row">
                                   <div class="col-lg-7 col-12">
                                      <div class="section-title text-center mt-5">
                                         <h6>Find Your Right Place</h6>
                                         <h2>Explore your career path with Helix Tech IT Solutions</h2>
                                         <p class="text-justify">Our Team strives to find the perfect path for you to start your career with by reaching out to the best employers and getting you the best deal.</p>
                                         <a href="javascript:;" class="cr-btn">
                                            <span>YOUR REQUIRED TALENT</span>
                                        <b class="top: 167.406px; left: 172.5px;"></b></a>
                                      </div>
                                   </div>
                                   <div class="col-lg-5 col-12 employee-img">
                                        <img src={`${process.env.PUBLIC_URL}/images/employee.png`}/>
                                    </div>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        {/* <section id="about-area" class="about-area section-padding-lg bg-grey">
            <div class="container">
                <div class="row">
                   <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12 offset-0">
                      <div class="section-title text-center">
                         <h2>About Us</h2>
                      </div>
                   </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-xl-6 col-lg-12 order-2 order-xl-1">
                        <div class="about-content">
                            <h2>Reliable & Cost Efficiant Recruitment Agency</h2>
                            <p>Helix Tech-IT Solutions is one of the leading Software Development/Staff Augmentation/IT Staffing services providers in the US. We bring together the clients and the suitable candidates, building a community in the IT industry.</p>
                            <a href="about-us.html" class="cr-btn cr-btn-round cr-btn-lg">
                                <span>Know More</span>
                            </a>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-12 order-1 order-xl-2">
                        <div class="video-box ml-0 ml-xl-5" data-tilt>
                            <div class="video-box-thumb">
                                <img src="images/about-2.jpg" alt="video-thumb"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        

        {/* <section class="job-seekar-description bg-white">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12 offset-0">
                        <div class="section-title text-center">
                            <h2>Job Seeker</h2> </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="video-box ml-0 ml-xl-5" data-tilt>
                            <div class="video-box-thumb">
                                <img class="job-seekar-img" src="images/job-seekar.jpg" alt="video-thumb"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-content">
                            <h2>Let Us Look For You</h2>
                            <p>We’ve been building quality client relationships locally and across the border so that we can place our candidates with employers. We partner with 100’s of companies in the USA. We have a proven track record of successfully recruiting for many reputed US firms. With our extensive recruitment expertise, proven delivery track record, and having core IT professionals in our recruitment team, our corporate clients know that we understand their business and the type of candidate they need much better than our competitors do.</p>
                            <a href="job-seeker.html" class="cr-btn cr-btn-round cr-btn-lg"> <span>Know More</span> <b class="top: 21.3524px; left: 167px;"></b></a>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

        <section class="our_process">
           <div class="container">
              <div class="row">
                 <div class="col-lg-6 col-md-8 col-sm-9 m-auto">
                    <div class="section-title with-sep title-style-center_text">
                       <div class="title-header">
                          <h2 class="title">How It Works</h2>
                       </div>
                    </div>
                 </div>
              </div>
              <div class="row">
                 <div class="col-md-4 ">
                    <div class="featured-icon-box icon-align-top-content text-center style4">
                       <div class="featured-icon">
                          <div class="ttm-icon ttm-icon_element-fill ttm-icon_element-color-white ttm-icon_element-size-md ttm-icon_element-style-rounded"><img class="process_img" src={`${process.env.PUBLIC_URL}/images/21.png`}/>
                            <i class="flaticon-lab-2"></i><span class="fea-number">01</span></div>
                       </div>
                       <div class="featured-content">
                          <div class="featured-title">
                             <h6 class="our_process_h5">
                                Let us know what<br/> you need
                             </h6>
                          </div>
                       </div>
                       <div class="arrow">
                            <img src={`${process.env.PUBLIC_URL}/images/arrow-1.png`} alt=""/>
                        </div>
                    </div>
                 </div>
                 <div class="col-md-4">
                    <div class="featured-icon-box icon-align-top-content text-center style4">
                       <div class="featured-icon">
                          <div class="ttm-icon ttm-icon_element-fill ttm-icon_element-color-white ttm-icon_element-size-md ttm-icon_element-style-rounded"><img class="process_img" src={`${process.env.PUBLIC_URL}/images/22.png`}/><i class="flaticon-healthcare-and-medical-1"></i><span class="fea-number">02</span></div>
                       </div>
                       <div class="featured-content">
                          <div class="featured-title">
                             <h6 class="our_process_h5">
                                We search for <br/> the best choices.
                             </h6>
                          </div>
                       </div>
                       <div class="arrow flip-arrow">
                            <img src={`${process.env.PUBLIC_URL}/images/arrow-2.png`} alt=""/>
                        </div>
                    </div>
                 </div>
                 <div class="col-md-4">
                    <div class="featured-icon-box icon-align-top-content text-center style4">
                       <div class="featured-icon">
                          <div class="ttm-icon ttm-icon_element-fill ttm-icon_element-color-white ttm-icon_element-size-md ttm-icon_element-style-rounded"><img class="process_img" src={`${process.env.PUBLIC_URL}/images/33.png`}/><i class="flaticon-laboratory-3"></i><span class="fea-number">03</span></div>
                       </div>
                       <div class="featured-content">
                          <div class="featured-title">
                             <h6 class="our_process_h5">We schedule interviews.</h6>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>
        
        <div className='moniys'>
      <section class="testimonial">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 d-none d-lg-block">
                    <ol class="carousel-indicators tabs">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">
                            <figure>
                                <img src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-01-179x179.png" class="img-fluid" alt=""/>
                            </figure>
                        </li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1">
                            <figure>
                                <img src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-02-306x306.png" class="img-fluid" alt=""/>
                            </figure>
                        </li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2">
                            <figure>
                                <img src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-03-179x179.png" class="img-fluid" alt=""/>
                            </figure>
                        </li>
                    </ol>
                </div>
                <div class="col-lg-6 d-flex justify-content-center align-items-center">
                    <div id="carouselExampleIndicators" data-interval="false" class="carousel slide" data-ride="carousel">
                        <h3>WHAT OUR CLIENTS SAY</h3>
                        <h1>TESTIMONIALS</h1>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="quote-wrapper">
                                    <p>Working with Helix Tech was a refreshing experience. Before, my company struggled to find an IT professional that matched our needs. After describing the role we needed, Helix’s team was able to provide us with a perfect-fit candidate who has since become one of our most valuable assets. I highly recommend Helix Tech no matter the size or age of your business. It’s that valuable!</p>
                                    <h3>Kristin Hans</h3>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="quote-wrapper">
                                <p>Working with Helix Tech was a refreshing experience. Before, my company struggled to find an IT professional that matched our needs. After describing the role we needed, Helix’s team was able to provide us with a perfect-fit candidate who has since become one of our most valuable assets. I highly recommend Helix Tech no matter the size or age of your business. It’s that valuable!</p>
                                    <h3>Kristin Hans</h3>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="quote-wrapper">
                                <p>Working with Helix Tech was a refreshing experience. Before, my company struggled to find an IT professional that matched our needs. After describing the role we needed, Helix’s team was able to provide us with a perfect-fit candidate who has since become one of our most valuable assets. I highly recommend Helix Tech no matter the size or age of your business. It’s that valuable!</p>
                                    <h3>Kristin Hans</h3>
                                </div>
                            </div>
                        </div>
                        <ol class="carousel-indicators indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" ></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>

       
        
        
        <form action="" onSubmit={SubmitForm}>   
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
           
            <div className="mb-3">
               <label htmlFor="email" className="form-label">Email Address</label>
               <input type="email" className="form-control" value={empLogin.email} id="email" name='email' onChange={(e)=>changesData(e)} placeholder="Enter your email"/>
            </div>
            <div className="mb-3">
               <label htmlFor="password" className="form-label">Password</label>
               <input type="password" className="form-control" id="password" name='password' value={empLogin.password} onChange={(e)=>changesData(e)} placeholder="Enter password"/>
            </div>
            {/* <button type='submit'>
            <a href="#login"  data-bs-toggle="modal" className="cr-btn cr-btn-sm">
                       <span>Log In</span>
                    </a>
                    </button> */}
                    {/* do not change this  */}
                       <button type="submit">Submit</button>
         </div>
      </div>
   </div>
</div>
</form>
        <section class="callto-action-area bg-theme">
            <div class="container">
                <div class="row">
                    <div class="col-xl-10 offset-xl-1 col-12 offset-0">
                        <div class="callto-action">
                            <div class="callto-action-inner">
                                <h2>To start your project with us</h2>
                                <Link to="/helix/CONTACT_US" class="cr-btn cr-btn-white">
                                    <span>Contact Us</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </main>
  
    <footer id="footer" class="footer-area">

        
        <div class="footer-top-area bg-dark-light section-padding-sm">
            <div class="container">
                <div class="footer-widgets widgets">
                    <div class="row">

                        <div class="col-xl-5 col-md-6 col-12">
                          
                            <div class="single-widget footer-widget-about">
                                <a href="/">
                                    <img src={`${process.env.PUBLIC_URL}/images/logo/logo.png`} alt="footer logo"/>
                                </a>
                                <p className='fo'>Helix Tech-IT Solutions is one of the leading Software Development/Staff Augmentation/IT Staffing services providers in the US. We bring together the clients and the suitable candidates, building a community in the IT industry.</p>
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
  

</div>

<div class="modal fade" id="login" tabindex="-1" aria-labelledby="applyNow" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
         <div class="modal-body p-5">
            <div class="text-center mb-4">
               <h5 class="modal-title" id="staticBackdropLabel"></h5>
            </div>
            <div class="position-absolute end-0 top-0 p-3">
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="mb-3">
               <label for="nameControlInput" class="form-label">Email Address</label>
               <input type="tel" class="form-control" id="nameControlInput" placeholder="Email Address"/>
            </div>
            <div class="mb-3">
               <label for="emailControlInput3" class="form-label">Password</label>
               <input type="password" class="form-control" id="emailControlInput3" placeholder="Enter your email"/>
            </div>
            <button type="submit" class="btn btn-primary w-100">Login</button>
         </div>
      </div>
   </div>
</div>

</div>

</>
  )
}

export default Home