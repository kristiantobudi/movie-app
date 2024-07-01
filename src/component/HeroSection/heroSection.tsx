/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { getTrendingMovies } from "../../utils/movieSetting";

export default async function HeroSection() {
  const movies = await getTrendingMovies();

  return (
    <div className="relative min-h-screen">
      <Image
        src="/assets/image/background.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Background"
        priority
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
        <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Welcome to Watch Movie
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white font-semibold mb-4">
              Discover, Stream, and Enjoy the Best Movies Anytime, Anywhere
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white mb-8">
              Experience the magic of cinema right from the comfort of your
              home. At Watch Movie, we bring you an extensive collection of
              films spanning all genres and eras. Whether you're in the mood for
              a timeless classic, a heart-pounding action flick, or a
              light-hearted comedy, we've got something for everyone. Dive into
              our curated selections, enjoy high-quality streaming, and never
              miss out on the latest releases. Your next movie night starts
              here!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/movies"
                className="w-full sm:w-auto rounded-md px-6 py-3 font-medium text-lg text-black bg-white hover:bg-maroon hover:text-white transition duration-300"
              >
                Start Watching Now
              </Link>
              <Link
                href="/list-film"
                className="w-full sm:w-auto rounded-md px-6 py-3 font-medium text-lg text-black bg-white hover:bg-maroon hover:text-white transition duration-300"
              >
                List Film
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
