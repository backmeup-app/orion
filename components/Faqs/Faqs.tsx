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
      <Heading
        color="charlestonGreen"
        fontSize="2xl"
        textAlign="center"
        mb={8}
        pos="relative"
        // textShadow="2px 1px navajoWhite"
      >
        Frequently Asked Questions
        {/* <Image
          src="https://res.cloudinary.com/olamileke/image/upload/v1662861664/backmeup/assets/hero/juicy-painting-with-strokes_iv5cmt.png"
          boxSize="24"
          top="-32px"
          pos="absolute"
        /> */}
      </Heading>
      <Box w="80%">
        <Accordion items={faqs} />
      </Box>
    </Flex>
  );
};
