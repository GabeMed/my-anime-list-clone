import CharacterVoiceRole from "@/entities/CharacterVoiceRole";
import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";

interface Props {
  characterAndActor: CharacterVoiceRole;
  bg?: string;
}

const AnimeCharacters = ({ characterAndActor, bg }: Props) => {
  const character = characterAndActor.character;
  const voiceActor = characterAndActor.voice_actors[0];

  if (!voiceActor || !character) return null;

  return (
    <HStack
      align="center"
      bg={bg}
      borderTopWidth="1px"
      borderBottomWidth="1px"
      borderColor="gray.700"
      padding="2"
    >
      <Image
        src={character.images.webp.image_url}
        boxSize="48px"
        objectFit="cover"
        borderRadius="md"
      />
      <Box>
        <Heading as="h4" fontSize="sm">
          {character.name}
        </Heading>
        <Text fontSize="xs" color="gray.500">
          {characterAndActor.role}
        </Text>
      </Box>
      <Box flex="1" />
      <Box textAlign="right">
        <Heading as="h4" fontSize="sm">
          {voiceActor.person.name}
        </Heading>
        <Text fontSize="xs" color="gray.500">
          {voiceActor.language}
        </Text>
      </Box>
      <Image
        src={voiceActor.person.images.jpg.image_url}
        boxSize="48px"
        objectFit="cover"
        borderRadius="md"
      />
    </HStack>
  );
};

export default AnimeCharacters;
