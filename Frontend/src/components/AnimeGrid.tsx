import useAnimes from "@/hooks/useAnimes";
import { SimpleGrid, Text } from "@chakra-ui/react";
import AnimeCard from "./AnimeCard";

const AnimeGrid = () => {
  const { error, animes } = useAnimes();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2, xl: 3 }}
        padding="10px"
        columnGap={4}
        rowGap={10}
      >
        {animes.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default AnimeGrid;
