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
    <div className="mt-10">
      <div className="mx-auto px-4 py-8 sm:px-10 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Tranding Movie
        </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
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
  );
}
