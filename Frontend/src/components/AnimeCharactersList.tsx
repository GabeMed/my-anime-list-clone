import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import { CharacterVoiceRole } from "@/entities/CharacterVoiceRole";
import AnimeCharacters from "./CharacterActorTable";

interface Props {
  charactersAndActors: CharacterVoiceRole[];
}

const AnimeCharacterList = ({ charactersAndActors }: Props) => {
  if (!charactersAndActors || charactersAndActors.length === 0) return null;

  const columns = useBreakpointValue({ base: 1, md: 2 }) ?? 1;
  const mainCharacters = charactersAndActors.slice(0, 8);

  return (
    <Box maxW="850px" marginY={5} bg="background">
      <Heading as="h3" fontSize="2xl" marginTop={5} marginBottom={5}>
        {" "}
        Characters{" "}
      </Heading>
      <Box>
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          {mainCharacters.map((characterAndActor, index) => (
            <AnimeCharacters
              bg={
                Math.floor(index / columns) % 2 === 0 ? "gray.900" : "gray.800"
              }
              key={characterAndActor.character.mal_id}
              characterAndActor={characterAndActor}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default AnimeCharacterList;
