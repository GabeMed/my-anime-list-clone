import { Anime } from "@/hooks/useAnimes";
import {
  Badge,
  Card,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import MalScore from "./MalScore";
import GenreBadge from "./GenreBadge";
import { animeTypeData } from "@/utils/animeType";

interface Props {
  anime: Anime;
}

const AnimeCard = ({ anime }: Props) => {
  const type = (
    anime.type in animeTypeData ? anime.type : "TV"
  ) as keyof typeof animeTypeData;
  const IconComponent = animeTypeData[type].icon || animeTypeData.TV.icon;

  return (
    <Card.Root flexDirection="row" boxSize="65">
      <Image
        src={anime.images.webp.large_image_url}
        maxH="md"
        maxW="sm"
        aspectRatio={6 / 9}
      />
      <Card.Body p="4">
        <HStack w="100%" justifyContent="space-between">
          <Heading size="xl">{anime.title}</Heading>
          <MalScore score={anime.score} />
        </HStack>
        <HStack paddingTop="2">
          <Badge size="lg" colorPalette={animeTypeData[type].color}>
            <Icon as={IconComponent} />
            <Text>{type}</Text>
          </Badge>
        </HStack>
        <HStack mt="4" wrap="wrap">
          <GenreBadge anime={anime} />
        </HStack>
      </Card.Body>
      <Card.Footer></Card.Footer>
    </Card.Root>
  );
};

export default AnimeCard;
