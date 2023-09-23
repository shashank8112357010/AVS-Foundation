import React, { useState } from 'react'
import { chnagepassword } from '../service';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ChangePassword = ({title}) => {
    const [isLoading , setLoading] = useState(false);
    const [userData , setUserData] = useState({});
    const navigate = useNavigate()

    const handleChange=(e)=>{
        const {value , id} = e.target
        setUserData((prev)=>({...prev , [id] : value}))
    }

    const handleSubmit=()=>{
        setLoading(true)
        chnagepassword({...userData , phone : localStorage.getItem("phone")}).then((res)=>{
            toast.success(res.data.message);
            navigate('/me');
            setLoading(false)

        }).catch((err)=>{
            toast.error(err.response.data.message)
            console.log(err);
            setLoading(false)
        })
    }
    return (
        <section className="vh-100">
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
                                        id="oldpassword"
                                        onChange={handleChange}

                                        placeholder='Please enter old password '
                                        className="form-control"
                                    />

                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                <div className="form-outline flex-fill mb-0">
                                    <input
                                        type="password"
                                        id="newpassword"
                                        onChange={handleChange}

                                        className="form-control"
                                        placeholder='Please enter a new password '
                                    />

                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                <div className="form-outline flex-fill mb-0">
                                    <input
                                        type="password"
                                        id="confirmnewpassword"
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder='Please enter a new password again'
                                    />

                                </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                <div className="form-outline flex-fill mb-0">

                                    
                                </div>
                            </div>


                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <button type="button" onClick={handleSubmit} className="custom-btn btn-md w-100">
                                    {isLoading ?
                                        "Loading..."
                                        : 'Confirm'}

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

export default ChangePassword