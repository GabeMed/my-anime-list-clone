import Anime from "@/entities/Anime";
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
import { Link } from "react-router-dom";

interface Props {
  anime: Anime;
}

const AnimeCard = ({ anime }: Props) => {
  const type = (
    anime.type in animeTypeData ? anime.type : "TV"
  ) as keyof typeof animeTypeData;
  const IconComponent = animeTypeData[type].icon || animeTypeData.TV.icon;

  return (
    <Link to={"/anime/" + anime.mal_id}>
      <Card.Root
        flexDirection={{ base: "column", sm: "row" }}
        width={{ base: "100%", sm: "auto" }}
        height={{ base: "auto", sm: "65" }}
        border="hidden"
      >
        <Image
          src={anime.images.webp.large_image_url}
          maxH={{ base: "200px", sm: "md" }}
          maxW={{ base: "100%", sm: "sm" }}
          objectFit="cover"
          aspectRatio={6 / 9}
        />
        <Card.Body p="4">
          <Heading size={{ base: "sm", sm: "md" }}>{anime.title}</Heading>
          <HStack paddingTop="2" w="100%" gap={{ base: 1, sm: 2 }}>
            <MalScore score={anime.score} />
            <Badge
              size={{ base: "md", sm: "lg" }}
              colorPalette={animeTypeData[type].color}
            >
              <Icon as={IconComponent} />
              <Text fontSize={{ base: "xs", sm: "sm" }}>{type}</Text>
            </Badge>
          </HStack>
          <HStack mt="4" wrap="wrap" gap={{ base: 1, sm: 2 }}>
            <GenreBadge anime={anime} />
          </HStack>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card.Root>
    </Link>
  );
};

export default AnimeCard;
