import Navbar from "../component/Navbar/navbar";
import HeroSection from "@/component/HeroSection/heroSection";
import LatestTrailer from "@/component/LatestTrailer/latestTrailer";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <LatestTrailer />
    </>
  );
}
