import { Menu } from "@chakra-ui/react/menu";
import { Button, Portal } from "@chakra-ui/react";
import { AnimeType, animeTypeData } from "@/utils/animeType";

interface Props {
  selectedMediaType: AnimeType | "All";
  onSelectMediaType: (mediaType: AnimeType | "All") => void;
}

const MediaTypeSelector = ({ selectedMediaType, onSelectMediaType }: Props) => {
  const types = [
    "All",
    ...(Object.keys(animeTypeData) as AnimeType[]),
  ] as const satisfies readonly (AnimeType | "All")[];

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle" size="md" fontSize="md" borderRadius={5}>
          {selectedMediaType}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {types.map((type) => (
              <Menu.Item
                key={type}
                onClick={() => onSelectMediaType(type)}
                value={"item-" + type}
              >
                {type}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default MediaTypeSelector;
