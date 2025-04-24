import Genres from "@/data/genres";
import APIClient, { FetchResponse } from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Genre>("/genres/anime");

export interface Genre {
  mal_id: number;
  name: string;
  url?: string;
  count?: number;
}

const useGenres = () =>
  useQuery<FetchResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: Genres,
  });

export default useGenres;
