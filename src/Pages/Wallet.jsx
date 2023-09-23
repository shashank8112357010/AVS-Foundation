import React from 'react';
import { BsWallet2 } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { BiNotepad, BiSolidKey, BiUserCircle, BiTransferAlt, BiMoneyWithdraw } from 'react-icons/bi';

const Wallet = ({ title }) => {
    return (
        <>
            <section className='wallet-container'>
                <div className='container'>
                    <div className='row'>
                        <div className="row justify-content-center g-0">
                            <div className="col-lg-3">
                                <div className="bg-dark d-flex align-items-center justify-content-center">
                                    <div className='text-white text-center pt-2'>
                                        <p className='pt-3'>0</p>
                                        <p>Recharge Wallet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="bg-dark d-flex align-items-center justify-content-center">
                                    <div className='text-white text-center pt-2'>
                                        <p className='pt-3'>0</p>
                                        <p>Balance Wallet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="bg-dark d-flex align-items-center justify-content-center">
                                    <div className='text-white text-center pt-2'>
                                        <p className='pt-3'>0</p>
                                        <p>Points</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5 d-flex justify-content-center align-items-center'>
                            <a href="#" className='custom-wallet-btn mx-5'>Recharge</a>
                            <a href="#" className='custom-wallet-btn'>Balance</a>
                        </div>
                        <div className='col-12 border border-1 border-dark d-flex mt-5 cursor-pointer'>
                            <p className='mt-2 text-dark'><BsWallet2 size={25} /></p>
                            <p className='mx-3 mt-2'><Link className='text-dark text-decoration-none' to="/transaction">Transaction</Link></p>
                        </div>
                        <div className='col-12 border border-1 border-dark d-flex mt-3'>
                            <p className='mt-2 text-dark'><BiNotepad size={25} /></p>
                            <p className='mx-3 mt-2'><Link className='text-dark text-decoration-none' to="/mybankaccount">My Bank Account</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Wallet