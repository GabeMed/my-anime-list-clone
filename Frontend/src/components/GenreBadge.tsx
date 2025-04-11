import { Anime } from "@/hooks/useAnimes";
import { Badge } from "@chakra-ui/react";

interface Props {
  anime: Anime;
}

const GenreBadge = ({ anime }: Props) => {
  return (
    <>
      {anime.genres.map((genre) => (
        <Badge size="sm" variant="surface">
          {genre.name}
        </Badge>
      ))}
    </>
  );
};

export default GenreBadge;
