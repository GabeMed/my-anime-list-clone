import { Genre } from "./useGenres";
import useData from "./useData";

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

const useAnimes = (selectedGenre: Genre | null) =>
  useData<Anime>("/anime", { params: { genres: selectedGenre?.mal_id } }, [
    selectedGenre?.mal_id,
  ]);

export default useAnimes;
