import React from 'react'

const Transaction = () => {
    return (
        <>
            <section className='transactions-container'>
                <div className='container'>
                    <div className='row'>
                        <ul className="nav nav-pills mb-3 mt-3 d-flex justify-content-center" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active px-5 mx-4" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Other</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link px-5" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Recharge</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link px-5 mx-4" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Withdraw</button>
                            </li>
                        </ul>
                        <div className="tab-content mt-3 mb-3" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <ul className='d-flex justify-content-between'>
                                    <li>Product Daily Income <br/> 23/09/23 13:06</li>
                                    <li className='me-3'>38.5</li>
                                </ul>
                            </div>

                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <ul className='d-flex justify-content-between'>
                                    <li>Product Daily Income <br/> 23/09/23 13:06</li>
                                    <li className='me-3'>38.5</li>
                                </ul>
                            </div>

                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <ul className='d-flex justify-content-between'>
                                    <li>Product Daily Income <br/> 23/09/23 13:06</li>
                                    <li className='me-3'>38.5</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Transaction