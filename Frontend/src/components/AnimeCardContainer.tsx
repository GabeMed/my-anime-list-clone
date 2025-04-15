import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AnimeCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      height="420px"
      width="525px"
      boxShadow="0px 8px 20px rgba(0, 0, 0, 0.1)"
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "0px 12px 25px rgba(0, 0, 0, 0.15)",
      }}
    >
      {children}
    </Box>
  );
};

export default AnimeCardContainer;
