import { getMoviesDetails, getSimilarMovies } from "@/utils/movieSetting";

export default async function MovieDetailPage({ params, poster_path }: any) {
  const IMAGE_BASE_URL =
    "https://media.themoviedb.org/t/p/w300_and_h450_bestv2";
  const DEFAULT_IMAGE_PATH = "/path/to/default/movie-poster.jpg";

  const movieDetails = await getMoviesDetails(params.id);
  const similarMovies = await getSimilarMovies(params.id);

  const imageUrl = poster_path
    ? `${IMAGE_BASE_URL}${poster_path}`
    : DEFAULT_IMAGE_PATH;

  return (
    <>
      <div className="my-4 mx-3"></div>
    </>
  );
}
