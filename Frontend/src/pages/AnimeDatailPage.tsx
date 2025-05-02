import AnimeAttributes from "@/components/AnimeAttributes";
import AnimeCharacterList from "@/components/AnimeCharactersList";
import AnimeTrailer from "@/components/AnimeTrailer";
import ExpandableText from "@/components/ExpandableText";
import useAnimeDetail from "@/hooks/useAnimeDetail";
import useCharacters from "@/hooks/useCharacters";
import { Box, Heading, Spinner } from "@chakra-ui/react";
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
    <Box padding={5} bg="background">
      <Heading size="7xl">{anime.title}</Heading>
      <ExpandableText>
        {anime.synopsis.slice(0, anime.synopsis.length - 25)}
      </ExpandableText>
      <AnimeAttributes anime={anime} />
      <AnimeCharacterList charactersAndActors={characters} />
      <AnimeTrailer anime={anime} />
    </Box>
  );
};

export default AnimeDatailPage;
