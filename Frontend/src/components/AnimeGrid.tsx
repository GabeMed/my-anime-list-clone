import useAnimes from "@/hooks/useAnimes";
import { SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import AnimeCard from "./AnimeCard";
import AnimeCardContainer from "./AnimeCardContainer";
import AnimeCardSkeleton from "./AnimeCardSkeleton";
import useAnimeQueryStore from "@/store";

const AnimeGrid = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const {
    data,
    error,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useAnimes();

  if (error) return <Text>{error.message}</Text>;

  const fetchedAnimesCount =
    data?.pages.reduce((acc, page) => acc + page.data.length, 0) || 0;

  const animeQuery = useAnimeQueryStore((s) => s.animeQuery);

  return (
    <InfiniteScroll
      key={JSON.stringify(animeQuery)} //! Important if you dont set the key there will be a Huge Mess
      dataLength={fetchedAnimesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      scrollThreshold={0.9}
      loader
    >
      <SimpleGrid
        columns={{ base: 1, lg: 2, xl: 3 }}
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
