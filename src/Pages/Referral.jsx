import React, { useEffect, useState } from 'react'
import { getReferralLink } from '../service'
import { toast } from 'react-toastify';
import QRCode from "qrcode";

const Referral = () => {
    const phone = localStorage.getItem('phone')
    const [link, setLink] = useState();
    useEffect(()=>{
        fetchReferral()
    },[])


    const fetchReferral = () => {
        getReferralLink(phone).then((res) => {
            console.log(res);
            setLink(res.data.results.link)
            QRCode.toCanvas(document.getElementById('canvas'),
            res.data.results.link, { toSJISFunc: QRCode.toSJIS }, function (error) {
                if (error) console.error(error)
            })
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <div style={{ marginTop: "150px" }}>
            <section className='me-container mx-auto'>
                <div className='container'>
                    <div className='row justify-content-center bg-dark'>
                        <h5 className='text-center text-light mt-3'>My invitation code</h5>
                        <div className='col-lg-8 mt-4 align-items-center'>

                            <div className='text-center'>
                                <canvas id="canvas"></canvas>
                                <button className='custom-btn-logOut my-5 text-center w-100 ' onClick={() => { navigator.clipboard.writeText(link); toast.success("copied") }} >Copy code</button>
                            </div>
                       
                           
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Referral