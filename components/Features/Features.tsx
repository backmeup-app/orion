import { FC } from "react";
import { VStack, Box } from "@chakra-ui/react";
import { Feature } from "..";
import { TFeatures } from "./types";
import { features } from "./data";

export const Features: FC<TFeatures> = ({
  selectedFeatureIndex,
  handleFeatureClick,
}) => {
  return (
    <Box>
      <VStack mt={1} align="flex-start" w="80%">
        {features.map((feature, index) => (
          <Feature
            key={index}
            {...feature}
            isActive={index === selectedFeatureIndex}
            index={index}
            handleClick={handleFeatureClick}
          />
        ))}
      </VStack>
    </Box>
  );
};
