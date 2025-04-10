import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AnimeGrid from "./components/AnimeGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import MediaTypeSelector from "./components/MediaTypeSelector";
import { AnimeType } from "./utils/animeType";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedMediaType, setSelectedMediaType] = useState<AnimeType | "All">(
    "All"
  );

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
          selectedGenre={selectedGenre}
          onSelectGenre={(genre) => setSelectedGenre(genre)}
        />
      </GridItem>
      <GridItem area="main">
        <MediaTypeSelector
          selectedMediaType={selectedMediaType}
          onSelectMediaType={(mediaType) => setSelectedMediaType(mediaType)}
        />
        <AnimeGrid
          selectedMediaType={selectedMediaType}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
