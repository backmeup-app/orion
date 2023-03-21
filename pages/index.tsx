import { GetServerSideProps, NextPage } from "next";
import { Box } from "@chakra-ui/react";
import { Hero, About, Info, Faqs, Footer, Meta } from "../components";

const Index: NextPage = () => {
  return (
    <Box overflowX="hidden">
      <Meta />
      <Hero />
      <About />
      <Info />
      <Faqs />
      <Footer />
    </Box>
  );
};

export default Index;
