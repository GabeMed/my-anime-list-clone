import { Genre } from "./Genre";
import { Producer } from "./Producer";
import { Studio } from "./Studio";
import { Trailer } from "./Trailer";

export interface Anime {
  mal_id: number;
  title: string;
  synopsis: string;
  trailer: Trailer;
  genres: Genre[];
  score: number;
  type: string;
  studios: Studio[];
  producers: Producer[];
  images: {
    webp: {
      large_image_url: string;
    };
  };
}
