import {
  SimpleGrid,
  GridItem,
  VStack,
  Heading,
  Text,
  Flex,
  Image,
  Button,
  Box,
  Container,
} from "@chakra-ui/react";

export const Info = () => {
  return (
    <Box bg="ivory" py={20} pos="relative">
      <Container w="90%" margin="0 auto" maxW="1350px">
        <SimpleGrid columns={12}>
          <GridItem colSpan={5}>
            <Flex
              bg="charlestonGreen"
              boxShadow="0px 11px 0px -5px navajoWhite"
              alignItems="center"
              justify="center"
              py={28}
            >
              <Image
                src="https://res.cloudinary.com/olamileke/image/upload/v1662825945/backmeup/assets/hero/juicy-girl-is-working-on-laptop-at-a-remote-job_gqkkz8.gif"
                objectFit="contain"
                boxSize="80"
              />
            </Flex>
          </GridItem>
          <GridItem colSpan={1}></GridItem>
          <GridItem colSpan={6} d="flex" alignItems="center" pos="relative">
            <VStack alignItems="flex-start" spacing={4} pos="relative" top="5%">
              <Heading
                fontSize="2xl"
                fontFamily="openSans"
                color="charlestonGreen"
                zIndex="modal"
              >
                Go from zero to hero with your backups
              </Heading>
              <Text fontSize="md" lineHeight="tall" w="80%">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                tempus vehicula metus eu pharetra Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nunc tempus vehicula metus eu
                pharetra
              </Text>
              <Button pos="relative" top={2}>
                Get Started
              </Button>
            </VStack>
            <Image
              src="https://res.cloudinary.com/olamileke/image/upload/v1662835149/backmeup/assets/hero/bloom-dotted-motion-line_vrhrb1.png"
              pos="absolute"
              top="-5%"
              left="0"
              boxSize="52"
              objectFit="contain"
              zIndex="base"
            />
            <Image
              src="https://res.cloudinary.com/olamileke/image/upload/v1662835277/backmeup/assets/hero/crayon-curly-line-23_pqhzg5.png"
              pos="absolute"
              bottom="-5%"
              right="0%"
              boxSize="32"
              objectFit="contain"
              zIndex="base"
            />
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
