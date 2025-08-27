"use client";
import { useRef, useState, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import DataImg from "../Data/DataImg";

export default function FlyImages() {
  const [images, setImages] = useState([]);
  const textures = useLoader(
    THREE.TextureLoader,
    DataImg.map(img => img.imges)
  );

  const meshRefs = useRef([]);

  useEffect(() => {
    if (!textures || textures.length === 0) return;

    // Immediately show first 3 images
    const initialImages = textures.slice(0, 3).map(tex => ({
      texture: tex,
      x: (Math.random() - 0.5) * 40,
      y: (Math.random() - 0.5) * 40,
      z: -Math.random() * 200,
      scale: 0.5 + Math.random() * 0.5,
      speed: 0.8 + Math.random() * 0.8
    }));
    setImages(initialImages);

    // Gradually add rest
    let currentIndex = 3;
    const interval = setInterval(() => {
      if (currentIndex >= textures.length) {
        clearInterval(interval);
        return;
      }
      setImages(prev => [
        ...prev,
        {
          texture: textures[currentIndex],
          x: (Math.random() - 0.5) * 40,
          y: (Math.random() - 0.5) * 40,
          z: -Math.random() * 200,
          scale: 0.5 + Math.random() * 0.5,
          speed: 0.5 + Math.random() * 0.5
        }
      ]);
      currentIndex++;
    }, 50);  
  }, [textures]);

  useFrame((state, delta) => {
    meshRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      images[i].z += images[i].speed * delta * 60;
      if (images[i].z > 50) images[i].z = -200;
      mesh.position.set(images[i].x, images[i].y, images[i].z);
    });
  });

  if (images.length === 0) return null;

  return (
    <>
      {images.map((img, i) => (
        <mesh
          key={i}
          ref={el => (meshRefs.current[i] = el)}
          scale={[img.scale, img.scale, img.scale]}
        >
          <planeGeometry args={[5, 5]} />
          <meshBasicMaterial  transparent
            opacity={0.9} map={img.texture} toneMapped={false} />
        </mesh>
      ))}
    </>
  );
}
