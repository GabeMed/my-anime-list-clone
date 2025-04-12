import { useState } from "react";
import { Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AnimeGrid from "./components/AnimeGrid";
import GenreList from "./components/GenreList";
import MediaTypeSelector from "./components/MediaTypeSelector";
import SortSelector from "./components/SortSelector";
import { Genre } from "./hooks/useGenres";
import { AnimeType } from "./utils/animeType";

export interface AnimeQuery {
  genre: Genre | null;
  type: AnimeType | "All";
}

function App() {
  const [animeQuery, setAnimeQuery] = useState<AnimeQuery>({
    type: "All",
  } as AnimeQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="aside" hideBelow="lg">
        <GenreList
          selectedGenre={animeQuery.genre}
          onSelectGenre={(genre) => setAnimeQuery({ ...animeQuery, genre })}
        />
      </GridItem>
      <GridItem area="main">
        <HStack spaceX={5} paddingLeft={2} marginBottom={5}>
          <MediaTypeSelector
            selectedMediaType={animeQuery.type}
            onSelectMediaType={(type) => setAnimeQuery({ ...animeQuery, type })}
          />
          <SortSelector></SortSelector>
        </HStack>
        <AnimeGrid animeQuery={animeQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
