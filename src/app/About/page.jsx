import React from 'react'
import '@/app/About/about.css'
import Navbar from '@/component/Navbar'

const Page = () => {
    return (
        <>
            <Navbar />
            <div className='mt-100'>
                <div className="row m-0 pt-3">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <img className='img-fluid' src="/assets/img/about-sam.avif" height={300} width={300} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <p>arvind shukla</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page