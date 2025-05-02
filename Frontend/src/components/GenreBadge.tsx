import { Anime } from "@/entities/Anime";
import { Badge } from "@chakra-ui/react";

interface Props {
  anime: Anime;
}

const GenreBadge = ({ anime }: Props) => {
  return (
    <>
      {anime.genres.map((genre) => (
        <Badge
          key={(Math.random() * 1000).toString + genre.name}
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
