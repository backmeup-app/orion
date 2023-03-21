import { FC } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { TFeature } from "./types";

export const Feature: FC<TFeature> = ({
  heading,
  description,
  isActive,
  index,
  handleClick,
}) => {
  return (
    <Flex
      direction="column"
      justify="center"
      px={{ base: 1, sm: 8 }}
      py={{ base: 5, sm: 6 }}
      background={{
        base: "transparent",
        sm: isActive ? "hsla(0, 0%, 100%, 0.02)" : "transparent",
      }}
      opacity={{ base: 1, sm: isActive ? 1 : 0.1 }}
      cursor="pointer"
      transition="all 0.5s ease-in"
      onClick={() => handleClick?.(index ?? 0)}
      w={{ base: "100%", lg: "fit-content" }}
    >
      <Text
        mb={2}
        fontSize={{ base: "15.2px", sm: "16.5" }}
        color={{ base: "white", sm: isActive ? "navajowhite" : "white" }}
      >
        {heading}
      </Text>
      <Text fontSize={{ base: "14px", sm: "15px" }} lineHeight="taller">
        {description}
      </Text>
    </Flex>
  );
};
