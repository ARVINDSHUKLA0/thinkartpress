// "use client";
// import React, { useState, useEffect } from "react";
// import "@/componentStyle/Banner.css";
// import dynamic from "next/dynamic";

// const FlyImages = dynamic(() => import("./FlyImages"), { ssr: false });
// const Canvas = dynamic(() => import("@react-three/fiber").then(mod => mod.Canvas), { ssr: false });

// const Banner = () => {
//   const [showFlying, setShowFlying] = useState(true);
//   const [showSuccess, setShowSuccess] = useState(false);

//   useEffect(() => { 
//     let confetti;
//     import("canvas-confetti").then((module) => {
//       confetti = module.default;

//       const fireConfetti = () => { 
//         confetti({ particleCount: 150, spread: 120, origin: { y: 0.6 }, shapes: ["star","circle"], colors:["#fadb14"] });
//         setTimeout(() => {
//           confetti({ particleCount: 100, spread: 90, origin: { y: 0.6 }, shapes:["star","circle"], colors:["#fadb14"] });
//         }, 200);
//         setTimeout(() => {
//           confetti({ particleCount: 80, spread: 150, origin: { y: 0.6 }, shapes:["star","circle"], colors:["#fadb14"] });
//         }, 400);
//       };

//       const timer = setTimeout(() => {
//         setShowFlying(false);
//         setShowSuccess(true);
//         fireConfetti();
//       }, 6000);

//       return () => clearTimeout(timer);
//     });
//   }, []);

//   return (
//     <div className="bannerWrapper">
//       {showFlying && (
//         <div className="video-background">
//           <video autoPlay muted loop>
//             <source src="/assets/viedo/banner-viedo.mp4" type="video/mp4" />
//           </video>
//           <div
//             style={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               pointerEvents: "none",
//             }}
//           >
//             <Canvas style={{ width: "100%", height: "100%" }}>
//               <FlyImages />
//             </Canvas>
//           </div>
//         </div>
//       )}

//       {showSuccess && (
//         <div className="successContainerOverlay">
//           <img src="/assets/img/blub.avif" alt="Success" className="successBlub" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Banner;







 

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
    // Always start from top on page load
    window.scrollTo(0, 0);

    // Disable scrolling while video is playing
    document.body.style.overflow = "hidden";

    let confetti;
    import("canvas-confetti").then((module) => {
      confetti = module.default;

      const fireConfetti = () => { 
        confetti({ particleCount: 150, spread: 120, origin: { y: 0.6 }, shapes: ["star","circle"], colors:["#fadb14"] });
        setTimeout(() => {
          confetti({ particleCount: 100, spread: 90, origin: { y: 0.6 }, shapes:["star","circle"], colors:["#fadb14"] });
        }, 200);
        setTimeout(() => {
          confetti({ particleCount: 80, spread: 150, origin: { y: 0.6 }, shapes:["star","circle"], colors:["#fadb14"] });
        }, 400);
      };

      const timer = setTimeout(() => {
        setShowFlying(false);
        setShowSuccess(true);
        fireConfetti();

        // Re-enable scrolling after confetti animation
        setTimeout(() => {
          document.body.style.overflow = "auto";
        }, 1200); // match confetti animation
      }, 6000);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "auto"; // cleanup in case component unmounts
      };
    });
  }, []);

  return (
    <div className="bannerWrapper">
      {showFlying && (
        <div className="video-background">
          <video autoPlay muted loop>
            <source src="/assets/viedo/banner-viedo.mp4" type="video/mp4" />
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
          <img src="/assets/img/blub.avif" alt="Success" className="successBlub" />
        </div>
      )}
    </div>
  );
};

export default Banner;
