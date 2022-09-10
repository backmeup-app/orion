import { useState } from "react";
import { Box, Heading, SimpleGrid, GridItem, VStack } from "@chakra-ui/react";
import { Features, Slides } from "..";

export const About = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  return (
    <Box bg="ivory" color="ivory" boxSizing="border-box" w="100vw">
      <SimpleGrid bg="charlestonGreen" px={28} pt={20} pb={16} columns={12}>
        <GridItem colSpan={5}>
          <VStack spacing={10} align="flex-start">
            <Heading
              fontSize="2xl"
              lineHeight="1.575"
              textShadow="0.5px 0.5px navajoWhite"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tempus vehicula.
            </Heading>
            <Features
              selectedFeatureIndex={selectedFeature}
              handleFeatureClick={setSelectedFeature}
            />
          </VStack>
        </GridItem>
        <GridItem colSpan={1}></GridItem>
        <GridItem colSpan={6} d="flex" justifyContent="center">
          <Slides selectedFeatureIndex={selectedFeature} />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};
