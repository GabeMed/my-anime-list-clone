import { useState } from "react";
import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AnimeGrid from "./components/AnimeGrid";
import GenreList from "./components/GenreList";
import MediaTypeSelector from "./components/MediaTypeSelector";
import SortSelector from "./components/SortSelector";
import { Genre } from "./hooks/useGenres";
import { AnimeType } from "./utils/animeType";
import AnimeHeading from "./components/AnimeHeading";

export interface AnimeQuery {
  genre: Genre | null;
  type: AnimeType | "All";
  orderBy: string;
  orderDirection: string;
  searchText: string;
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
        <NavBar
          onSearch={(searchText) => {
            setAnimeQuery({ ...animeQuery, searchText });
          }}
        />
      </GridItem>
      <GridItem area="aside" hideBelow="lg">
        <GenreList
          selectedGenre={animeQuery.genre}
          onSelectGenre={(genre) => setAnimeQuery({ ...animeQuery, genre })}
        />
      </GridItem>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <AnimeHeading animeQuery={animeQuery} />
          <HStack spaceX={5} marginBottom={5}>
            <MediaTypeSelector
              selectedMediaType={animeQuery.type}
              onSelectMediaType={(type) =>
                setAnimeQuery({ ...animeQuery, type })
              }
            />
            <SortSelector
              selectedSortOrder={animeQuery.orderBy}
              onSelectSortOrder={(orderBy, orderDirection) =>
                setAnimeQuery({ ...animeQuery, orderBy, orderDirection })
              }
            ></SortSelector>
          </HStack>
        </Box>
        <AnimeGrid animeQuery={animeQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
