import React, { useEffect, useState } from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import { getCategory, getProducts, getProductsByCategoryId } from '../service';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Product = () => {
    const [toggle, setToggle] = useState();
    const [products, setProducts] = useState([]);
    const [categorys, setCategory] = useState([]);

    const navigate = useNavigate()

    const fetchProductsData = (id) => {
        getProductsByCategoryId(id).then((res) => {
            setProducts(res.data.results)
            console.log(res.data.results);
        }).catch((err) => {
            console.log("err");
        })
    }
    
    const fetchCategoryData = () => {
        getCategory().then((res) => {
            setToggle(res.data.results[0].name)
            setCategory(res.data.results);
            fetchProductsData(res.data.results[0]._id)
        }).catch((err) => {
            console.log("err");
        })
    }




    useEffect(() => {
        fetchCategoryData()
    }, [])
    return (
        <>
            {console.log(categorys)}
            <section className='product-container mx-auto'>
                <div className='container'>
                    <div className='row'>
                        <ul className="nav nav-pills mt-3 mb-3 ms-3" id="pills-tab" role="tablist">
                            {/* <li className="nav-item" role="presentation" >

                                <button className={`nav-link   ${toggle === 'organic' && ' active'} `} onClick={() => setToggle("organic")} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Organic Fruit</button>
                            </li> */}
                            {
                                categorys && categorys.map((category) => {
                                    return (
                                        <li className="nav-item" role="presentation">
                                            <button className={`nav-link   ${toggle === category.name && ' active'} `} id="pills-profile-tab" onClick={() => {setToggle(category.name) ; fetchProductsData(category._id)}} data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">{category.name}</button>
                                        </li>
                                    )
                                })
                            }
                            {/* <li className="nav-item" role="presentation">
                                <button className={`nav-link   ${toggle === 'agriculture' && ' active'} `} id="pills-profile-tab" onClick={() => setToggle("agriculture")} data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Agricultural Machinery</button>
                            </li> */}
                        </ul>
                        <div className="tab-content" id="pills-tabContent" style={{ paddingBottom: "5rem" }}>
                            <div className={`tab-pane fade show active`} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                                {
                                    products && products.map((product) => {
                                        return (
                                            <div className=" cursor-pointer card  mb-3 " onClick={() => navigate(`/productdetails/${product._id}`)} style={{ cursor: "pointer" }} key={product.id}>
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product