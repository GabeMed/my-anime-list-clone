import useAnimeQueryStore from "@/store";
import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const setSearchText = useAnimeQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup startElement={<BsSearch />}>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search animes..."
          variant="subtle"
          fontVariant="historical-forms"
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
