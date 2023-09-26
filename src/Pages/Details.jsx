import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom'
import { getProductsById } from '../service';

const Details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState()

    const fetchProduct = (id) => {
        getProductsById(id).then((res) => {
            console.log();
            setProduct(res.data.results[0])
        }).catch((err) => {
            console.log(err);
        })
    }



    useEffect(() => {
        fetchProduct(id)
    }, [id])




    return (
        <>
            <section className='product-container mx-auto'>
                <div className='card'>
                    <div className='card-body p-0 border-0 h-50 text-center'>
                        <img src={product?.image} width={"600px"} />
                    </div>

                </div>
                <main className='mt-5 border-0'>
                    <div className='h-50'>
                        <h2 className='ms-4'>
                            Mango
                        </h2>
                        <div className='mt-4'>
                            <ul className='d-flex justify-content-between'>
                                <li>Daily Income</li>
                                <li>Rs 38.5</li>
                            </ul>
                            <ul className='d-flex justify-content-between'>
                                <li>Validity Income</li>
                                <li>25 Days</li>
                            </ul>
                            <ul className='d-flex justify-content-between'>
                                <li>Total revenue</li>
                                <li>Rs 962.5</li>
                            </ul>
                            <ul className='d-flex justify-content-between'>
                                <li>Limited</li>
                                <li>1 times / 1 person</li>
                            </ul>
                        </div>
                        <h4 className='ms-4 mt-5'>Choose a Wallet</h4>
                        <div className='mt-3 d-flex justify-content-center align-items-center'>
                            <a href="#" className='custom-wallet-btn mx-5'>Recharge</a>
                            <a href="#" className='custom-wallet-btn'>Balance</a>
                        </div>
                        <h4 className='ms-4 mt-5'>Coupon</h4>
                        <div className='ms-4 mt-3'>
                            <select className='pe-5 ps-1 pt-2 pb-2'>
                                <option>select Coupon</option>
                                <option>select Coupon</option>
                            </select>
                        </div>
                        <h3 className='mt-5 ms-4'>
                            Details
                        </h3>
                        <h4 className='mt-3 ms-4'>Product description :</h4>
                        <p className='ms-4'>
                            Bootstrap 5 is evolving with each release to better utilize CSS variables for global theme styles, individual components, and even utilities. We provide dozens of variables for colors, font styles, and more at a :root level for use anywhere. On components and utilities, CSS variables are scoped to the relevant class and can easily be modified.
                        </p>
                        <div className='mt-5'>
                            <ul className='d-flex justify-content-between'>
                                <li className='fs-4'>Rs 570</li>
                                <li><a className='custom-btn' href="#">Buy</a></li>
                            </ul>
                        </div>
                    </div>
                </main>

            </section>
        </>
    )
}

export default Details