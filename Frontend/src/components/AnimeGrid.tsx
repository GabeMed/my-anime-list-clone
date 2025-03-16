import useAnimes from "@/hooks/useAnimes";
import { Text } from "@chakra-ui/react";

const AnimeGrid = () => {
  const { error, animes } = useAnimes();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {animes.map((anime) => (
          <li key={anime.mal_id}>{anime.title}</li>
        ))}
      </ul>
    </>
  );
};

export default AnimeGrid;
