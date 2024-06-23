/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import Card from "../Card/card";
import { getTrendingMovies } from "../../utils/movieSetting";

export default async function HeroSection() {
  const movies = await getTrendingMovies();
  return (
    <>
      <div className="absolute">
        <Image
          src={"/assets/image/hero.jpg"}
          width={1500}
          height={1000}
          alt="Picture of the author"
        />
      </div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-32">
          <div className="text-left">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Welcome to Watch Movie
            </h1>
            <p className="mt-6 text-lg leading-8 text-white font-bold">
              Discover, Stream, and Enjoy the Best Movies Anytime, Anywhere
            </p>
            <p className="mt-6 text-lg leading-8 text-white">
              Experience the magic of cinema right from the comfort of your
              home. At Watch Movie, we bring you an extensive collection of
              films spanning all genres and eras. Whether you're in the mood for
              a timeless classic, a heart-pounding action flick, or a
              light-hearted comedy, we've got something for everyone. Dive into
              our curated selections, enjoy high-quality streaming, and never
              miss out on the latest releases. Your next movie night starts
              here!
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
            <div>
              {movies.map((movie: any) => {
                return <Card key={movie} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
