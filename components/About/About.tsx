import {
  Box,
  Heading,
  SimpleGrid,
  GridItem,
  Button,
  VStack,
} from "@chakra-ui/react";

export const About = () => {
  return (
    <Box p={4} bg="ivory" color="white" boxSizing="border-box" w="100vw">
      <SimpleGrid bg="charlestonGreen" h="600px" px={20} py={24} columns={12}>
        <GridItem colSpan={5}>
          <VStack spacing={8} align="flex-start">
            <Heading fontSize="3xl" color="ivory" lineHeight="1.575">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tempus vehicula.
            </Heading>
            <Button variant="secondary">Get Started</Button>
          </VStack>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};
