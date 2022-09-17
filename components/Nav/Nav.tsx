import { useState, useContext } from "react";
import {
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
import { navigate } from "../../utilities";
import { Sidebar } from "..";

export const Nav = () => {
  const { browserWidth } = useContext<TAppContext>(AppContext);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
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
          zIndex="20"
        />
        <Spacer />
        {browserWidth && browserWidth >= 769 ? (
          <HStack spacing={8}>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => {
                navigate("/session/new");
              }}
            >
              Signin
            </Button>
            <Button
              size="sm"
              onClick={() => {
                navigate("/accounts/new");
              }}
            >
              Signup
            </Button>
          </HStack>
        ) : (
          <Box
            p="4"
            rounded="full"
            bg="navajowhite"
            cursor="pointer"
            onClick={() => {
              setIsSidebarVisible(!isSidebarVisible);
            }}
            zIndex="20"
          >
            <HamburgerIcon color="charlestonGreen" fontSize="xl" />
          </Box>
        )}
        {browserWidth && browserWidth < 769 && (
          <>
            <Sidebar isVisible={isSidebarVisible} />
            <Box
              pos="fixed"
              top={0}
              left={0}
              width="100vw"
              height="100vh"
              bg="rgba(0,0,0,0.06)"
              opacity={Number(isSidebarVisible)}
              onClick={() => {
                setIsSidebarVisible(false);
              }}
              transition="opacity 0.3s ease-in"
              zIndex={5}
            />
          </>
        )}
      </Container>
    </Box>
  );
};
