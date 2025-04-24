import useGenres, { Genre } from "@/hooks/useGenres";
import { Button, List } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data } = useGenres();

  return (
    <List.Root>
      {data?.data.map((genre) => (
        <List.Item key={genre.mal_id} padding="5px">
          <Button
            fontWeight={genre.mal_id === selectedGenreId ? "bold" : "normal"}
            variant={genre.mal_id === selectedGenreId ? "subtle" : "ghost"}
            onClick={() => onSelectGenre(genre)}
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
