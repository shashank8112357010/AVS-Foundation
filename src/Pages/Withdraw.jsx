import React from 'react'

const Withdraw = () => {
    return (
        <>
            <section className='withdraw-container'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-sm-6'>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="formGroupExampleInput" className="form-label ps-1">
                                        Withdraw Amount
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control py-2"
                                        id="formGroupExampleInput"
                                        placeholder="Withdraw Amount"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formGroupExampleInput2" className="form-label ps-1">
                                        Withdraw Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control py-2"
                                        id="formGroupExampleInput2"
                                        placeholder="Withdraw Password"
                                    />
                                </div>
                                <ul className='d-flex justify-content-between'>
                                    <li>Available Balance</li>
                                    <li>38.5</li>
                                </ul>
                                <ul className='d-flex justify-content-between'>
                                    <li>Single Fee</li>
                                    <li>5 %</li>
                                </ul>
                                <div className='text-center mt-5'>
                                    <a href='#' className='custom-withdraw-btn'>Withdraw</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Withdraw