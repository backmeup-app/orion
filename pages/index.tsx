import { NextPage } from "next";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Hero, About, Info, Faqs, Footer } from "../components";

const Index: NextPage = () => {
  return (
    <Box overflowX="hidden">
      <Head>
        <title>Dome | The Bonafide Backup Tool</title>
      </Head>
      <Hero />
      <About />
      <Info />
      <Faqs />
      <Footer />
    </Box>
  );
};

export default Index;
