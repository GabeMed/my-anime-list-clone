import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import AnimeGrid from "./components/AnimeGrid";
import AnimeHeading from "./components/AnimeHeading";
import GenreList from "./components/GenreList";
import MediaTypeSelector from "./components/MediaTypeSelector";
import NavBar from "./components/NavBar";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <Box bg="background" color="text" minH="100vh">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          md: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="aside">
          <GenreList />
        </GridItem>
        <GridItem area="main">
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
}

export default App;
