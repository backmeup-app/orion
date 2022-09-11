import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { Accordion } from "..";
import { faqs } from "./faqs";

export const Faqs = () => {
  return (
    <Flex
      bg="ivory"
      flexDirection="column"
      justify="center"
      align="center"
      px={28}
      pt={12}
      pb={24}
    >
      <Heading color="charlestonGreen" fontSize="2xl" textAlign="center" mb={8}>
        Frequently Asked Questions
      </Heading>
      <Box w="80%">
        <Accordion items={faqs} />
      </Box>
    </Flex>
  );
};
