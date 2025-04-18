import useGenres, { Genre } from "@/hooks/useGenres";
import { Button, List } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data } = useGenres();

  return (
    <List.Root>
      {data.map((genre) => (
        <List.Item key={genre.mal_id} padding="5px">
          <Button
            fontWeight={
              genre.mal_id === selectedGenre?.mal_id ? "bold" : "normal"
            }
            variant={
              genre.mal_id === selectedGenre?.mal_id ? "subtle" : "ghost"
            }
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
