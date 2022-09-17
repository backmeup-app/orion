import { FC } from "react";
import { Flex, VStack, Button } from "@chakra-ui/react";
import { navigate } from "../../utilities";
import { TSidebar } from ".";

export const Sidebar: FC<TSidebar> = ({ isVisible }) => {
  return (
    <Flex
      position="fixed"
      top={0}
      right={{ base: isVisible ? 0 : "-100vw", sm: isVisible ? 0 : "-50vw" }}
      bg="ivory"
      height="100vh"
      width={{ base: "100vw", sm: "50vw" }}
      justify="center"
      align="center"
      transition="all 0.3s ease-in"
      zIndex="10"
    >
      <VStack spacing={7} pos="relative" top={{ base: 0, sm: "-3%" }}>
        <Button
          size="lg"
          variant="secondary"
          onClick={() => {
            navigate("/session/new");
          }}
        >
          Login to Dome
        </Button>
        <Button
          size="lg"
          onClick={() => {
            navigate("/accounts/new");
          }}
        >
          Create Account
        </Button>
      </VStack>
    </Flex>
  );
};
