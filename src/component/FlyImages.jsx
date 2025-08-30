"use client";
import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import DataImg from "../Data/DataImg";

export default function FlyImages() {
  const [images, setImages] = useState([]);
  const meshRefs = useRef([]);
  const loader = new THREE.TextureLoader();

  useEffect(() => {
    let isMounted = true;

    const loadImages = async () => {
      for (let i = 0; i < DataImg.length; i++) {
        try {
          const texture = await loader.loadAsync(DataImg[i].imges);
          if (!isMounted) return;

          setImages((prev) => [
            ...prev,
            {
              texture,
              x: (Math.random() - 0.5) * 40,
              y: (Math.random() - 0.5) * 40,
              z: -Math.random() * 200,
              scale: 0.5 + Math.random() * 0.4,
              speed: 0.8 + Math.random() * 0.8,
            },
          ]);
        } catch (err) {
          console.error("Error loading texture:", err);
        }
      }
    };

    loadImages();
    return () => {
      isMounted = false;
    };
  }, []);

  useFrame((state, delta) => {
    meshRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      images[i].z += images[i].speed * delta * 60;
      if (images[i].z > 50) images[i].z = -120;
      mesh.position.set(images[i].x, images[i].y, images[i].z);
    });
  });

  if (images.length === 0) {
    return <></>;  
  }

  return (
    <>
      {images.map((img, i) => (
        <mesh
          key={i}
          ref={(el) => (meshRefs.current[i] = el)}
          scale={[img.scale, img.scale, img.scale]}
        >
          <planeGeometry args={[5, 5]} />
          <meshBasicMaterial
            transparent
            opacity={0.9}
            map={img.texture}
            toneMapped={false}
          />
        </mesh>
      ))}
    </>
  );
}

