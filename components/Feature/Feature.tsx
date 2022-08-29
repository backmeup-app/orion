import { FC } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
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
      px={8}
      pt={6}
      pb={index === 0 || index === 2 ? 6 : 6}
      background={isActive ? "hsla(0, 0%, 100%, 0.02)" : "transparent"}
      opacity={!isActive ? 0.1 : 1}
      cursor="pointer"
      transition="all 0.5s ease-in"
      onClick={() => handleClick?.(index ?? 0)}
    >
      <Text mb={2} fontSize="16.5px" color={isActive ? "navajowhite" : "white"}>
        {heading}
      </Text>
      <Text fontSize="15px" lineHeight="taller">
        {description}
      </Text>
    </Flex>
  );
};
