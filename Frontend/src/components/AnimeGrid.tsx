import { SimpleGrid, Text } from "@chakra-ui/react";
import AnimeCard from "./AnimeCard";
import AnimeCardSkeleton from "./AnimeCardSkeleton";
import AnimeCardContainer from "./AnimeCardContainer";
import useAnimes from "@/hooks/useAnimes";
import { AnimeQuery } from "@/App";

interface Props {
  animeQuery: AnimeQuery;
}

const AnimeGrid = ({ animeQuery }: Props) => {
  const { data, error, isLoading } = useAnimes(animeQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid
      columns={{ base: 1, lg: 2, xl: 3 }} //Todo: Adjust responsive logic to cellphones
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
      {data?.data.map((anime) => (
        <AnimeCardContainer key={anime.mal_id}>
          <AnimeCard anime={anime} />
        </AnimeCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default AnimeGrid;
