import { Flex, Spacer, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex px={28} py={12} bg="charlestonGreen" color="white">
      <Text textShadow="0.5px 0.5px navajoWhite">DOME &copy; 2022</Text>
    </Flex>
  );
};
