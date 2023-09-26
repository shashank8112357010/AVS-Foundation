import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const Withrawpassword = ({ title }) => {
    const location = useLocation()
    const [isLoading, setLoading] = useState(false);
    const handleChange = () => {

    }

    const handleSubmit = () => {

    }

    const sendOTP=()=>{

    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
      }, [location.pathname]);
    return (
        <section className="vh-100" >
            <div className="container h-100">

                <div className="row d-flex justify-content-center align-items-center h-100">

                    <div className="col-lg-6 col-xl-6">
                        <div className="card text-black" style={{ borderRadius: 25 }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    {/* starts */}
                                    <div className=" order-2 order-lg-1">
                                        <p className="text-center h3  mb-5 mx-1 mx-md-4 mt-4">
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
                                                        placeholder='Please input withdraw password '
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
                                                        placeholder='Please enter withdraw password again'
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
                                                        : 'Reset'}

                                                </button>
                                            </div>
                                        </form>
                                   
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

export default Withrawpassword