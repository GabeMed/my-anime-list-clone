import { useState } from "react";
import { Menu } from "@chakra-ui/react/menu";
import { Button, Icon, Portal } from "@chakra-ui/react";
import { animeTypeData } from "@/utils/animeType";

const MediaTypeSelector = () => {
  const types = [
    "All",
    ...(Object.keys(animeTypeData) as Array<
      keyof typeof animeTypeData | string
    >),
  ];

  const [mediaType, setMediaType] = useState("All");

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle" size="md" fontSize="md">
          {mediaType}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {types.map((type) => (
              <Menu.Item
                onClick={() => setMediaType(type)}
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
