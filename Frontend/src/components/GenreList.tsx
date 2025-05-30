import useGenres from "@/hooks/useGenres";
import useAnimeQueryStore from "@/store";
import { Button, List } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useGenres();
  const selectedGenreId = useAnimeQueryStore((s) => s.animeQuery.genreId);
  const setSelectedGenreId = useAnimeQueryStore((s) => s.setGenderId);

  const handleGenreClick = (genreId: number) => {
    setSelectedGenreId(selectedGenreId === genreId ? 0 : genreId);
  };

  return (
    <List.Root>
      {data?.data.map((genre) => (
        <List.Item key={genre.mal_id} padding="5px">
          <Button
            fontWeight={genre.mal_id === selectedGenreId ? "bold" : "normal"}
            variant={genre.mal_id === selectedGenreId ? "subtle" : "ghost"}
            onClick={() => handleGenreClick(genre.mal_id)}
            fontSize="large"
            w="full"
          >
            {genre.name}
          </Button>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
