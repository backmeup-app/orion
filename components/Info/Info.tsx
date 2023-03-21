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
import { navigate } from "../../utilities";

export const Info = () => {
  return (
    <Box bg="ivory" py={{ base: 6, sm: 10, md: 20 }} pos="relative">
      <Container w="90%" margin="0 auto" maxW="1300px">
        <SimpleGrid columns={12}>
          <GridItem colSpan={{ base: 12, md: 5 }}>
            <Flex
              bg="charlestonGreen"
              boxShadow={{ base: "none", lg: "0px 11px 0px -5px navajoWhite" }}
              alignItems="center"
              justify="center"
              py={{ base: 12, md: 28 }}
            >
              <Image
                src="https://res.cloudinary.com/olamileke/image/upload/v1672059407/dome/assets/orion/juicy-girl-is-working-on-laptop-at-a-remote-job_rbrsrj.gif"
                objectFit="contain"
                boxSize="80"
                alt=""
              />
            </Flex>
          </GridItem>
          <GridItem colSpan={{ base: 0, md: 1 }}></GridItem>
          <GridItem
            colSpan={{ base: 12, md: 6 }}
            d="flex"
            alignItems="center"
            pos="relative"
          >
            <VStack
              alignItems={{ base: "center", md: "flex-start" }}
              spacing={4}
              pos="relative"
              mt={{ base: 6, sm: 8, md: 0 }}
              top={{ base: "0", top: "5%" }}
            >
              <Heading
                fontSize={{ base: "xl", sm: "1.35rem", md: "2xl" }}
                fontFamily="openSans"
                color="charlestonGreen"
                textAlign={{ base: "center", sm: "left" }}
                lineHeight="tall"
              >
                Go from zero to hero with your backups
              </Heading>
              <Text
                fontSize="md"
                lineHeight="taller"
                w={{ base: "100%", md: "80%" }}
                px={0}
              >
                Take full power into your hands and customize your backups.
                Decide how, when and whether to receive notifications for the
                different resources. Temporarily disable backups in your
                dashboard. Decide how long your backups are to be stored for.
                Its all in your hands.
              </Text>
              <Button
                pos="relative"
                top={2}
                onClick={() => {
                  navigate("/accounts/new");
                }}
              >
                Get Started
              </Button>
            </VStack>
            <Image
              src="https://res.cloudinary.com/olamileke/image/upload/v1672059306/dome/assets/orion/crayon-curly-line-23_ifpmnl.png"
              alt=""
              pos="absolute"
              bottom="-5%"
              right="0%"
              boxSize="32"
              objectFit="contain"
              display={{ base: "none", md: "inline" }}
              zIndex="base"
            />
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
