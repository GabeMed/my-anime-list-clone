import { Genre } from "./useGenres";
import APIClient, { FetchResponse } from "@/services/apiClient";
import { AnimeQuery } from "@/App";
import { useInfiniteQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Anime>("/anime");

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
  useInfiniteQuery<FetchResponse<Anime>, Error>({
    queryKey: ["anime", animeQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: animeQuery.genre?.mal_id,
          ...(animeQuery.type != "All" && { type: animeQuery.type }),
          order_by: animeQuery.orderBy,
          sort: animeQuery.orderDirection,
          q: animeQuery.searchText,
          page: pageParam,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000, //24h
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.pagination.has_next_page
        ? allPages.length + 1
        : undefined;
    },
  });

export default useAnimes;
