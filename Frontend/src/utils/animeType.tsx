import { IconType } from "react-icons";
import { FaTv, FaFilm, FaCompactDisc, FaGlobe, FaStar } from "react-icons/fa";

export type AnimeType = "TV" | "Movie" | "OVA" | "ONA" | "Special";

export const animeTypeData: Record<
  AnimeType,
  { color: string; icon: IconType }
> = {
  TV: { color: "blue", icon: FaTv },
  Movie: { color: "red", icon: FaFilm },
  OVA: { color: "purple", icon: FaCompactDisc },
  ONA: { color: "teal", icon: FaGlobe },
  Special: { color: "orange", icon: FaStar },
};
