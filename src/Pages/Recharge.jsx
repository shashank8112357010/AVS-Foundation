import React from 'react'

const Recharge = () => {
    return (
        <>
            <section className='recharge-container'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-sm-6'>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Recharge Amount</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="0" />
                            </div>
                            <p className='py-2'>Choose Amount</p>
                            <ul className='d-flex justify-content-between align-itmes-center pb-5'>
                                <li><a href="#" className='custom-btn'>500</a></li>
                                <li><a href="#" className='custom-btn'>5000</a></li>
                                <li><a href="#" className='custom-btn'>10000</a></li>
                            </ul>
                            <ul className='d-flex justify-content-between align-itmes-center pb-2'>
                                <li><a href="#" className='custom-btn'>20000</a></li>
                                <li><a href="#" className='custom-btn'>30000</a></li>
                                <li><a href="#" className='custom-btn'>50000</a></li>
                            </ul>
                            <p className='pt-3'>Recharge Method</p>
                            <ul className='d-flex justify-content-evenly align-itmes-center pt-2'>
                                <li><a href="#" className='custom-btn'>Fastpay</a></li>
                                <li><a href="#" className='custom-btn'>Payplus</a></li>
                            </ul>
                            <ul className='d-flex justify-content-evenly align-itmes-center pt-5'>
                                <li><a href="#" className='custom-btn'>Kirinpay</a></li>
                                <li><a href="#" className='custom-btn'>Yespay</a></li>
                            </ul>
                            <div className='d-flex justify-content-center align-items-center pt-4'>
                                <a href='#' className='custom-withdraw-btn'>Recharge</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Recharge