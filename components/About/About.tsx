import { useState } from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  GridItem,
  Button,
  VStack,
} from "@chakra-ui/react";
import { Features } from "..";

export const About = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  return (
    <Box bg="ivory" color="ivory" boxSizing="border-box" w="100vw">
      <SimpleGrid bg="charlestonGreen" px={28} py={24} columns={12}>
        <GridItem colSpan={5}>
          <VStack spacing={10} align="flex-start">
            <Heading
              fontSize="3xl"
              lineHeight="1.575"
              textShadow="0.5px 0.5px navajoWhite"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tempus vehicula.
            </Heading>
            <Button variant="secondary">Get Started</Button>
            <Features
              selectedFeatureIndex={selectedFeature}
              handleFeatureClick={setSelectedFeature}
            />
          </VStack>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};
