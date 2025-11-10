"use client";
import React, { useState, useEffect } from "react";
import "@/componentStyle/Banner.css";
import dynamic from "next/dynamic";

const FlyImages = dynamic(() => import("./FlyImages"), { ssr: false });
const Canvas = dynamic(() => import("@react-three/fiber").then(mod => mod.Canvas), { ssr: false });
const text = "Think Art Press. international art journal aims to discover hidden artistry from around the globe.";
const whiteWords = ["Think", "Art", "Press."]; // words jo whit
const Banner = () => {
  const [showFlying, setShowFlying] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    let confetti;
    import("canvas-confetti").then((module) => {
      confetti = module.default;

      const fireConfetti = () => {
        confetti({ particleCount: 150, spread: 120, origin: { y: 0.6 }, shapes: ["star", "circle"], colors: ["#fadb14"] });
        setTimeout(() => {
          confetti({ particleCount: 100, spread: 90, origin: { y: 0.6 }, shapes: ["star", "circle"], colors: ["#fadb14"] });
        }, 200);
        setTimeout(() => {
          confetti({ particleCount: 80, spread: 150, origin: { y: 0.6 }, shapes: ["star", "circle"], colors: ["#fadb14"] });
        }, 400);
      };

      const timer = setTimeout(() => {
        setShowFlying(false);
        setShowSuccess(true);
        fireConfetti();
        setTimeout(() => {
          document.body.style.overflow = "auto";
        }, 1200);
      }, 6000);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "auto";
      };
    });
  }, []);

  return (
    <div className="bannerWrapper">
      {showFlying && (
        <div className="video-background">
          <video autoPlay muted loop>
            <source src="/assets/viedo/viedo-banner-cutom.mp4" type="video/mp4" /> 
          </video>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
          >
            <Canvas style={{ width: "100%", height: "100%" }}>
              <FlyImages />
            </Canvas>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="successContainerOverlay">
          <div className="row m-0 pt-4 align-items-center flex-column-reverse flex-sm-row ">
            <div className="col-lg-7 col-md-7 col-sm-6 col-12">
              <h2 className="pt-50 pt-5 px-2 ps-md-5 text-white custom-font-size-big">
                {text.split(" ").map((word, wordIndex) => (
                  <span key={wordIndex} className="word">
                    {word.split("").map((char, charIndex) => (
                      <span
                        key={charIndex}
                        className={`letter ${whiteWords.includes(word) ? "white-letter" : "default-letter"}`}
                        style={{ animationDelay: `${wordIndex * 0.3 + charIndex * 0.03}s` }}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                ))}
              </h2>

              <p className="ps-md-5 text-white mt-md-5 mt-2 px-2 fs-5">Immerse yourself in a world where undiscovered talents shine. Explore unique art styles and stories from artists you haven’t met yet.</p>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-6 col-12 text-md-end mt-3">
              <img src="/assets/img/blub.avif" alt="Success" className="successBlub" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
