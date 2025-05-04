import Anime from "@/entities/Anime";
import { SimpleGrid, Text } from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
import MalScore from "./MalScore";

interface Props {
  anime: Anime;
}
const AnimeAttributes = ({ anime }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Producers">
        {anime.producers.map((producer) => (
          <Text key={producer.mal_id}>{producer.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Studios">
        {anime.studios.map((studio) => (
          <Text>{studio.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {anime.genres.map((genre) => (
          <Text key={genre.mal_id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="MyAnimeList">
        <MalScore score={anime.score} />
      </DefinitionItem>
      {anime.streaming.length > 0 && (
        <DefinitionItem term="Streaming">
          {anime.streaming.map((stream) => (
            <Text key={stream.url}>{stream.name}</Text>
          ))}
        </DefinitionItem>
      )}
    </SimpleGrid>
  );
};

export default AnimeAttributes;
