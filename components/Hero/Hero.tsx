import { Flex, VStack, Heading, Text, Image, Button } from "@chakra-ui/react";
import { Nav } from "..";

export const Hero = () => {
  return (
    <Flex
      w="100vw"
      h={{ base: "70vh", lg: "100vh" }}
      justify="center"
      align="center"
      pos="relative"
      bg="ivory"
    >
      <Nav />
      <VStack width={{ base: "80vw", lg: "60vw" }} spacing={6}>
        <Heading
          fontSize={{ base: "3xl", md: "4xl" }}
          fontFamily="openSans"
          textAlign="center"
          color="charlestonGreen"
          lineHeight="tall"
        >
          Easily automate your file based backups today !
        </Heading>
        <Text
          textAlign="center"
          fontSize="lg"
          w={{ base: "100%", md: "80%" }}
          lineHeight="tall"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus
          vehicula metus eu pharetra. Vestibulum molestie neque dolor. Sed eu
          neque facilisis lectus placerat rutrum
        </Text>
        <Button size="lg" fontSize="17px">
          Get Started
        </Button>
      </VStack>
      <Image
        pos="absolute"
        top="16vh"
        left="8vw"
        // display={{ base: "none", lg: "inline" }}
        boxSize="40"
        objectFit="contain"
        alt=""
        src="https://res.cloudinary.com/olamileke/image/upload/v1662835149/backmeup/assets/hero/bloom-dotted-motion-line_vrhrb1.png"
      />
      <Image
        pos="absolute"
        bottom="10vh"
        left="6vw"
        // display={{ base: "none", lg: "inline" }}
        boxSize="32"
        alt=""
        src="https://res.cloudinary.com/olamileke/image/upload/v1662943091/backmeup/assets/hero/sammy-line-two-black-lines-3_ecdyqt.png"
        objectFit="contain"
      />
      <Image
        pos="absolute"
        bottom="10vh"
        right="6vw"
        // display={{ base: "none", lg: "inline" }}
        boxSize="40"
        alt=""
        objectFit="contain"
        src="https://res.cloudinary.com/olamileke/image/upload/v1662942213/backmeup/assets/hero/rubber-lines-31_hhdxhu.png"
      />
    </Flex>
  );
};
