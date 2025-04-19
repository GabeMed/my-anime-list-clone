import genres from "@/data/genres";
import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "./useData";

export interface Genre {
  mal_id: number;
  name: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Genre>>("/genres/anime")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData() {
      {
        pagination: genres.length;
        data: genres;
      }
    },
  });

export default useGenres;
