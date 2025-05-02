import AnimeAttributes from "@/components/AnimeAttributes";
import AnimeCharacterList from "@/components/AnimeCharactersList";
import AnimeTrailer from "@/components/AnimeTrailer";
import ExpandableText from "@/components/ExpandableText";
import useAnimeDetail from "@/hooks/useAnimeDetail";
import useCharacters from "@/hooks/useCharacters";
import { Box, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const AnimeDatailPage = () => {
  const { id } = useParams();
  const {
    data: animeResponse,
    isLoading: animeLoading,
    error: animeFetchError,
  } = useAnimeDetail(id!);
  const anime = animeResponse?.data;

  const {
    data: charactersResponse,
    isLoading: characterLoading,
    error: characterFetchingError,
  } = useCharacters(id!);
  const characters = charactersResponse?.data;

  if (animeLoading || characterLoading) return <Spinner />;

  if (animeFetchError || !anime) throw animeFetchError;

  if (characterFetchingError || !characters) throw characterFetchingError;

  return (
    <Box bg="background" minH="100vh" color="text">
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        maxW="container.xl"
        mx="auto"
        gap={6}
        px={4}
      >
        <GridItem>
          <Heading size="7xl">{anime.title}</Heading>
          <ExpandableText>
            {anime.synopsis.slice(0, anime.synopsis.length - 25)}
          </ExpandableText>
          <AnimeAttributes anime={anime} />
        </GridItem>
        <GridItem>
          <AnimeTrailer anime={anime} />
          <AnimeCharacterList charactersAndActors={characters} />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default AnimeDatailPage;
