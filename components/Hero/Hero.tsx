import {
  Flex,
  Spacer,
  VStack,
  HStack,
  Heading,
  Text,
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
      {/* <Flex pos="absolute" top="5%" left={0} px={5} w="100%">
        <Text>Dome</Text>
        <Spacer />
        <HStack spacing={4}>
          <Button>Get Started</Button>
        </HStack>
      </Flex> */}
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
    </Flex>
  );
};
