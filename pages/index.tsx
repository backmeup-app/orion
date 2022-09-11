import { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import { Hero, About, Info, Faqs, Footer } from "../components";

const Index: NextPage = () => {
  return (
    <Box overflowX="hidden">
      <Hero />
      <About />
      <Info />
      <Faqs />
      <Footer />
    </Box>
  );
};

export default Index;
