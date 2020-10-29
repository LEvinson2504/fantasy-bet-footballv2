import { Box, Container } from "@chakra-ui/core";
import React, { ReactNode } from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import TopNav from "./TopNav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box>
      <DarkModeSwitch />
      <TopNav />
      <Container>{children}</Container>
    </Box>
  );
}
