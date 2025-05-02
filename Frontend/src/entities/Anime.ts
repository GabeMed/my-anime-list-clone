import { Genre } from "./Genre";

export interface Anime {
  mal_id: number;
  title: string;
  synopsis: string;
  genres: Genre[];
  score: number;
  type: string;
  images: {
    webp: {
      large_image_url: string;
    };
  };
}
