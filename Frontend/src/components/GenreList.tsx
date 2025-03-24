import useGenres from "@/hooks/useGenres";
import { List, Spinner, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List.Root>
      {data.map((genre) => (
        <List.Item key={genre.mal_id} padding="5px">
          <Text fontSize="large"> {genre.name}</Text>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
