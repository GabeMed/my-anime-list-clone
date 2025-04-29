import NavBar from "@/components/NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading size="7xl">Ops ...</Heading>
        <Text fontSize="2xl">
          {isRouteErrorResponse(error)
            ? "This page does not exist"
            : "An unexpected error ocurred"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
