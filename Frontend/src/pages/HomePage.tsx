import AnimeGrid from "@/components/AnimeGrid";
import AnimeHeading from "@/components/AnimeHeading";
import GenreList from "@/components/GenreList";
import MediaTypeSelector from "@/components/MediaTypeSelector";
import SortSelector from "@/components/SortSelector";
import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Box bg="background" color="text" minH="100vh">
      <Grid
        templateAreas={{
          base: `"main"`,
          md: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          md: "auto 1fr",
        }}
        gap={2}
      >
        <GridItem
          area="aside"
          overflow="hidden"
          display={{ base: "none", md: "block" }}
        >
          <GenreList />
        </GridItem>
        <GridItem area="main" overflow="hidden">
          <Box paddingLeft={2}>
            <AnimeHeading />
            <HStack spaceX={5} marginBottom={5}>
              <MediaTypeSelector />
              <SortSelector></SortSelector>
            </HStack>
          </Box>
          <AnimeGrid />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default HomePage;
