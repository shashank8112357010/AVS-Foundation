import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import   {useParams } from 'react-router-dom'
import { getProductsById } from '../service';

const Details = () => {
    const {id} = useParams();
const [product , setProduct] = useState()

    const fetchProduct = (id)=>{
        getProductsById(id).then((res)=>{
            console.log();
            setProduct(res.data.results[0])
        }).catch((err)=>{
            console.log(err);
        })
    }



    useEffect(()=>{
        fetchProduct(id)
    },[id])




  return (
    <section className='product-container mx-auto'>
        <div className='card'>
            <div className='card-body p-0 border-0 h-50 text-center'>
              <img src={product?.image} width={"600px"}/>
            </div>
          
        </div>
        <main className='mt-5 border-0'>
                <div className='   h-50 text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi error temporibus, et ullam maxime vero incidunt odit consectetur repellendus iusto. Harum facere enim facilis nulla ipsa sed inventore? Blanditiis eos quos ullam in nesciunt dolor magni, exercitationem iusto dolorem. Velit minus provident, quasi iusto dolorum et quibusdam praesentium molestias doloremque maxime impedit quia explicabo earum, facere neque ad minima? Magni cum neque voluptatem eius, laboriosam similique labore incidunt expedita vero facere sint libero magnam ex aut atque necessitatibus quisquam. Ut ex repudiandae dolore nihil? Culpa, dolorum. Accusantium distinctio, velit debitis tempore id expedita sequi optio aliquam, nesciunt magni perspiciatis ea?
                </div>
            </main>

       .</section>
  )
}

export default Details