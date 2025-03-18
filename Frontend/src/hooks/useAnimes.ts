import { Genre } from "./useGenres";
import useData from "./useData";

export interface Anime {
  mal_id: number;
  title: string;
  genres: Genre[];
  score: number;
  images: {
    webp: {
      large_image_url: string;
    };
  };
}

const useAnimes = () => useData<Anime>("/anime");

export default useAnimes;
