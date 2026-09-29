import Anime from "@/entities/Anime";
import { Badge } from "@chakra-ui/react";

interface Props {
  anime: Anime;
}

const GenreBadge = ({ anime }: Props) => {
  return (
    <>
      {anime.genres.map((genre) => (
        <Badge
          key={genre.mal_id}
          size="sm"
          variant="surface"
        >
          {genre.name}
        </Badge>
      ))}
    </>
  );
};

export default GenreBadge;
