import {
  Flex,
  Text,
  Spacer,
  Button,
  HStack,
  Box,
  Container,
} from "@chakra-ui/react";

export const Nav = () => {
  return (
    <Box pos="absolute" top="38px" left={0} w="100%" fontSize="md">
      <Container
        d="flex"
        w="90%"
        margin="0 auto"
        maxW="1350px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text>Dome</Text>
        <Spacer />
        <HStack spacing={8}>
          <Button size="sm" variant="secondary">
            Login
          </Button>
          <Button size="sm">Get Started</Button>
        </HStack>
      </Container>
    </Box>
  );
};
