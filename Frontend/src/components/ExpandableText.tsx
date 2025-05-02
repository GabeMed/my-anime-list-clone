import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text> {children} </Text>;

  const summary = expanded ? children : children.substring(0, 300) + "  ...  ";

  return (
    <Text>
      {summary}
      <Button
        size="xs"
        borderRadius={20}
        colorPalette="yellow"
        fontWeight="bold"
        variant="subtle"
        onClick={() => setExpanded(!expanded)}
      >
        {!expanded ? "Read More" : "Show Less"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
