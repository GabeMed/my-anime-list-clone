import { AnimeQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface Props {
  animeQuery: AnimeQuery;
}

const AnimeHeading = ({ animeQuery }: Props) => {
  const heading = `${animeQuery.type || ""} ${
    animeQuery.genre?.name || ""
  } Animes`;

  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {" "}
      {heading}{" "}
    </Heading>
  );
};

export default AnimeHeading;
