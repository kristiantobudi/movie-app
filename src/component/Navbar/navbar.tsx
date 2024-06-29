import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-0 left-0 right-0 z-50 h-auto w-auto">
      <nav className="w-auto">
        <div className="bg-black/50 backdrop-blur-sm mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-4xl font-extrabold font-zhiMangXing text-white">
                  Watch
                </span>
                <br />
                <span className="text-4xl font-extrabold font-zhiMangXing text-white">
                  Movie
                </span>
              </div>
              <div className="ml-10 md:block">
                <div className="flex items-baseline space-x-4">
                  <Link
                    href="/"
                    className="rounded-md px-3 py-2 font-medium text-lg text-pink hover:bg-maroon hover:text-white"
                  >
                    Movies
                  </Link>
                  <Link
                    href="/"
                    className="rounded-md px-3 py-2 font-medium text-lg text-pink hover:bg-maroon hover:text-white"
                  >
                    Series
                  </Link>
                  <Link
                    href="/"
                    className="rounded-md px-3 py-2 font-medium text-lg text-pink hover:bg-maroon hover:text-white"
                  >
                    Animation
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
