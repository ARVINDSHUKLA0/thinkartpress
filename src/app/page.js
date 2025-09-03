"use client";
import { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ImgGallery from "@/Data/ImgGallery";
import Navbar from "@/component/Navbar";
import Banner from "@/component/Banner";
import styles from '@/app/page.module.css';
import Footer from "@/component/Footer";

export default function Home() {
  const [showGallery, setShowGallery] = useState(false);
  const [galleryItems, setGalleryItems] = useState([]);
  const [expanded, setExpanded] = useState(null);

  const openGallery = (products) => {
    const images = products.map((p) => ({
      original: p.img,
      thumbnail: p.img,
    }));
    setGalleryItems(images);
    setShowGallery(true);
  };

  const closeGallery = () => setShowGallery(false);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div>
      <Navbar />
      <Banner />
      <div className="row m-0 pt-4 ">
        {ImgGallery.map((cat) => (
          <div
            key={cat.id}
            className="col-lg-3 col-md-4 col-sm-6 col-12 px-1"
          >
            <div className={`${styles.categoryItem} rounded-4`} style={{ position: "relative" }}>
              <div className={`d-flex ${styles.contentWrap}`}>
                <h6 className={styles.textContent}>
                  {cat.title}
                </h6>
                <p
                  onClick={() => toggleExpand(cat.id)}
                  className={`${styles.customCircal} text-dark text-center px-2 pb-1 bg-white m-0`}
                >
                  {expanded === cat.id ? "-" : "+"}
                </p>
              </div>
              {expanded === cat.id && (
                <div className={styles.expandTop}>
                  <p>
                    {cat.description ||
                      "Our Art Club proudly presents global Artists of the Month, featured in the International Web Art Journal for their unique brilliance."}
                  </p>
                </div>
              )}
              <img
                src={cat.thumbnail}
                alt={`Category ${cat.id}`}
                onClick={() => openGallery(cat.products)}
              />
              <div className={`${styles.iconDisplay}`} >
                 <i className="fa-solid fa-circle-plus fs-2 "></i>
              </div>


            </div>
          </div>
        ))}
      </div>

      {showGallery && (
        <div className={styles.galleryModal}>
          <div className={styles.galleryContent}>
            <ImageGallery items={galleryItems} showThumbnails={true} />
          </div>
          <button className={styles.galleryClose} onClick={closeGallery}>
            &times;
          </button>
        </div>
      )}
      <div className="container pt-md-3 pb-md-5 py-2">
        <div className="row justify-content-center align-items-stretch g-4">

          <div className="col-md-4 d-flex my-md-4 py-2 pt-3">
            <div className="card text-center border-0 shadow rounded-4 flex-fill">
              <div className="fw-bold rounded-top-4 py-3" style={{ backgroundColor: "#d3d3d3b9" }}>
                TRENDING PLAN
              </div>
              <div className="card-body d-flex flex-column">
                <div>
                  <img
                    src="/assets/img/blidsvg.svg"
                    alt="Solo Walks"
                    style={{ height: "50px" }}
                  />
                </div>
                <h4 className="fw-bold mb-2">Craft competition</h4>

                <p className="m-0 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                <h5 className="w-bold mb-2">Event Info</h5>
                <p className="px-3 p-0">Your content goes here. Edit or remove this text inline or in the module Content settings.</p>
                <button className="btn btn-outline-dark rounded-pill fw-bold px-4 mt-auto mb-2">
                  BOOK NOW!
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="card text-center border-0 shadow-sm rounded-4 flex-fill">
              <div className="bg-dark text-white fw-bold rounded-top-4 py-3">
                POPULAR PLAN
              </div>
              <div className="card-body d-flex flex-column">
                <div className="mb-3">
                  <img
                    src="/assets/img/one.svg"
                    alt="Group Walks"
                    style={{ height: "60px" }}
                  />
                </div>
                <h4 className="fw-bold mb-2">Parent Teach Conferences</h4>
                <p className="m-0 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <h5>Event Info</h5>
                <p className="px-3">Your content goes here. Edit or remove this text inline or in the module Content settings. </p>
                <button className="btn btn-dark rounded-pill fw-bold px-4 mt-auto">
                  BOOK NOW !
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex my-md-4 py-2 pt-3">
            <div className="card text-center border-0 shadow-sm rounded-4 flex-fill">
              <div className="fw-bold rounded-top-4 py-3" style={{ backgroundColor: "#d3d3d3b9" }}>
                PREMIUM PLAN
              </div>
              <div className="card-body d-flex flex-column">
                <div>
                  <img
                    src="/assets/img/blidsvg.svg"
                    alt="Solo Walks"
                    style={{ height: "50px" }}
                  />
                </div>
                <h4 className="fw-bold mb-2">Craft competition</h4>

                <p className="m-0 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                <h5 className="w-bold mb-2">Event Info</h5>
                <p className="px-3 p-0">Your content goes here. Edit or remove this text inline or in the module Content settings. </p>
                <button className="btn btn-outline-dark rounded-pill fw-bold px-4 mt-auto mb-2">
                  BOOK NOW!
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
