import useAnimeDetail from "@/hooks/useAnimeDetail";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const AnimeDatailPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useAnimeDetail(id!);
  const anime = data?.data;

  if (isLoading) return <Spinner />;

  if (error || !anime) throw error;

  return (
    <Box padding={5}>
      <Heading size="7xl">{anime.title}</Heading>
      <Text>{anime.synopsis}</Text>
    </Box>
  );
};

export default AnimeDatailPage;
