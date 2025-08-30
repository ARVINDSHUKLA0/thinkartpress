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

  const openGallery = (products) => {
    const images = products.map((p) => ({
      original: p.img,
      thumbnail: p.img,
    }));
    setGalleryItems(images);
    setShowGallery(true);
  };

  const closeGallery = () => setShowGallery(false);

  return (
    <div>
      <Navbar />
      <Banner />

      <div className="row m-0 py-50">
        {ImgGallery.map((cat) => (
          <div
            key={cat.id}
            className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 px-2"
          > 
          <div className={`d-flex ${styles.contentWrap}`}>
            <h6 className={styles.textContent}> 
              {cat.title}
            </h6>
            <p className={styles.customCircal}>
    
            </p>
            </div> 
            <div className={styles.categoryItem}>
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
