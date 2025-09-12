"use client";
import Navbar from '@/component/Navbar'
import "@/app/Competition/Competition.css"
import { useState } from "react";
import ImgGallery from "@/Data/ImgGallery";
import CountUp from "react-countup";
import React from 'react'

const Page = () => {
    const [expanded, setExpanded] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);


    const toggleExpand = (id) => {
        setExpanded(expanded === id ? null : id);
    };

    const openImage = (img) => {
        setSelectedImage(img);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <Navbar />
            <div className='pt-50 pb-lg-4 pb-2 dark-bg'>
                <div className="container-fluid pt-4">

                    <div className="row m-0">
                        <div className="col-lg-5 col-md-6 col-sm-12 col-12">
                            <h4 className='text-white custom-font-size-big ps-lg-5'>Now be a part of an,  international art journal “
                                Simply participate in an international competition, get a chance to showcase  your talent here
                            </h4>
                            <p className='text-white fs-15 pt-2 ps-lg-5'> Rules : Whatever you have made simply take a <br /> photo of it and mail it to <br />thinkartpress@gmail.com</p>
                        </div>
                        <div className="col-lg-6  offset-lg-1 col-md-6 col-sm-12 col-12">
                            <div className='competion-imges'>
                                <img className='img-fluid' src="/assets/img/Competition.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row m-0 pt-lg-4 pt-2">
                {ImgGallery.map((cat) => (
                    <div
                        key={cat.id}
                        className="col-lg-3 col-md-4 col-sm-6 col-12 px-1"
                    >
                        <div className={`categoryItem rounded-4`} style={{ position: "relative" }}>
                            <div className={`d-flex contentWrap`}>
                                <h6 className="textContent">
                                    {cat.title}
                                </h6>
                                <p
                                    onClick={() => toggleExpand(cat.id)}
                                    className={`customCircal text-dark text-center px-2 pb-1 bg-white m-0`}
                                >
                                    {expanded === cat.id ? "-" : "+"}
                                </p>
                            </div>

                            {expanded === cat.id && (
                                <div className="expandTop">
                                    <p>
                                        {cat.description ||
                                            "Our Art Club proudly presents global Artists of the Month, featured in the International Web Art Journal for their unique brilliance."}
                                    </p>
                                </div>
                            )}
                            <img
                                src={cat.thumbnail}
                                alt={`Category ${cat.id}`}
                                onClick={() => openImage(cat.thumbnail)}
                                style={{ cursor: "pointer" }}
                            />

                            <div className="iconDisplay">
                                <i className="fa-solid fa-circle-plus fs-2"></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div className="galleryModal" onClick={closeImage}>
                    <div className="galleryContent">
                        <img className='img-fluid' src={selectedImage} alt="Selected" />
                    </div>
                    <button className="galleryClose" onClick={closeImage}>
                        &times;
                    </button>
                </div>
            )}

            <div className='py-md-5 py-3 dark-bg'>
                <div className="row m-0 text-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 px-2">
                        <h2 className='text-white'>
                            <CountUp start={1} end={500} duration={6} />
                        </h2>
                        <h3 className='text-white'>Already 500+ international participants have enrolled where are you ?</h3>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 px-3">
                        <h2 className='text-white'>
                            <CountUp start={1} end={1000} duration={6} />
                        </h2>
                        <h3 className='text-white'>Already 1000+ national participants have enrolled where are you ?</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page;
