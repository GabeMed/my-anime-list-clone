import { Genre } from "./useGenres";
import { FetchResponse } from "@/services/api-client";
import { AnimeQuery } from "@/App";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-client";

export interface Anime {
  mal_id: number;
  title: string;
  genres: Genre[];
  score: number;
  type: string;
  images: {
    webp: {
      large_image_url: string;
    };
  };
}

const useAnimes = (animeQuery: AnimeQuery) =>
  useQuery<FetchResponse<Anime>, Error>({
    queryKey: ["anime", animeQuery],
    queryFn: () =>
      apiClient
        .get("/anime", {
          params: {
            genres: animeQuery.genre?.mal_id,
            ...(animeQuery.type != "All" && { type: animeQuery.type }),
            order_by: animeQuery.orderBy,
            sort: animeQuery.orderDirection,
            q: animeQuery.searchText,
          },
        })
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
  });

export default useAnimes;
