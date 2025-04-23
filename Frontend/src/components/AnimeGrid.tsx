import { AnimeQuery } from "@/App";
import useAnimes from "@/hooks/useAnimes";
import { SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import AnimeCard from "./AnimeCard";
import AnimeCardContainer from "./AnimeCardContainer";
import AnimeCardSkeleton from "./AnimeCardSkeleton";

interface Props {
  animeQuery: AnimeQuery;
}

const AnimeGrid = ({ animeQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useAnimes(animeQuery);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text>{error.message}</Text>;

  const fetchedAnimesCount =
    data?.pages.reduce((acc, page) => acc + page.data.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedAnimesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      scrollThreshold={0.9}
      loader
    >
      <SimpleGrid
        columns={{ base: 1, lg: 2, xl: 3 }} //Todo: Adjust responsive logic to cellphones
        padding="10px"
        columnGap={4}
        rowGap={10}
      >
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.data.map((anime) => (
              <AnimeCardContainer key={anime.mal_id}>
                <AnimeCard anime={anime} />
              </AnimeCardContainer>
            ))}
          </React.Fragment>
        ))}

        {skeletons.map(
          (skeleton) =>
            (isLoading || isFetchingNextPage) && (
              <AnimeCardContainer key={skeleton}>
                <AnimeCardSkeleton />
              </AnimeCardContainer>
            )
        )}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default AnimeGrid;
