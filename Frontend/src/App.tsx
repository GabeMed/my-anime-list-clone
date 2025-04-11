import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AnimeGrid from "./components/AnimeGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import MediaTypeSelector from "./components/MediaTypeSelector";
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
        <MediaTypeSelector
          selectedMediaType={animeQuery.type}
          onSelectMediaType={(type) => setAnimeQuery({ ...animeQuery, type })}
        />
        <AnimeGrid animeQuery={animeQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
