import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import CharacterVoiceRole from "@/entities/CharacterVoiceRole";
import AnimeCharacter from "./AnimeCharacter";
import { useColorModeValue } from "./ui/color-mode";

interface Props {
  charactersAndActors: CharacterVoiceRole[];
}

const AnimeCharacterList = ({ charactersAndActors }: Props) => {
  // Hooks run unconditionally and once per render (calling useColorModeValue
  // inside getBackground ran it once per character).
  const columns = useBreakpointValue({ base: 1, md: 2 }) ?? 1;
  const evenRowBg = useColorModeValue("gray.100", "gray.800");
  const oddRowBg = useColorModeValue("gray.200", "gray.700");

  if (!charactersAndActors || charactersAndActors.length === 0) return null;

  const mainCharacters = charactersAndActors.slice(0, 8);

  // Stripes by row, so both cells of a row share the same background.
  const getBackground = (index: number, columns: number) =>
    Math.floor(index / columns) % 2 === 0 ? evenRowBg : oddRowBg;

  return (
    <Box maxW="850px" marginY={5} bg="background">
      <Heading as="h3" fontSize="2xl" marginTop={5} marginBottom={5}>
        {" "}
        Characters{" "}
      </Heading>
      <Box>
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          {mainCharacters.map((characterAndActor, index) => (
            <AnimeCharacter
              bg={getBackground(index, columns)}
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
