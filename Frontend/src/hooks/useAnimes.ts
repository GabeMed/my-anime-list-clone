import { Genre } from "./useGenres";
import useData from "./useData";
import { AnimeType } from "@/utils/animeType";

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

const useAnimes = (
  selectedGenre: Genre | null,
  selectedMediaType: AnimeType | "All"
) =>
  useData<Anime>(
    "/anime",
    {
      params: {
        genres: selectedGenre?.mal_id,
        ...(selectedMediaType !== "All" && { type: selectedMediaType }),
      },
    },
    [selectedGenre?.mal_id, selectedMediaType]
  );

export default useAnimes;
