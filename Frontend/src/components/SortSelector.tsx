import { Menu, Button, Portal } from "@chakra-ui/react";

interface Props {
  selectedSortOrder: string;
  onSelectSortOrder: (sortBy: string, sortDirection: string) => void;
}

const SortSelector = ({ selectedSortOrder, onSelectSortOrder }: Props) => {
  const sortOrder = [
    { label: "Relevance" },
    { sortBy: "title", sortDirection: "asc", label: "Name" },
    { sortBy: "start_date", sortDirection: "desc", label: "Release date" },
    { sortBy: "popularity", sortDirection: "asc", label: "Popularity" },
    { sortBy: "score", sortDirection: "desc", label: "Score" },
  ];

  const currentOrder = sortOrder.find(
    (order) => order.sortBy === selectedSortOrder
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
                  order.sortBy
                    ? onSelectSortOrder(order.sortBy, order.sortDirection)
                    : onSelectSortOrder("", "");
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
