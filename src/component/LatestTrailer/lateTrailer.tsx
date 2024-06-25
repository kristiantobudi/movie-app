import Image from "next/image";
import { Movie } from "@/model/movieCard";

type MovieProps = Movie;

export default function LatestTrailer({ poster_path, title }: MovieProps) {
  const IMAGE_BASE_URL =
    "https://media.themoviedb.org/t/p/w300_and_h450_bestv2";
  const DEFAULT_IMAGE_PATH = "/path/to/default/movie-poster.jpg";

  const imageUrl = poster_path
    ? `${IMAGE_BASE_URL}${poster_path}`
    : DEFAULT_IMAGE_PATH;

  return (
    <>
      <div className="h-96 w-full bg-cover bg-no-repeat bg-center bg-fixed">
        <div className="w-full h-full bg-maroon bg-opacity-50">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="min-h-72 aspect-h-1 aspect-w-1 w-52 overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-72">
              <Image
                src={imageUrl}
                className="h-screen w-screen object-cover object-center lg:h-72 lg:w-52 flex"
                alt={title || "Movie poster"}
                width={300}
                height={450}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
