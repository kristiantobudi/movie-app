/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { getTrendingMovies } from "../../utils/movieSetting";
import MovieList from "../MovieList/movieList";

export default async function HeroSection() {
  const movies = await getTrendingMovies();
  return (
    <>
      <div className="relative min-h-screen">
        <Image
          src={"/assets/image/background.jpg"}
          width={1500}
          height={1000}
          alt="Picture of the author"
        />
        <div className="absolute inset-1 flex items-center justify-center bg-gray-900 bg-opacity-50 py-28 px-4">
          <div className="flex container mx-auto max-w-7xl py-28 sm:py-24 lg:py-32 xl:py-40">
            <div className="max-w-7xl min-w-4xl">
              <h1 className="flex mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Welcome to Watch Movie
              </h1>
              <p className="mt-6 text-lg leading-8 text-white font-bold">
                Discover, Stream, and Enjoy the Best Movies Anytime, Anywhere
              </p>
              <p className="mt-6 text-lg leading-8 text-white">
                Experience the magic of cinema right from the comfort of your
                home. At Watch Movie, we bring you an extensive collection of
                films spanning all genres and eras. Whether you're in the mood
                for a timeless classic, a heart-pounding action flick, or a
                light-hearted comedy, we've got something for everyone. Dive
                into our curated selections, enjoy high-quality streaming, and
                never miss out on the latest releases. Your next movie night
                starts here!
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href={"/movies"}
                  className="rounded-md px-3 py-2 font-medium text-lg text-black bg-white hover:bg-maroon hover:text-white"
                >
                  Start Watching Now
                </Link>
                <Link
                  href={"/list-film"}
                  className="rounded-md px-3 py-2 font-medium text-lg text-black bg-white hover:bg-maroon hover:text-white"
                >
                  List Film
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
