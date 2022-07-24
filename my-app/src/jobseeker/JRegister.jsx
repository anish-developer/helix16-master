import React,{useState} from 'react'
import axios from 'axios'
import swal from 'sweetalert';

const JRegister = () => {
    const [register, setRegister] = useState({
       " j_name":"",
        "j_number":"",
        "j_email":"",
        "j_address":"",
        "j_password":"",
        "j_repassword":"",
    });
    const onFormSubmit = async (e) =>{
      e.preventDefault()
      try {
         const data = await axios.post(`https://helix12.herokuapp.com/helix/register/jobseeker`,register)
         console.log(data)
         // alert(data.data)
         swal(data.data,'', "success");
      } catch (error) {
         // alert(error.response.data)
         swal(error.response.data,'', "success");
      }
    }
    const onTextFieldChange = (e)=>{
        setRegister({
            // add value dynamically
            ...register,[e.target.name]:e.target.value
        })
    }
  return (
    
    <div className="modal fade" id="loginnn" tabindex="-1" aria-labelledby="applyNow" aria-hidden="true">
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
               <label for="j_name" className="form-label">Name</label>
               <input type="name" name='j_name' className="form-control" id="j_name" placeholder="Name" value={register.j_name} onChange={e=>onTextFieldChange(e)}/ >
            </div>
            <div className="mb-3">
               <label for="j_number" className="form-label">Number</label>
               <input type="number" name='j_number' className="form-control" id="j_number" value={register.j_number} onChange={e=>onTextFieldChange(e)} placeholder="Enter your Number"/>
            </div>
            <div className="mb-3">
               <label for="j_email" className="form-label">Email</label>
               <input type="email" name='j_email' className="form-control" id="j_email" value={register.j_email} onChange={e=>onTextFieldChange(e)} placeholder="Enter your Email"/>
            </div>
            <div className="mb-3">
               <label for="j_address" className="form-label">Address</label>
               <input type="j_address" name='j_address' className="form-control" value={register.j_address} onChange={e=>onTextFieldChange(e)} id="Address" placeholder="Enter your Address"/>
            </div>
            <div className="mb-3">
               <label for="j_password" className="form-label">Password</label>
               <input type="password" className="form-control" id="j_password" name='j_password' value={register.j_password} onChange={e=>onTextFieldChange(e)} placeholder="Enter your Password"/>
            </div>
            <div className="mb-3">
               <label for="j_repassword" className="form-label">ReEnter password</label>
               <input type="password" className="form-control" id="j_repassword" value={register.j_repassword} onChange={e=>onTextFieldChange(e)} name='j_repassword' placeholder="Enter your Password"/>
            </div>
            <button type="submit" onClick={(e)=>onFormSubmit(e)} className="btn btn-primary w-100">Sign up</button>
         </div>
      </div>
   </div>
</div>

  )
}

export default JRegister