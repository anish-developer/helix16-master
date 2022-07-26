import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import JLogin from './jobseeker/JLogin'
// import Nav from './Nav'
import JobApply from './jobseeker/JobApply'
import JRegister from './jobseeker/JRegister'
import Cookies from 'js-cookie'
import swal from 'sweetalert'
// import axios from 'axios'
// import ApplyJobs from './jobseeker/Applyjobs'
// import { useNavigate } from 'react-router-dom'

const Job_seekers = () => {

    // console.log(props)
    const navigate = useNavigate()
   const signOut = () =>{
    Cookies.remove('jemail')
    navigate('/helix')
    swal('logout successfully','','success')
    // window.location.reload();
   }
  
  
 

  return (
    <>
    
    <div className="wrapper" id="wrapper">

        
<header className="header header-style-1 theme-color transparent-header megamenu-container sticky-header">
<div className="container d-none d-lg-block">
        <div className="row">
            <div className="col-lg-12">
                <div className="header-inner">
                    <div className="logo">
                        <a href="/helix">
                            <img src={`${process.env.PUBLIC_URL}/images/logo/logo.png`} alt="logo secondary dark"/>
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
                                                <Link to="/IT_Trainng">IT Training  Development</Link>
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
                    {!Cookies.get('jemail')?
                    <>
                    <a href="#login" data-bs-toggle="modal" className="cr-btn cr-btn-sm" >
                        <span>Sign in</span>
                    </a>
                    <a href="#loginnn" data-bs-toggle="modal" className="cr-btn cr-btn-sm" >
                        <span>Sign up</span>
                    </a>
                    </>
                    :  <button onClick={()=>signOut()} data-bs-toggle="modal" className="cr-btn cr-btn-sm">
                    <span>Sign out</span>
                </button>
                    }
                </div>
            </div>
        </div>
    </div>


</header>




<div className='hsshshsh'>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
<div class="breadcrumb-area" data-black-overlay="7">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                        <div class="cr-breadcrumb text-center">
                            <h1>Job Seekers</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</div>
<main class="page-content">

          
<section class="section">
    <div class="container">
        <div class="row">
            <div class="col-lg-9">
                <div class="me-lg-5">
                    
                    
                   <JobApply/>

                       
                        

                        {/* <div class="job-box card mt-4">
                            <div class="bookmark-label text-center">
                                <a href="javascript:void(0)" class="align-middle text-white"><i class="mdi mdi-star"></i></a>
                            </div>
                    </div> */}
                    
                    {/* <div class="row">
                        <div class="col-lg-12 mt-4 pt-2">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination job-pagination mb-0 justify-content-center">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="javascript:void(0)" tabindex="-1">
                                            <i class="mdi mdi-chevron-double-left fs-15"></i>
                                        </a>
                                    </li>
                                    <li class="page-item active"><a class="page-link" href="javascript:void(0)">1</a></li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0)">4</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="javascript:void(0)">
                                            <i class="mdi mdi-chevron-double-right fs-15"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div> */}
                </div>
            </div>
            
          
            <div class="col-lg-3">
                <div class="side-bar mt-5 mt-lg-0">
                    <div class="accordion" id="accordionExample">
                       
                        <div class="accordion-item mt-4">   
                        <h2 class="accordion-header" id="experienceOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#experience" aria-expanded="true" aria-controls="experience">
                                Work experience
                            </button>
                        </h2>
                        <div id="experience" class="accordion-collapse collapse show" aria-labelledby="experienceOne">
                            <div class="accordion-body">
                                <div class="side-title">
                                    <div class="form-check mt-2">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" checked  />
                                        <label class="form-check-label ms-2 text-muted" for="flexCheckChecked1">No experience</label>
                                    </div>
                                    <div class="form-check mt-2">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" checked />
                                        <label class="form-check-label ms-2 text-muted" for="flexCheckChecked2">0-3 years</label>
                                    </div>
                                    <div class="form-check mt-2">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" checked />
                                        <label class="form-check-label ms-2 text-muted" for="flexCheckChecked3">3-6 years</label>
                                    </div>
                                    <div class="form-check mt-2">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" checked />
                                        <label class="form-check-label ms-2 text-muted" for="flexCheckChecked4">More than 6 years</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                
                        <div class="accordion-item mt-3">
                            <h2 class="accordion-header" id="jobType">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#jobtype" aria-expanded="false" aria-controls="jobtype">
                                    Type of employment
                                </button>
                            </h2>
                            <div id="jobtype" class="accordion-collapse collapse show" aria-labelledby="jobType">
                                <div class="accordion-body">
                                    <div class="side-title">
                                        <div class="form-check mt-2">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" checked/>
                                            <label class="form-check-label ms-2 text-muted" for="flexRadioDefault6">
                                                Freelance
                                            </label>
                                        </div>
                                        <div class="form-check mt-2">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                            <label class="form-check-label ms-2 text-muted" for="flexRadioDefault2">
                                                Full Time
                                            </label>
                                        </div>
                                        <div class="form-check mt-2">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                                            <label class="form-check-label ms-2 text-muted" for="flexRadioDefault3">
                                                Internship
                                            </label>
                                        </div>
                                        <div class="form-check mt-2">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
                                            <label class="form-check-label ms-2 text-muted" for="flexRadioDefault4">
                                                Part Time
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                        
                    </div>
                    
                </div>
            </div>
            
        </div>
    </div>
</section>



<Footer/>

{/* {!Cookies.get('jemail')?alert('jk'):<JLogin/>} */}
<JLogin/>

<JRegister/> 
</main>
    </>
  )
}

export default Job_seekers