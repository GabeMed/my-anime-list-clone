import { Anime } from "@/hooks/useAnimes";
import { Card, Heading, Image } from "@chakra-ui/react";

interface Props {
  anime: Anime;
}
const AnimeCard = ({ anime }: Props) => {
  return (
    <Card.Root flexDirection="row" borderRadius={10} overflow={"hidden"}>
      <Image
        src={anime.images.webp.large_image_url}
        aspectRatio={6 / 9}
        maxH="md"
        objectFit="cover"
      />
      <Card.Body>
        <Heading size="2xl">{anime.title}</Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default AnimeCard;
