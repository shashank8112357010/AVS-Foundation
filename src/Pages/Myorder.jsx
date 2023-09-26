import React from 'react'

const Myorder = () => {
    return (
        <>
            <section className='myorder-container'>
                <div className='container'>
                    <div className='row'>
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4 text-center">
                                    <h1>image ?</h1>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <div>
                                            <ul className='d-flex justify-content-between'>
                                                <li>Price</li>
                                                <li>580 Rs</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul className='d-flex justify-content-between'>
                                                <li>Cycle</li>
                                                <li>2 Days</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul className='d-flex justify-content-between'>
                                                <li>Income</li>
                                                <li>38.5 Rs</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul className='d-flex justify-content-between'>
                                                <li>Create</li>
                                                <li>15/09/2023</li>
                                            </ul>
                                        </div>
                                        <div className='text-center mb-3 pt-3'>
                                            <a href="#" className='custom-get-btn'>Get</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Myorder