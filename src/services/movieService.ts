import axios from "axios";
import type { MovieResponse } from "../types/movieResponse";

const BASE_URL = "https://api.themoviedb.org/3";

interface FetchMoviesParams {
  query: string;
  page?: number;
}

export default async function fetchMovies(
  params: FetchMoviesParams
): Promise<MovieResponse> {
  const response = await axios.get<MovieResponse>(`${BASE_URL}/search/movie`, {
    params,
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  });

  return response.data;
}
