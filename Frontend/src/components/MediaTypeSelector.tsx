import { Menu } from "@chakra-ui/react";
import { Button, Portal } from "@chakra-ui/react";
import { AnimeType, animeTypeData } from "@/utils/animeType";
import useAnimeQueryStore from "@/store";

const MediaTypeSelector = () => {
  const types = [
    "All",
    ...(Object.keys(animeTypeData) as AnimeType[]),
  ] as const satisfies readonly (AnimeType | "All")[];

  const selectedType = useAnimeQueryStore((s) => s.animeQuery.type);
  const setSelectedType = useAnimeQueryStore((s) => s.setType);

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle" size="md" fontSize="md" borderRadius={5}>
          {selectedType}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {types.map((type) => (
              <Menu.Item
                key={type}
                onClick={() => setSelectedType(type)}
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
