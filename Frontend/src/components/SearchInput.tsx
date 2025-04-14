import { Input, InputElement, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup startElement={<BsSearch />}>
      <Input
        borderRadius={20}
        placeholder="Search animes..."
        variant="subtle"
        fontVariant="historical-forms"
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;
