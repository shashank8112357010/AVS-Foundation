import React, { useEffect } from 'react';
import { removeToken } from '../Common/token';
import { Link, useNavigate , useLocation } from 'react-router-dom'
import { toast } from 'react-toastify';
import { BsWallet2 } from "react-icons/bs";
import { BiNotepad, BiSolidKey, BiUserCircle , BiTransferAlt ,BiMoneyWithdraw} from 'react-icons/bi';
import { AiOutlineTransaction } from 'react-icons/ai';
import { CiHeadphones } from 'react-icons/ci';



const Me = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const logout = () => {
        removeToken();
        navigate('/login');
        toast.success("Log out successfully")
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
      }, [location.pathname]);
    return (
        <>
            <section className='me-container mx-auto'>
                <div className='container'>
                    <div className='row justify-content-center bg-dark'>
                        <h5 className='text-center text-light mt-3'>8112357010</h5>
                        <div className='col-lg-6 mt-4 d-flex justify-content-between align-items-center'>
                            <div className='col-sm-3 income'>
                                <div className='text-center'>
                                    <p className='text-light'>0</p>
                                    <p className='text-light'>Total income</p>
                                </div>
                                <div className='text-center'>
                                    <p className='text-light'>0</p>
                                    <p className='text-light'>Total withdrawl</p>
                                </div>
                            </div>

                            <div className='col-sm-3 recharge'>
                                <div className='text-center'>
                                    <p className='text-light'>0</p>
                                    <p className='text-light'>Total Rehcarge</p>
                                </div>
                                <div className='text-center'>
                                    <p className='text-light'>0</p>
                                    <p className='text-light'>today's income</p>
                                </div>
                            </div>

                            <div className='col-sm-3 assets'>
                                <div className='text-center'>
                                    <p className='text-light'>0</p>
                                    <p className='text-light'>Total assets</p>
                                </div>
                                <div className='text-center'>
                                    <p className='text-light'>0</p>
                                    <p className='text-light'>Team income</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className='transaction-container'>
                <div className='container'>
                    <div className='row justify-content-center my-3'>
                        <div className="col-lg-3 col-md-6 col-12 text-center" >
                            <div className=' text-center mt-2 mx-5 border rounded-circle roundheightwidth d-inline-flex  justify-content-center bg-dark ' > <AiOutlineTransaction size={29} color='white' className='mt-3' /></div>
                            <div>

                                <span className='d-inline w-100 ' >
                                    Recharge
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 text-center">
                            <div className=' text-center mt-2 mx-5 border rounded-circle roundheightwidth d-inline-flex  justify-content-center bg-dark ' > <BiMoneyWithdraw size={29} color='white' className='mt-3' /></div>
                            <div>

                                <span className='d-inline w-100 ' >
                                    Withdraw
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 text-center">
                            <div className=' text-center mt-2 mx-5 border rounded-circle roundheightwidth d-inline-flex  justify-content-center bg-dark ' > <BiTransferAlt size={29} color='white' className='mt-3' /></div>
                            <div>

                                <span className='d-inline w-100 ' >
                                    Transaction
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 text-center">
                            <div className=' text-center mt-2 mx-5 border rounded-circle roundheightwidth d-inline-flex  justify-content-center bg-dark ' > <CiHeadphones size={29} color='white' className='mt-3' /></div>
                            <div>

                                <span className='d-inline w-100 ' >
                                    Online service
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section>
                <div className='container ' style={{ height: "700px" }}>
                    <div className='row'>
                        {/* {
                            accountData && accountData.map((item) => {
                                return (
                                    <div className='col-12 border border-1 border-dark d-flex mt-3'>
                                        <p className='mt-2 text-dark'></p>
                                        <p className='mx-4 mt-2'>{item.name}</p>
                                    </div>
                                )
                            })
                        } */}
                        <div className='col-12 border border-1 border-dark d-flex mt-3 cursor-pointer'>
                            <p className='mt-2 text-dark'><BsWallet2 size={25} /></p>
                            <p className='mx-3 mt-2'>Wallet</p>
                        </div>
                        <div className='col-12 border border-1 border-dark d-flex mt-3'>
                            <p className='mt-2 text-dark'><BiNotepad size={25} /></p>
                            <p className='mx-3 mt-2'>My Orders</p>
                        </div>
                        <div className='col-12 border border-1 border-dark d-flex mt-3'>
                            <p className='mt-2 text-dark'><BiUserCircle size={25} /></p>
                            <p className='mx-3 mt-2' ><Link className='text-dark text-decoration-none' to="/referral">Refer Friends</Link></p>
                        </div>
                        <div className='col-12 border border-1 border-dark d-flex mt-3'>
                            <p className='mt-2 text-dark'><BiSolidKey size={25} /></p>
                            <p className='mx-3 mt-2'><Link className='text-dark text-decoration-none' to="/changepassword">Change Password</Link></p>
                        </div>
                        <div className='col-12 border border-1 border-dark d-flex mt-3'>
                            <p className='mt-2 text-dark'><BiSolidKey size={25} /></p>
                            <p className='mx-3 mt-2'><Link className='text-dark text-decoration-none' to="/withrawpassword">Withdraw Password</Link></p>
                        </div>
                        <button className='custom-btn-logOut my-5 text-center' onClick={logout} >Log out</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Me