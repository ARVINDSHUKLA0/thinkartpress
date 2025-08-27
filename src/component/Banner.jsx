"use client";
import React, { useState, useEffect } from "react";
import "@/componentStyle/Banner.css";
import dynamic from "next/dynamic";

const FlyImages = dynamic(() => import("./FlyImages"), { ssr: false });
const Canvas = dynamic(() => import("@react-three/fiber").then(mod => mod.Canvas), { ssr: false });

const Banner = () => {
  const [showFlying, setShowFlying] = useState(true); 
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => { 
    const timer = setTimeout(() => {
      setShowFlying(false);
      setShowSuccess(true);
    }, 10000); // 10 sec flying
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bannerWrapper">
      {showFlying && (
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
      )}

      {showSuccess && (
        <div className="successContainerOverlay">
          <img src="/assets/blub.png" alt="Success" className="successBlub" />
        </div>
      )}
    </div>
  );
};

export default Banner;
