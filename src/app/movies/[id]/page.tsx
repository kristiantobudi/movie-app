import { getMoviesDetails, getSimilarMovies } from "@/utils/movieSetting";
import Image from "next/image";

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface MovieDetails {
  backdrop_path?: string;
  title: string;
  release_date?: string;
  original_language?: string;
  status?: string;
  genres?: Genre[];
  overview?: string;
}

interface PageParams {
  id: string;
}

export default async function MovieDetailsPage({
  params,
}: {
  params: PageParams;
}) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  let movieDetails: MovieDetails | null = null;
  let similarMovies: Movie[] = [];

  try {
    movieDetails = await getMoviesDetails(params.id);
    similarMovies = await getSimilarMovies(params.id);
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }

  if (!movieDetails) {
    return <div>Movie not found</div>;
  }

  return (
    <>
      <div className="my-4 mx-3">
        <div className="d-flex align-items-center">
          <div className="col-3">
            {movieDetails.backdrop_path && (
              <Image
                src={IMAGE_BASE_URL + movieDetails.backdrop_path}
                alt={movieDetails.title}
                width={500}
                height={300}
              />
            )}
          </div>
          <div className="mx-5">
            <h3>{movieDetails.title}</h3>
            <div className="d-flex">
              {movieDetails.release_date && (
                <p className="py-1 px-2 bg-warning text-white me-2 rounded">
                  {movieDetails.release_date}
                </p>
              )}
              {movieDetails.original_language && (
                <p className="py-1 px-2 bg-warning text-white me-2 rounded">
                  {movieDetails.original_language}
                </p>
              )}
              {movieDetails.status && (
                <p className="py-1 px-2 bg-warning text-white me-2 rounded">
                  {movieDetails.status}
                </p>
              )}
            </div>
            {movieDetails.genres && movieDetails.genres.length > 0 && (
              <div>
                <p>
                  {movieDetails.genres.map((genre: Genre) => (
                    <span
                      className="mx-1 p-1 bg-dark text-white me-2 rounded"
                      key={genre.id}
                    >
                      {genre.name}
                    </span>
                  ))}
                </p>
              </div>
            )}
            {movieDetails.overview && <p>{movieDetails.overview}</p>}
          </div>
        </div>
        {similarMovies && similarMovies.length > 0 && (
          <div className="my-3">
            <h2>Similar Movies</h2>
            <div className="d-flex flex-wrap gap-3">
              {similarMovies.map((movie: Movie) => (
                <div key={movie.id}>
                  {movie.poster_path && (
                    <Image
                      src={IMAGE_BASE_URL + movie.poster_path}
                      alt={movie.title}
                      width={200}
                      height={300}
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
