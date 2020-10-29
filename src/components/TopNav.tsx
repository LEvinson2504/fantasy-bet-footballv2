import { Flex, Link, Text } from "@chakra-ui/core";
import React from "react";

export default function TopNav() {
  return (
    <Flex
      w="100vw"
      direction={["row", "column"]}
      align="center"
      justify="space-evenly"
      p={5}
      bgColor="cyan"
    >
      <Link href="/">
        <Text fontSize={30}>Home</Text>
      </Link>
      <Link href="/signup">
        <Text fontSize={30}>Login/Signup</Text>
      </Link>
      <Link>
        <Text fontSize={30}>News</Text>
      </Link>
    </Flex>
  );
}
