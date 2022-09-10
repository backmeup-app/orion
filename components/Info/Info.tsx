import {
  SimpleGrid,
  GridItem,
  Box,
  VStack,
  Heading,
  Text,
  Flex,
  Image,
  Button,
} from "@chakra-ui/react";

export const Info = () => {
  return (
    <SimpleGrid bg="ivory" py={20} px={28} columns={12}>
      <GridItem colSpan={5}>
        <Flex bg="charlestonGreen" alignItems="center" justify="center" py={28}>
          <Image
            src="https://res.cloudinary.com/olamileke/image/upload/v1662825945/backmeup/assets/hero/juicy-girl-is-working-on-laptop-at-a-remote-job_gqkkz8.gif"
            objectFit="contain"
            boxSize="80"
          />
        </Flex>
      </GridItem>
      <GridItem colSpan={1}></GridItem>
      <GridItem colSpan={6} d="flex" alignItems="center">
        <VStack alignItems="flex-start" spacing={4} pos="relative" top="-5%">
          <Heading fontSize="2xl" fontFamily="openSans" color="charlestonGreen">
            Go from zero to hero with your backups
          </Heading>
          <Text fontSize="md" lineHeight="tall" w="80%">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus
            vehicula metus eu pharetra Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc tempus vehicula metus eu pharetra
          </Text>
          <Button pos="relative" top={2}>
            Get Started
          </Button>
        </VStack>
      </GridItem>
    </SimpleGrid>
  );
};
