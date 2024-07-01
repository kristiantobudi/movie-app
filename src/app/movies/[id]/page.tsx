"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  getMoviesDetails,
  getSimilarMovies,
  getTvDetails,
  getSimilarTv,
} from "@/utils/movieSetting";
import Loading from "../../../component/loading/loading";


interface ContentDetails {
  id: number;
  title?: string;
  name?: string;
  backdrop_path: string;
  poster_path: string;
  first_air_date?: string;
  release_date?: string;
  original_language: string;
  status: string;
  vote_average: number;
  overview: string;
}

interface SimilarContent {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
}

interface DetailPageProps {
  params: {
    mediaType: string;
    id: string;
  };
}

const IMAGE_BASE_URL = "https://media.themoviedb.org/t/p/w300_and_h450_bestv2";

export default function DetailPage({ params }: DetailPageProps) {
  const [details, setDetails] = useState<ContentDetails | null>(null);
  const [similarContent, setSimilarContent] = useState<SimilarContent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const isTV = params.mediaType === "tv";

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const contentDetails = isTV
          ? await getTvDetails(params.id)
          : await getMoviesDetails(params.id);
        const similarContentData = isTV
          ? await getSimilarTv(params.id)
          : await getSimilarMovies(params.id);

        setDetails(contentDetails);
        setSimilarContent(similarContentData);
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [isTV, params.id]);

  if (isLoading) return <Loading />;
  if (error) return <div className="text-center text-maroon p-4">{error}</div>;
  if (!details) return <div className="text-center p-4">No data available</div>;

  const isTV = params.mediaType === "tv";

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const contentDetails = isTV
          ? await getTvDetails(params.id)
          : await getMoviesDetails(params.id);
        const similarContentData = isTV
          ? await getSimilarTv(params.id)
          : await getSimilarMovies(params.id);

        setDetails(contentDetails);
        setSimilarContent(similarContentData);
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [isTV, params.id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!details) return <div>No data available</div>;

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        backgroundImage: `url(${IMAGE_BASE_URL + details.backdrop_path})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 overflow-y-auto">
        <div className="relative z-10 container mx-auto px-4 py-16 min-h-center">
          <div className="flex flex-col md:flex-row items-start">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <div className="aspect-w-2 aspect-h-3 transition duration-300 hover:scale-105">
                <Image
                  src={IMAGE_BASE_URL + details.poster_path}
                  alt={details.title || details.name || ""}
                  width={300}
                  height={450}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="w-full md:w-fit mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                {details.title || details.name}
              </h1>
              <div className="flex flex-wrap mb-4">
                <span className="bg-pink text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  {isTV ? details.first_air_date : details.release_date}
                </span>
                <span className="bg-pink text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  {details.original_language.toUpperCase()}
                </span>
                <span className="bg-pink text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  {details.status}
                </span>
              </div>
              <div className="mb-6">
                <div className="text-xl font-bold text-white">
                  Rating: ★ {details.vote_average.toFixed(1)}
                </div>
              </div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-white">Overview</h2>
                <p className="text-sm md:text-base text-white">
                  {details.overview}
                </p>
              </div>

              <SimilarContentSection
                isTV={isTV}
                similarContent={similarContent}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SimilarContentSection({
  isTV,
  similarContent,
}: {
  isTV: boolean;
  similarContent: SimilarContent[];
}) {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">
        Similar {isTV ? "TV Shows" : "Movies"}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {similarContent.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="bg-maroon rounded-lg overflow-hidden transition duration-300 hover:scale-105"
          >
            <div className="aspect-w-2 aspect-h-3">
              <Image
                src={IMAGE_BASE_URL + item.poster_path}
                alt={item.title || item.name || ""}
                width={150}
                height={225}
                className="w-full object-cover"
                layout="responsive"
              />
            </div>
            <div className="p-2">
              <h3 className="text-xs md:text-sm font-semibold truncate text-white">
                {item.title || item.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
