import { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import { Hero, About, Info } from "../components";

const Index: NextPage = () => {
  return (
    <Box overflowX="hidden">
      <Hero />
      <About />
      <Info />
    </Box>
  );
};

export default Index;
