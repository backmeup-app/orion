import { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import { Hero, About } from "../components";

const Index: NextPage = () => {
  return (
    <Box overflowX="hidden">
      <Hero />
      <About />
    </Box>
  );
};

export default Index;
