import APIClient, { FetchResponse } from "@/services/apiClient";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import useAnimeQueryStore from "../store";
import { Genre } from "./useGenres";

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

const useAnimes = () => {
  const animeQuery = useAnimeQueryStore((s) => s.animeQuery);

  return useInfiniteQuery<FetchResponse<Anime>, Error>({
    queryKey: ["anime", animeQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: animeQuery.genreId,
          ...(animeQuery.type != "All" && { type: animeQuery.type }),
          order_by: animeQuery.orderBy,
          sort: animeQuery.orderDirection,
          q: animeQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.pagination.has_next_page
        ? allPages.length + 1
        : undefined;
    },
    staleTime: ms("24h"),
    keepPreviousData: false,
  });
};

export default useAnimes;
