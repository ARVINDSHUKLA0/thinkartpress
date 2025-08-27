import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/component/Navbar"; 
import Banner from "@/component/Banner";

export default function Home() {
  return (
    <div className={styles.page}>
        <Navbar/>
        <Banner/>  
     </div>
  );
}
