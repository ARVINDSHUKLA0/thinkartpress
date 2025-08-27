"use client";
import React, { useState, useEffect } from "react";
import "@/componentStyle/Banner.css";
import DataImg from "@/Data/DataImg";

const Banner = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [zoomBanner, setZoomBanner] = useState(false);

  useEffect(() => {
    const lastIndex = DataImg.length - 1;
    const lastDelay = lastIndex * 0.2;
    const fadeDuration = 1.2;
    const totalAnimation = (lastDelay + fadeDuration) * 1000;
    const maxDelay = 1000;

    const timer = setTimeout(() => setZoomBanner(true), Math.min(totalAnimation, maxDelay));
    return () => clearTimeout(timer);
  }, []);

  const handleZoomEnd = () => {
    setShowSuccess(true);
  };

  return (
    <> 
        <div className="bannerWrapper">
          {!showSuccess && (
            <div
              className={`bannerContainer container ${zoomBanner ? "zoomToCenter" : ""}`}
              onAnimationEnd={zoomBanner ? handleZoomEnd : null}
            >
              <div className="row m-0 justify-content-center">
                {DataImg.map((item, index) => (
                  <div
                    key={item.id}
                    className="col-lg-3 col-md-3 col-sm-4 col-6 bannerBox mb-3"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="imges-height-banner">
                      <img src={item.imges} alt={item.alt} className="img-fluid" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
 
          {showSuccess && (
            <div className="successContainerOverlay">
              <img src="/assets/blub.png" alt="Success" className="successBlub" />
            </div>
          )}
        </div> 
    </>
  );
};

export default Banner;
