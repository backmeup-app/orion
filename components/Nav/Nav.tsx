import { useContext } from "react";
import { Spacer, Button, HStack, Box, Container, Text } from "@chakra-ui/react";
import { AppContext, TAppContext } from "../../contexts";
import { navigate } from "../../utilities";

export const Nav = () => {
  const { browserWidth } = useContext<TAppContext>(AppContext);

  return (
    <Box
      pos="absolute"
      top={{ base: "33px", sm: "38px" }}
      left={0}
      w="100%"
      fontSize="md"
    >
      <Container
        d="flex"
        w="90%"
        margin="0 auto"
        maxW="1300px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fontFamily="oswald" fontSize="lg">
          DOME
        </Text>
        <Spacer />
        <HStack spacing={6}>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => {
              navigate("/session/new");
            }}
          >
            Signin
          </Button>
          {browserWidth && browserWidth >= 769 && (
            <Button
              size="sm"
              onClick={() => {
                navigate("/accounts/new");
              }}
            >
              Signup
            </Button>
          )}
        </HStack>
      </Container>
    </Box>
  );
};
