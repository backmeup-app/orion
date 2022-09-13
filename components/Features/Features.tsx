import { FC } from "react";
import { VStack } from "@chakra-ui/react";
import { Feature } from "..";
import { TFeatures } from "./types";
import { features } from "./data";

export const Features: FC<TFeatures> = ({
  selectedFeatureIndex,
  handleFeatureClick,
}) => {
  return (
    <VStack
      align={{ base: "center", lg: "flex-start" }}
      w={{ base: "100%", xl: "80%" }}
    >
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
  );
};
