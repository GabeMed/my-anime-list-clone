import genres from "@/data/genres";
import APIClient, { FetchResponse } from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Genre>("/genres/anime");

export interface Genre {
  mal_id: number;
  name: string;
}

const useGenres = () =>
  useQuery<FetchResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData() {
      {
        pagination: genres.length;
        data: genres;
      }
    },
  });

export default useGenres;
