import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { forgotPasswordUser } from '../service';
import { useNavigate } from 'react-router-dom';
import "./Layout.css"
 const ForgotPassword = ({ title }) => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false)
  const [formData, setFormData] = useState({});
  const handleChange=(e)=>{
    const {id , value} = e.target;
    setFormData((prev)=>({...prev,[id]:value}))
  }
  const sendOTP = (e) => {
    e.preventDefault()
    if (formData.phone !== undefined && formData.phone !== "" && formData.phone.length === 10) {
      axios.post('http://localhost:8000/api/user/verifyPhoneNumber', { phone: formData.phone }).then((res) => {
        toast.success(res?.data?.message)
        console.log(res);
      }).catch((err) => console.log(err))
    } else if (formData.phone === undefined) {
      toast.error("Please enter Phone number")
    }

    else if (formData.phone === "") {
      toast.error("Please enter Phone number")
    }
    else if (formData?.phone?.length !== 10) {
      toast.error("Please enter Valid number")
    }

  }

  const handleSubmit=(e)=>{
    setLoading(true)
    e.preventDefault();
    forgotPasswordUser(formData).then((res)=>{
       toast.success(res?.data?.message);
       navigate('/login')
    }).catch((err)=>{
      setLoading(false)
      toast.error(err?.response?.data?.message)
    })

  }
  return (

    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
    <div className="container h-100">
        
        <div className="row d-flex justify-content-center align-items-center h-100">
            
            <div className="col-lg-6 col-xl-6">
                <div className="card text-black" style={{ borderRadius: 25 }}>
                    <div className="card-body p-md-5">
                        <div className="row justify-content-center">
                            {/* starts */}
                            <div className=" order-2 order-lg-1">
      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
        {title}
      </p>
      <form className="mx-1 mx-md-4">
        <div className="d-flex flex-row align-items-center mb-4">
          <i className="fas fa-user fa-lg me-3 fa-fw" />
          <div className="form-outline flex-fill mb-0">
            <input
              type="text"
              id="phone"
              onChange={handleChange}

              placeholder='Please enter mobile account '
              className="form-control"
            />

          </div>
        </div>
        <div className="d-flex flex-row align-items-center mb-4">
          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
          <div className="form-outline flex-fill mb-0">
            <input
              type="password"
              id="password"
              onChange={handleChange}

              className="form-control"
              placeholder='Please input password '
            />

          </div>
        </div>
        <div className="d-flex flex-row align-items-center mb-4">
          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
          <div className="form-outline flex-fill mb-0">
            <input
              type="password"
              id="cnfpassword"
              onChange={handleChange}

              className="form-control"
              placeholder='Please enter  password again'
            />

          </div>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <i className="fas fa-lock fa-lg me-3 fa-fw" />
          <div className="form-outline flex-fill mb-0">

            <div className='d-flex justify-content-space-between'>
              <input
                type="text"
                id="otp"
                onChange={handleChange}
                className="form-control me-3"
                placeholder='Verification code '
              />
              <button className='btn btn-secondary btn-sm ' onClick={sendOTP}>Send</button>
            </div>
          </div>
        </div>


        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
          <button type="button" onClick={handleSubmit} className="custom-btn btn-md w-100">
            {isLoading ? 
            "Loading..."
          :'Reset'}
            
          </button>
        </div>
      </form>
      <div>
        <p className='ms-5 mt-4 text-muted'><Link to="/login">Login?</Link></p>
      </div>
    </div>
                            {/* ends */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
 
  )
}

export default ForgotPassword