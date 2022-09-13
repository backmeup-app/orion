import { useState, useContext } from "react";
import {
  Box,
  Heading,
  Container,
  SimpleGrid,
  GridItem,
  VStack,
} from "@chakra-ui/react";
import { Features, Slides } from "..";
import { AppContext, TAppContext } from "../../contexts";

export const About = () => {
  const { browserWidth } = useContext<TAppContext>(AppContext);
  const [selectedFeature, setSelectedFeature] = useState(0);

  const FeaturesContent = () => (
    <VStack
      spacing={{ base: 6, md: 10 }}
      mt={{ sm: 8, md: 10, lg: 0 }}
      align={{ base: "center", lg: "flex-start" }}
      width={{ base: "100%", lg: "fit-content" }}
    >
      <Heading
        fontSize={{ base: "xl", md: "2xl" }}
        lineHeight="tall"
        textShadow="0.5px 0.5px navajoWhite"
        textAlign="center"
      >
        Lorem ipsum dolor sit amet, consectetur.
      </Heading>
      <Features
        selectedFeatureIndex={selectedFeature}
        handleFeatureClick={setSelectedFeature}
      />
    </VStack>
  );

  return (
    <Box bg="charlestonGreen" color="ivory" py={{ base: 12, sm: 12, xl: 20 }}>
      <Container w="90%" margin="0 auto" maxW="1350px">
        <SimpleGrid columns={12}>
          {browserWidth && browserWidth >= 480 && (
            <GridItem colSpan={{ base: 12, lg: 5 }}>
              {browserWidth && browserWidth >= 1025 ? (
                <FeaturesContent />
              ) : (
                <Slides selectedFeatureIndex={selectedFeature} />
              )}
            </GridItem>
          )}
          <GridItem colSpan={{ base: 0, lg: 1 }}></GridItem>
          <GridItem
            colSpan={{ base: 12, lg: 6 }}
            d="flex"
            justifyContent="center"
          >
            {browserWidth && browserWidth >= 1025 ? (
              <Slides selectedFeatureIndex={selectedFeature} />
            ) : (
              <FeaturesContent />
            )}
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
