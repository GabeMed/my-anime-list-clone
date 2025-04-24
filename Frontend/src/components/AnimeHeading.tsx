import { AnimeQuery } from "@/App";
import useGenres from "@/hooks/useGenres";
import { Heading } from "@chakra-ui/react";

interface Props {
  animeQuery: AnimeQuery;
}

const AnimeHeading = ({ animeQuery }: Props) => {
  const { data: genres } = useGenres();

  const genre = genres?.data.find((g) => g.mal_id === animeQuery.genreId);

  const heading = `${animeQuery.type || ""} ${genre?.name || ""} Animes`;

  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {" "}
      {heading}{" "}
    </Heading>
  );
};

export default AnimeHeading;
