import { IconType } from "react-icons";
import {
  FaTv,
  FaFilm,
  FaCompactDisc,
  FaGlobe,
  FaStar,
  FaBullhorn,
  FaMusic,
  FaPlay,
} from "react-icons/fa";

export type AnimeType =
  | "TV"
  | "OVA"
  | "Movie"
  | "Special"
  | "ONA"
  | "Music"
  | "CM"
  | "PV";

export const animeTypeData: Record<
  AnimeType,
  { icon?: IconType; color: string }
> = {
  TV: { icon: FaTv, color: "blue" },
  OVA: { icon: FaCompactDisc, color: "purple" },
  Movie: { icon: FaFilm, color: "red" },
  Special: { icon: FaStar, color: "yellow" },
  ONA: { icon: FaGlobe, color: "green" },
  Music: { icon: FaMusic, color: "pink" },
  CM: { icon: FaBullhorn, color: "orange" },
  PV: { icon: FaPlay, color: "teal" },
};
