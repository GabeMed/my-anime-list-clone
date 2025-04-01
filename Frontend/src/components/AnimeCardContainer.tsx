import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AnimeCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      overflow={"hidden"}
      height="420px"
      width="525px"
      border="1px solid"
      borderColor="gray.800"
    >
      {children}
    </Box>
  );
};

export default AnimeCardContainer;
