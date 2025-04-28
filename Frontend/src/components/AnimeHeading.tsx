import useGenres from "@/hooks/useGenres";
import useAnimeQueryStore from "@/store";
import { Heading } from "@chakra-ui/react";

const AnimeHeading = () => {
  const { data: genres } = useGenres();

  const selectedGenderId = useAnimeQueryStore((s) => s.animeQuery.genreId);
  const genre = genres?.data.find((g) => g.mal_id === selectedGenderId);

  const selectedType = useAnimeQueryStore((s) => s.animeQuery.type);
  const heading = `${selectedType || ""} ${genre?.name || ""} Animes`;

  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {" "}
      {heading}{" "}
    </Heading>
  );
};

export default AnimeHeading;
