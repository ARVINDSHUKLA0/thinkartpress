import React from 'react'
import '@/app/International/International.css'
import Navbar from '@/component/Navbar'
import Footer from '@/component/Footer'

const page = () => {
    const YouTubeLink = [
        { id: "1", link: "https://www.youtube.com/embed/34nild1K_wE" },
        { id: "2", link: "https://www.youtube.com/embed/rz7Wn4kBosU" },
        { id: "3", link: "https://www.youtube.com/embed/vnD1tcCieyI" },
        { id: "4", link: "https://www.youtube.com/embed/ueWLYrDqvCU" },
        { id: "5", link: "https://www.youtube.com/embed/nlyPAVAGkiM" },
        { id: "6", link: "https://www.youtube.com/embed/DG7CbvLZUWo" },
        { id: "8", link: "https://www.youtube.com/embed/gKGfGnoksm4" },
        { id: "9", link: "https://www.youtube.com/embed/GDLh5C2siZ8" },
        { id: "10", link: "https://www.youtube.com/embed/lgwU8neSv10" },
        { id: "11", link: "https://www.youtube.com/embed/TPLADIPuONM" },
        { id: "12", link: "https://www.youtube.com/embed/KSP3Mj23WdQ" }
    ]
    return (
        <>
            <Navbar />

            <div className='pt-50'>
                <div>
                  <h2 className='pt-5 pb-lg-4 pb-3 fs-1 text-uppercase text-center fw-bold'>  International associates</h2>
                </div>
                <div className="row m-0  pb-sm-2">
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
            {/* <Footer /> */}
        </>
    )
}

export default page