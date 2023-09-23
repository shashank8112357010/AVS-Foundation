import React, { useEffect, useState } from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import { getProducts } from '../service';
import { useNavigate } from 'react-router-dom';

const Product = () => {
    const [toggle, setToggle] = useState("organic");
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()

    const fetchProductsData = () => {
        getProducts().then((res) => {
            setProducts(res.data.results)
            console.log(res.data.results);
        }).catch((err) => {
            console.log("err");
        })
    }


    useEffect(() => {
        fetchProductsData()
    }, [])
    return (
        <>
            <section className='product-container mx-auto'>
                <div className='container'>
                    <div className='row'>
                        <ul className="nav nav-pills mt-3 mb-3 ms-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation" >
                                {
                                    console.log(toggle)
                                }
                                <button className={`nav-link   ${toggle === 'organic' && ' active'} `} onClick={() => setToggle("organic")} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Organic Fruit</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className={`nav-link   ${toggle === 'agriculture' && ' active'} `} id="pills-profile-tab" onClick={() => setToggle("agriculture")} data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Agricultural Machinery</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent" style={{ paddingBottom: "5rem" }}>
                            <div className={`tab-pane fade ${toggle === 'organic' && 'show active'} `} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                                {
                                    products && products.map((product) => {
                                        return (
                                            <div className=" cursor-pointer card  mb-3 " onClick={()=>navigate(`/productdetails/${product._id}`)} style={{ cursor: "pointer" }} key={product.id}>
                                                <div className="row g-0">
                                                    <div className="col-md-4">
                                                        <div className='text-center'>
                                                            <h2><img src={product.image} alt='image' height="200px" width="200px" /></h2>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8 ">
                                                        <div className="card-body">
                                                            <h5 className="card-title">{product.product_name}</h5>
                                                            <span className='d-block'>Income {product.income_per_day} Rs/Day</span>
                                                            <span className='d-block'>Profit time {product.profit_time}</span>
                                                            <span className='d-block'>Validity period {product.validity_period}</span>
                                                            <span className='d-block'>Total revenue {product.total_revenue} Rs</span>
                                                            <h3 className='text-success fw-bold'>Rs 580</h3>
                                                            <p className='bg-success text-light text-center fs-3 d-none'>00:00:00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }



                            </div>
                            <div className={`tab-pane fade ${toggle === 'agriculture' && 'show active '} `} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <div className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <div className='text-center'>
                                                <img src='https://www.oamfuture.com/uploads/20230830/19fa7650a92a32ddb1d5670dba2650ba.jpg' />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Machinery</h5>
                                                <span className='d-block'>Income 40.6 Rs/Day</span>
                                                <span className='d-block'>Profit time 12 Hours/Day</span>
                                                <span className='d-block'>Validity period 25 Days</span>
                                                <span className='d-block'>Total revenue 1015 Rs</span>
                                                <h3 className='text-success fw-bold'>Rs 580</h3>
                                                <p className='bg-success text-light text-center fs-3 d-none'>00:00:00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <div className='text-center'>
                                                <img src='https://www.oamfuture.com/uploads/20230830/291d565d809fa2b566c20fe80e908c11.jpg' />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Cultivatory</h5>
                                                <span className='d-block'>Income 40.6 Rs/Day</span>
                                                <span className='d-block'>Profit time 12 Hours/Day</span>
                                                <span className='d-block'>Validity period 25 Days</span>
                                                <span className='d-block'>Total revenue 1015 Rs</span>
                                                <h3 className='text-success fw-bold'>Rs 580</h3>
                                                <p className='bg-success text-light text-center fs-3 d-none'>00:00:00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <div className='text-center'>
                                                <img src='https://www.oamfuture.com/uploads/20230830/2deb271ba056c872b4451614101d3be7.jpg' />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Agricultural subsolier</h5>
                                                <span className='d-block'>Income 40.6 Rs/Day</span>
                                                <span className='d-block'>Profit time 12 Hours/Day</span>
                                                <span className='d-block'>Validity period 25 Days</span>
                                                <span className='d-block'>Total revenue 1015 Rs</span>
                                                <h3 className='text-success fw-bold'>Rs 580</h3>
                                                <p className='bg-success text-light text-center fs-3 d-none'>00:00:00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <div className='text-center'>
                                                <img src='https://www.oamfuture.com/uploads/20230830/19fa7650a92a32ddb1d5670dba2650ba.jpg' />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Agricultural seeder</h5>
                                                <span className='d-block'>Income 40.6 Rs/Day</span>
                                                <span className='d-block'>Profit time 12 Hours/Day</span>
                                                <span className='d-block'>Validity period 25 Days</span>
                                                <span className='d-block'>Total revenue 1015 Rs</span>
                                                <h3 className='text-success fw-bold'>Rs 580</h3>
                                                <p className='bg-success text-light text-center fs-3 d-none'>00:00:00</p>
                                            </div>
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

export default Product