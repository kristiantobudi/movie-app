import { Movie } from "@/model/movieCard";
import MovieCard from "./MovieCard/movieCard";

type MovieProps = Movie;
interface MovieListProps {
  movies?: MovieProps[];
  limit?: number;
}

export default function MovieList({ movies, limit = 4 }: MovieListProps) {
  const limitedMovies = movies?.slice(0, limit);

  return (
    <>
      <div className="mt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight text-white mb-6">
            Tranding Movie
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {limitedMovies?.map((movie) => (
              <MovieCard
                key={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
