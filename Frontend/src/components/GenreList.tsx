import useGenres, { Genre } from "@/hooks/useGenres";
import { Button, List, Spinner, Text } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List.Root>
      {data.map((genre) => (
        <List.Item key={genre.mal_id} padding="5px">
          <Button
            onClick={() => onSelectGenre(genre)}
            fontSize="large"
            variant="plain"
          >
            {genre.name}
          </Button>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
