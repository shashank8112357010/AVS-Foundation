import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { loginUser } from '../service';
import { useNavigate } from 'react-router-dom';
import Loader from '../Helper/Loader';
import { setToken } from '../Common/token';
import "./Layout.css"


const Login = ({ title }) => {
    const navigate = useNavigate()
    const [isLoading, setLoading] = useState(false)
    const [formData, setFormData] = useState({});
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value, }))
    }
    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault();
        loginUser(formData).then((res) => {
            setToken(res.data.results.token)
            localStorage.setItem('phone', res.data.results.phone)
            console.log(res);
            toast.success(res?.data?.message);
            navigate('/home')
            setLoading(false)
        }).catch((err) => {
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
                                    <div className="order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                            {title}
                                        </p>
                                        <form className="mx-1 mx-md-4">
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw" />
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        onChange={handleChange}
                                                        type="text"
                                                        id="phone"
                                                        className="form-control"
                                                        placeholder='Please input account number '
                                                    />

                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="password"
                                                        id="password"
                                                        className="form-control"
                                                        onChange={handleChange}
                                                        placeholder='Please input a password'
                                                    />

                                                </div>
                                            </div>


                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 ">

                                                <button type="button" onClick={handleSubmit} className="w-100  custom-btn btn-md">
                                                    {isLoading ?
                                                        "Loading..."
                                                        :
                                                        "Login"
                                                    }

                                                </button>
                                            </div>
                                        </form>
                                        <div>
                                            <p className='ms-5 mt-4 text-muted'><Link to="/forgotpassword">Forgot password?</Link></p>
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

export default Login