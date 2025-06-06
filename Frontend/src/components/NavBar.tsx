import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack bg="background" justifyContent="space-between" padding="10px">
      <HStack>
        <Link to="/">
          <Image src={logo} boxSize="60px" />
        </Link>
      </HStack>
      <Box paddingLeft={10} width="100%">
        <SearchInput />
      </Box>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
