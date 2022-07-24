import {useState} from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Cookies from 'js-cookie'
import axios from 'axios'
import swal from 'sweetalert';

const CONTACT_US = () => {

    const [formSend, setFormSend] = useState({
        "name":'',
        "email":'',
        "phone":'',
        "subject":'',
        "message":''
    });
    const ContactForm =async (e) =>{
        e.preventDefault(e)
        try {
            const data = await axios.post('https://helix12.herokuapp.com/helix/contactform/form',formSend)
            // console.log(data.data)
        swal("submitted successfully",'', "success");
        setFormSend({
            "name":'',
            "email":'',
            "phone":'',
            "subject":'',
            "message":''
        })
        } catch (error) {
            swal(error,'', "error");
        }
        
    }

    const onSubmitForm = (e)=>{
        setFormSend({
            ...formSend,[e.target.name]:e.target.value
        })
        
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
                        <a href="index.html">
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
                   
                    <li>
                        < Link to="/helix/Job_seekers">Job seekers</Link>
                    </li>
                    <li>
                        < Link to="/helix/Staff_Augmentation">Services</Link>
                    </li>
                    
                               
                    <li>
                        <Link to="/helix/Fa">Faq</Link>
                    </li>
                    <li>
                        <Link to="/helix/CONTACT_US">CONTACT US</Link>
                    </li>
                </ul>
                    </nav>
                    {/* <a href="#login" data-bs-toggle="modal" className="cr-btn cr-btn-sm">
                        <span>sign in</span>
                    </a> */}
                </div>
            </div>
        </div>
    </div>


</header>
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
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link to="/helix/About_us">About Us</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Servivce
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li> <Link to="/helix/Staff_Augmentation">Employers</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li> <Link to="/helix/IT_Training">Consultant</Link></li>
          </ul>
        </li>
        <li>
                        <Link to="/helix/Employerss">Employers</Link>
                    </li>
                    <li>
                        <Link to="/helix/Fa">Faq</Link>
                    </li>
                    <li>
                        <Link to="/helix/CONTACT_US">CONTACT US</Link>
                    </li>
                    
       
      </ul>
      
    </div>
  </div>
</nav>
</div>
<div class="breadcrumb-area" data-black-overlay="7">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                        <div class="cr-breadcrumb text-center">
                            <h1>Contact Us</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pg-contact-us-area section-padding-lg bg-white">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <div class="pg-contact-form mr-0 mr-lg-3">
                    <div class="small-title">
                        <h2>Contact Form</h2>
                    </div>
                    <form id="contact-form"  onSubmit={e=>ContactForm(e)}>
                        <div class="row no-gutters">
                            <div class="col-lg-6 col-md-6">
                                <div class="single-input">
                                    <input  type="text" name="name" placeholder="Name" value={formSend.name} required onChange={e=>onSubmitForm(e)}/>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="single-input">
                                    <input  placeholder="E-mail" value={formSend.email}  name='email' required onChange={e=>onSubmitForm(e)}/>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="single-input">
                                    <input  type="text" name="phone" placeholder="Phone" required  value={formSend.phone}  onChange={e=>onSubmitForm(e)}/>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="single-input">
                                    <input  type="text" name="subject" placeholder="Subject" required value={formSend.subject} onChange={e=>onSubmitForm(e)}/>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="single-input">
                                    <textarea  name="message" cols="10" rows="4" placeholder="Message" required value={formSend.message}  onChange={e=>onSubmitForm(e)}></textarea>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="single-input"> 
                                {/* <Link href="Home11"> */}
                                    <button class="cr-btn"  type="submit">
                                        <span>Send Now</span>
                                    </button>
                                    {/* </Link> */}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="pg-contact-details">
                    <div class="small-title">
                        <h2>Quick contact</h2>
                    </div>
                    <ul>
                        <li class="single-quick-contact">
                            <h5>Phone Number</h5>
                            <p>
                                <a href="#">+88012659845</a>
                                <a href="#">+88012659864</a>
                            </p>
                        </li>
                        <li class="single-quick-contact">
                            <h5>E-Mail Address</h5>
                            <p>
                                <a href="#">info@example.com</a>
                                <a href="#">info@example.com</a>
                            </p>
                        </li>
                        <li class="single-quick-contact">
                            <h5>Our Address</h5>
                            <p>32/3 north south road, Wilon, new wrork</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* <div class="row section-padding-top-xs">
            <div class="col-lg-6 offset-lg-3">
                <div class="small-title text-center">
                    <h2>Contact Maps</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority Lorem Ipsum
                        available.
                    </p>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="contact-map">
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
</div>
<Footer/>
</div> 
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

   </>
  )
}

export default CONTACT_US