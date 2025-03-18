import { Anime } from "@/hooks/useAnimes";
import { Badge, Card, Heading, HStack, Image } from "@chakra-ui/react";
import MalScore from "./MalScore";

interface Props {
  anime: Anime;
}
const AnimeCard = ({ anime }: Props) => {
  return (
    <Card.Root flexDirection="row">
      <Image
        src={anime.images.webp.large_image_url}
        aspectRatio={6 / 9}
        maxH="md"
        boxSize="65"
      />
      <Card.Body p="4">
        <HStack justify="space-between">
          <Heading size="xl">{anime.title}</Heading>
          <MalScore score={anime.score} />
        </HStack>
        <HStack mt="4" wrap="wrap">
          {anime.genres.map((genre) => (
            <Badge size="lg">{genre.name}</Badge>
          ))}
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default AnimeCard;
