import { useState } from "react";
import {
  Box,
  Heading,
  Container,
  SimpleGrid,
  GridItem,
  VStack,
} from "@chakra-ui/react";
import { Features, Slides } from "..";

export const About = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  return (
    <Box bg="charlestonGreen" color="ivory" pt={20} pb={16}>
      <Container w="90%" margin="0 auto" maxW="1350px">
        <SimpleGrid columns={12}>
          <GridItem colSpan={{ base: 12, lg: 5 }}>
            <VStack spacing={10} align="flex-start">
              <Heading
                fontSize="2xl"
                lineHeight="1.575"
                textShadow="0.5px 0.5px navajoWhite"
              >
                Lorem ipsum dolor sit amet, consectetur.
              </Heading>
              <Features
                selectedFeatureIndex={selectedFeature}
                handleFeatureClick={setSelectedFeature}
              />
            </VStack>
          </GridItem>
          <GridItem colSpan={{ base: 0, lg: 1 }}></GridItem>
          <GridItem colSpan={{ base: 12, lg: 5 }}>
            <Slides selectedFeatureIndex={selectedFeature} />
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
