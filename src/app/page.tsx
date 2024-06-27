import Navbar from "../component/Navbar/navbar";
import LatestTrailer from "@/component/LatestTrailer/latestTrailer";
import { getPopularMovies } from "@/utils/movieSetting";

export default async function Home() {
  const moviesList = await getPopularMovies();
  return (
    <>
      <Navbar />
      <LatestTrailer movies={moviesList} />
    </>
  );
}
