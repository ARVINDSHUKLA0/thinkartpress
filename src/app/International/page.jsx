import React from 'react'
import '@/app/International/International.css'
import Navbar from '@/component/Navbar'
import Footer from '@/component/Footer'

const page = () => {
    const YouTubeLink = [
        { id: "1", link: "https://www.youtube.com/embed/34nild1K_wE" },
        { id: "2", link: "https://www.youtube.com/embed/rz7Wn4kBosU" },
        { id: "3", link: "https://www.youtube.com/embed/vnD1tcCieyI" },
        { id: "4", link: "https://www.youtube.com/embed/ueWLYrDqvCU" }
    ]
    return (
        <>
            <Navbar />
            <div className='pt-50'>
                <div className="row m-0 pt-5 pb-sm-2">
                    {
                        YouTubeLink.map((linkViedo, index) => (
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-md-3 mb-2 px-1 px-md-2" key={index}>
                                <div className="w-full max-w-2xl mx-auto youtube-height-width">
                                    <iframe
                                        className="w-full w-100 h-100 rounded-4 aspect-video rounded-lg shadow-lg"
                                        src={linkViedo.link}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default page