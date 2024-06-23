import Image from "next/image";
import MovieDetailsPage from "@/app/movies/[id]/page";

export default async function Card(movie: any) {
  const IMAGE_BASE_URL =
    "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/";

  return (
    <>
      <div className="mx-auto px-4 py-8 sm:px-10 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Hot new movies
        </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="group relative">
            <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
              <Image
                src={IMAGE_BASE_URL + movie.poster_path}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                alt="image"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
