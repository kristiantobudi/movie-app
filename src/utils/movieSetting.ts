const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getMovies = async (query: any) => {
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await res.json();
    return data.results;
}

export const getTrendingMovies = async () => {
    const res = await fetch(`${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`);
    const data = await res.json();
    // remaping name from title to name 
    return data.results.map((item: any) =>  { return {name: item.title,release_date: item.first_air_date, ...item}});
}

export const getMoviesDetails = async (id: any) => {
    const res =await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    const data = await res.json();
    return data
}

export const getSimilarMovies = async (id: any) => {
    const res = await fetch(`${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`)
    const data = await res.json();
    return data.results;
}

export const getTrandingTv = async () => {
    const res = await fetch(`${BASE_URL}/trending/tv/day?language=en-US&api_key=${API_KEY}`)
    const data = await res.json();
    return data.results.map((item: any) =>  { return {name: item.title,release_date: item.first_air_date, ...item}});
}

export const getTvDetails = async (id: any) => {
    const res = await fetch(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`)
    const data = await res.json()
    return data
}

export const getSimilarTv = async (id: any) => {
    const res = await fetch(`${BASE_URL}/tv/${id}/similar?api_key=${API_KEY}`)
    const data = await res.json()
    return data.results;
}
