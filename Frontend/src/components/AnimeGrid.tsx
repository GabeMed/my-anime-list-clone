import useAnimes from "@/hooks/useAnimes";
import { SimpleGrid, Text } from "@chakra-ui/react";
import AnimeCard from "./AnimeCard";
import AnimeCardSkeleton from "./AnimeCardSkeleton";
import AnimeCardContainer from "./AnimeCardContainer";
import { Genre } from "@/hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

const AnimeGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useAnimes(selectedGenre);
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
          (skeleton) =>
            isLoading && (
              <AnimeCardContainer key={skeleton}>
                <AnimeCardSkeleton />
              </AnimeCardContainer>
            )
        )}
        {data.map((anime) => (
          <AnimeCardContainer key={anime.mal_id}>
            <AnimeCard anime={anime} />
          </AnimeCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default AnimeGrid;
