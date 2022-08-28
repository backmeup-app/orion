import { Flex, VStack, Heading, Button } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      justify="center"
      align="center"
      //   bg="rgba(247, 219, 167, 0.3)"
      bg="#FFFAFA"
    >
      <VStack width="60vw" spacing={10}>
        <Heading fontSize="4xl" fontFamily="openSans" color="charlestonGreen">
          Easily automate your file based backups today !
        </Heading>
        <Button size="lg" fontSize="17px">
          Get Started
        </Button>
      </VStack>
    </Flex>
  );
};
