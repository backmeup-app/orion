import { useEffect, useContext } from "react";
import {
  Text,
  Spacer,
  Button,
  HStack,
  Box,
  Container,
  Image,
  chakra,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AppContext, TAppContext } from "../../contexts";

export const Nav = () => {
  const { browserWidth } = useContext<TAppContext>(AppContext);
  useEffect(() => {}, []);
  const HamburgerIcon = chakra(GiHamburgerMenu);

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
        <Image
          src="https://res.cloudinary.com/olamileke/image/upload/v1663418501/backmeup/assets/logos/logo_transparent_ligpzi.png"
          width="40"
          height="50px"
          pos="relative"
          top={1}
          left={-2}
          objectFit="cover"
        />
        <Spacer />
        {browserWidth && browserWidth >= 769 ? (
          <HStack spacing={8}>
            <Button size="sm" variant="secondary">
              Login
            </Button>
            <Button size="sm">Get Started</Button>
          </HStack>
        ) : (
          <Box p="4" rounded="full" bg="navajowhite" cursor="pointer">
            <HamburgerIcon color="charlestonGreen" fontSize="xl" />
          </Box>
        )}
      </Container>
    </Box>
  );
};
