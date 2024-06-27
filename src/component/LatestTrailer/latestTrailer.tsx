"use client";

import Image from "next/image";
import { Movie } from "@/model/movieCard";
import { useRef } from "react";

interface trandingMoviesProps {
  movies: Movie[];
}

export default function TrandingMovies({ movies }: trandingMoviesProps) {
  const IMAGE_BASE_URL =
    "https://media.themoviedb.org/t/p/w300_and_h450_bestv2";
  const DEFAULT_IMAGE_PATH = "/path/to/default/movie-poster.jpg";
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section className="bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold tracking-tight text-white mb-6">
            Tranding Movies
          </h2>
          <div className="relative">
            <button
              onClick={() => handleScroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 z-10 rounded-r-md"
              aria-label="Scroll left"
            >
              &lt;
            </button>
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4"
            >
              {movies.map((movie) => (
                <div key={movie.id} className="flex-none w-48">
                  <div className="h-72 overflow-hidden rounded-md bg-gray-200 relative">
                    <Image
                      src={
                        movie.poster_path
                          ? `${IMAGE_BASE_URL}${movie.poster_path}`
                          : DEFAULT_IMAGE_PATH
                      }
                      alt={movie.name || "Movie poster"}
                      width={300}
                      height={450}
                      className="object-cover object-center transition duration-300 hover:scale-105"
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${btoa(
                        '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="450"><rect width="100%" height="100%" fill="#cccccc"/></svg>'
                      )}`}
                    />
                    {movie.vote_average && (
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-yellow px-2 py-1 rounded-md text-sm">
                        ★ {movie.vote_average.toFixed(1)}
                      </div>
                    )}
                  </div>
                  <p className="mt-2 text-center text-white font-bold break-words">
                    {movie.name}
                  </p>
                </div>
              ))}
            </div>
            <button
              onClick={() => handleScroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 z-10 rounded-l-md"
              aria-label="Scroll right"
            >
              &gt;
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
