import { useContext } from "react";
import { Flex, VStack, Heading, Text, Image, Button } from "@chakra-ui/react";
import { Nav } from "..";
import { AppContext, TAppContext } from "../../contexts";

export const Hero = () => {
  const { browserWidth } = useContext<TAppContext>(AppContext);

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
      <VStack
        width={{ base: "90vw", sm: "80vw", lg: "60vw" }}
        position="relative"
        top={{ base: "5%", sm: "-1%" }}
        spacing={6}
      >
        <Heading
          fontSize={{ base: "xl", sm: "3xl", md: "4xl" }}
          fontFamily="openSans"
          textAlign="center"
          color="charlestonGreen"
          lineHeight="tall"
        >
          Easily automate your file based backups today !
        </Heading>
        <Text
          textAlign="center"
          fontSize={{ base: "md", sm: "lg" }}
          w={{ base: "100%", md: "80%" }}
          lineHeight="tall"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus
          vehicula metus eu pharetra. Vestibulum molestie neque dolor. Sed eu
          neque facilisis lectus placerat rutrum
        </Text>
        <Button
          size={browserWidth && browserWidth >= 480 ? "lg" : "md"}
          fontSize="17px"
          position="relative"
          top={{ base: "4px", sm: "0" }}
        >
          Get Started
        </Button>
      </VStack>
      <Image
        pos="absolute"
        top={{ base: "20%", sm: "16vh" }}
        left="8vw"
        boxSize={{ base: 28, sm: 40 }}
        objectFit="contain"
        alt=""
        src="https://res.cloudinary.com/olamileke/image/upload/v1662835149/backmeup/assets/hero/bloom-dotted-motion-line_vrhrb1.png"
      />
      <Image
        pos="absolute"
        bottom="10vh"
        left="6vw"
        boxSize="32"
        alt=""
        display={{ base: "none", sm: "inline" }}
        src="https://res.cloudinary.com/olamileke/image/upload/v1662943091/backmeup/assets/hero/sammy-line-two-black-lines-3_ecdyqt.png"
        objectFit="contain"
      />
      <Image
        pos="absolute"
        bottom={{ base: "1%", sm: "10%" }}
        right="6vw"
        boxSize={{ base: 32, sm: 40 }}
        alt=""
        objectFit="contain"
        src="https://res.cloudinary.com/olamileke/image/upload/v1662942213/backmeup/assets/hero/rubber-lines-31_hhdxhu.png"
      />
    </Flex>
  );
};
