import { Genre } from "./useGenres";
import useData from "./useData";
import { AnimeQuery } from "@/App";

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
  useData<Anime>(
    "/anime",
    {
      params: {
        genres: animeQuery.genre?.mal_id,
        ...(animeQuery.type !== "All" && { type: animeQuery.type }),
        order_by: animeQuery.orderBy,
        sort: animeQuery.orderDirection,
      },
    },
    [animeQuery]
  );

export default useAnimes;
