import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const MalScore = ({ score }: Props) => {
  let color = score >= 7.5 ? "green" : score >= 5 ? "yellow" : "red";

  return (
    <Badge
      size="lg"
      borderRadius="4px"
      colorPalette={color}
      fontSize="lg"
      fontWeight="bold"
    >
      {score}
    </Badge>
  );
};

export default MalScore;
