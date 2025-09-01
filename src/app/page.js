"use client";
import { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ImgGallery from "@/Data/ImgGallery";
import Navbar from "@/component/Navbar";
import Banner from "@/component/Banner";
import styles from '@/app/page.module.css';

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
      <div className="row m-0 py-lg-5 py-md-4 py-3">
        {ImgGallery.map((cat) => (
          <div
            key={cat.id}
            className="col-lg-3 col-md-4 col-sm-6 col-12 mb-md-4 mb-2 px-1"
          > 
            <div className={styles.categoryItem} style={{ position: "relative" }}>
              <div className={`d-flex ${styles.contentWrap}`}>
                <h6 className={styles.textContent}>
                  {cat.title}
                </h6>
                <p
                  onClick={() => toggleExpand(cat.id)}
                  className={`${styles.customCircal} text-dark text-center px-2 pb-1 bg-white m-0`}
                >
                  {expanded === cat.id ? "−" : "+"}
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
    </div>
  );
}
