import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Cookies from 'js-cookie'
import axios from 'axios'
const Fa = () => {
  const [faq, setFaq] = useState([]);
  useEffect(()=>{
    const showFaq =async ()=>{
      const data = await axios.get(`https://helix12.herokuapp.com/helix/admin/show/faq`)
      setFaq(data.data)
    } 
    showFaq()
  },[faq])
  return (
   <>
   <div className="wrapper" id="wrapper">

        
<header className="header header-style-1 theme-color transparent-header megamenu-container sticky-header">
<div className="container d-none d-lg-block">
        <div className="row">
            <div className="col-lg-12">
                <div className="header-inner">
                    <div className="logo">
                        <a href="/">
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
                                        <Link to ="/Staff_Augmentation">Employers</Link>
                                    </li>
                                    <li className="cr-sub-dropdown">
                                    <Link to="/IT_Training">Consultant</Link>
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

<div class="breadcrumb-area" data-black-overlay="7">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                        <div class="cr-breadcrumb text-center">
                            <h1>Faq</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <main class="page-content">



<div className="faaa">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-sm-6 col-12">
<img src={`${process.env.PUBLIC_URL}/faq-1.png`} className='faqqq' />
      </div>
      
      <div className="col-lg-6 col-sm-6 col-12 " id='hsd'>
 {
  faq.map((curElm)=>{
    return(
      <div class="accordion" id="accordionExample">
  

<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item" >
    <h2 class="accordion-header" id="flush-heading">
      <button class="accordion-button collapsed jj" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      {curElm.question}
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-heading" data-bs-parent="#accordionExample">
      <div class="accordion-body"><p>{curElm.answer}</p></div>
    </div>
  </div>
 
 
 
</div>
</div>
  )
})
}
        </div>
    </div>
  </div>
</div>




</main>
</div>
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

   </>
  )
}

export default Fa