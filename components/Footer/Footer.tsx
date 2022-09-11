import { Flex, Spacer, HStack, Text, chakra } from "@chakra-ui/react";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";

export const Footer = () => {
  const Anchor = chakra("a");
  const MailIcon = chakra(MdMail);
  const FacebookIcon = chakra(FaFacebookF);
  const TwitterIcon = chakra(AiOutlineTwitter);
  const InstagramIcon = chakra(AiFillInstagram);

  return (
    <Flex px={28} py={12} bg="charlestonGreen" color="white" align="center">
      <Text>DOME &copy; {new Date().getFullYear()}</Text>
      <Spacer />
      <HStack>
        <Anchor p={4} background="hsla(0, 0%, 100%, 0.02)" borderRadius="full">
          <MailIcon />
        </Anchor>
        <Anchor p={4} background="hsla(0, 0%, 100%, 0.02)" borderRadius="full">
          <FacebookIcon />
        </Anchor>
        <Anchor p={4} background="hsla(0, 0%, 100%, 0.02)" borderRadius="full">
          <TwitterIcon />
        </Anchor>
        <Anchor p={4} background="hsla(0, 0%, 100%, 0.02)" borderRadius="full">
          <InstagramIcon />
        </Anchor>
      </HStack>
    </Flex>
  );
};
