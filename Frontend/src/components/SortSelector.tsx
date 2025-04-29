import useAnimeQueryStore from "@/store";
import { Menu, Button, Portal } from "@chakra-ui/react";

const SortSelector = () => {
  const sortOrder = [
    { sortBy: undefined, sortDirection: undefined, label: "Relevance" },
    { sortBy: "title", sortDirection: "asc", label: "Name" },
    { sortBy: "start_date", sortDirection: "desc", label: "Release date" },
    { sortBy: "popularity", sortDirection: "asc", label: "Popularity" },
    { sortBy: "score", sortDirection: "desc", label: "Score" },
  ];

  const setSelectedOrder = useAnimeQueryStore((s) => s.setOrder);
  const selectedOrderBy = useAnimeQueryStore((s) => s.animeQuery.orderBy);
  const currentOrder = sortOrder.find(
    (order) => order.sortBy === selectedOrderBy
  );

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle" size="md" fontSize="md" borderRadius={5}>
          Order By: {currentOrder?.label || "Relevance"}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrder.map((order) => (
              <Menu.Item
                onClick={() => {
                  setSelectedOrder(order.sortBy, order.sortDirection);
                }}
                key={order.label}
                value={order.sortBy || "default"}
              >
                {order.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
