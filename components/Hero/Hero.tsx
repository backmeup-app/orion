import {
  Flex,
  Spacer,
  VStack,
  HStack,
  Heading,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      justify="center"
      align="center"
      pos="relative"
      bg="#FFFAFA"
    >
      <Flex pos="absolute" top="5%" left={0} px={12} w="100%" fontSize="md">
        <Text>Dome</Text>
        <Spacer />
        <HStack spacing={8}>
          <Button size="sm" variant="secondary">
            Login
          </Button>
          <Button size="sm">Get Started</Button>
        </HStack>
      </Flex>
      <VStack width="60vw" spacing={6}>
        <Heading fontSize="4xl" fontFamily="openSans" color="charlestonGreen">
          Easily automate your file based backups today !
        </Heading>
        <Text textAlign="center" fontSize="lg" w="80%" lineHeight="tall">
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
        boxSize="24"
        src="https://res.cloudinary.com/olamileke/image/upload/v1661728612/backmeup/assets/hero/jelly-two-red-lines-1_d6didl.png"
      />
      <Image
        pos="absolute"
        bottom="10vh"
        left="6vw"
        boxSize="28"
        src=" https://res.cloudinary.com/olamileke/image/upload/v1661729382/backmeup/assets/hero/purr-portal_gh4lny.png"
      />
      <Image
        pos="absolute"
        bottom="10vh"
        right="6vw"
        boxSize="28"
        src="https://res.cloudinary.com/olamileke/image/upload/v1661729013/backmeup/assets/hero/rubber-lines-25_wicoef.png"
      />
    </Flex>
  );
};
