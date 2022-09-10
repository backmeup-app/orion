import { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import { Hero, About, Info, Faqs } from "../components";

const Index: NextPage = () => {
  return (
    <Box overflowX="hidden">
      <Hero />
      <About />
      <Info />
      <Faqs />
    </Box>
  );
};

export default Index;
