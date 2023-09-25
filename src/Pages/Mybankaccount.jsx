import React from 'react'

const Mybankaccount = () => {
    return (
        <>
            <section className='mybankaccount-container'>
                <div className='container'>
                    <form className="row g-3 needs-validation" noValidate="">
                        <div className="col-md-12">
                            <label htmlFor="validationCustom01" className="form-label">
                                Cardholder Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="validationCustom01"
                                placeholder='Cardholder Name'
                                required="required"
                            />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="validationCustom02" className="form-label">
                                Bank Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="validationCustom02"
                                placeholder='Bank Name'
                                required="required"
                            />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="validationCustomUsername" className="form-label">
                                Bank Account
                            </label>
                            <div className="input-group has-validation">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationCustomUsername"
                                    aria-describedby="inputGroupPrepend"
                                    placeholder='Bank Account'
                                    required="required"
                                />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="validationCustom03" className="form-label">
                                IFSC
                            </label>
                            <input
                                type="tel"
                                className="form-control"
                                id="validationCustom03"
                                placeholder='IFSC'
                                required="required"
                            />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="validationCustom04" className="form-label">
                                Mobile
                            </label>
                            <input
                                type="tel"
                                className="form-control"
                                id="validationCustom03"
                                placeholder='Mobile'
                                required="required"
                            />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="validationCustom05" className="form-label">
                                Withdraw Password
                            </label>
                            <input
                                type="Password"
                                className="form-control"
                                placeholder='Withdraw Password'
                                id="validationCustom05"
                                required="required"
                            />
                        </div>

                        <div className="col-md-12 text-center">
                            <button className="custom-btn" type="submit">
                                Submit form
                            </button>
                        </div>
                    </form>

                </div>
            </section>
        </>
    )
}

export default Mybankaccount