import React from "react";
import { Button, Input, Flex } from "@chakra-ui/react";

const SearchBarComponent = () => {
  return (
    <Flex justifyContent="center" paddingTop={10} gap={10}>
      <Input placeholder="Search" htmlSize={4} width="sm" variant="filled" />
      <Button
        bgColor="black"
        size="md"
        paddingX={10}
        paddingY={5}
        color="white"
        variant="outline"
        border="2px"
        borderColor="white"
      >
        Create
      </Button>
    </Flex>
  );
};

export default SearchBarComponent;