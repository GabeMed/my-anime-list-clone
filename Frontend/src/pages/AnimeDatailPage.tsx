import AnimeAttributes from "@/components/AnimeAttributes";
import AnimeTrailer from "@/components/AnimeTrailer";
import ExpandableText from "@/components/ExpandableText";
import useAnimeDetail from "@/hooks/useAnimeDetail";
import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const AnimeDatailPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useAnimeDetail(id!);
  const anime = data?.data;

  if (isLoading) return <Spinner />;

  if (error || !anime) throw error;

  return (
    <Box padding={5} bg="background">
      <Heading size="7xl">{anime.title}</Heading>
      <ExpandableText>
        {anime.synopsis.slice(0, anime.synopsis.length - 25)}
      </ExpandableText>
      <AnimeAttributes anime={anime} />
      <AnimeTrailer anime={anime} />
    </Box>
  );
};

export default AnimeDatailPage;
