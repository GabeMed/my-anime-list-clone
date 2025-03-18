import useAnimes from "@/hooks/useAnimes";
import { SimpleGrid, Text } from "@chakra-ui/react";
import AnimeCard from "./AnimeCard";
import AnimeCardSkeleton from "./AnimeCardSkeleton";

const AnimeGrid = () => {
  const { error, animes, isLoading } = useAnimes();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2, xl: 3 }}
        padding="10px"
        columnGap={4}
        rowGap={10}
      >
        {skeletons.map(
          (skeleton) => isLoading && <AnimeCardSkeleton key={skeleton} />
        )}
        {animes.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default AnimeGrid;
