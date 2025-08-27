"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/component/Navbar";
import Banner from "@/component/Banner";
// import { Canvas } from "@react-three/fiber";
// import FlyImages from "@/component/FlyImages";
export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Banner />
      {/* <Canvas camera={{ fov: 75, position: [0, 0, 50] }}>
        <FlyImages />
      </Canvas> */}
    </div>
  );
}
