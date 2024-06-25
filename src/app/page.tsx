import styles from "./page.module.css";
import Navbar from "../component/Navbar/navbar";
import LatestTrailer from "@/component/LatestTrailer/lateTrailer";

export default function Home() {
  return (
    <>
      <Navbar />
      <LatestTrailer />
    </>
  );
}
