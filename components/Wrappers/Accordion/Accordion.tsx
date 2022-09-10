import { FC } from "react";
import {
  Accordion as ChakraAccordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Flex,
  Text,
} from "@chakra-ui/react";
import { TAccordion } from "./types";

export const Accordion: FC<TAccordion> = ({ items }) => {
  const displayItems = () =>
    items.map(({ title, content }, index) => (
      <AccordionItem key={index}>
        <AccordionButton>
          <Flex justify="space-between" w="100%" py={4}>
            <Text color="charlestonGreen" fontSize="1.075rem" fontWeight="bold">
              {title}
            </Text>
            <AccordionIcon color="charlestonGreen" fontSize="xl" />
          </Flex>
        </AccordionButton>
        <AccordionPanel>{content}</AccordionPanel>
      </AccordionItem>
    ));

  return <ChakraAccordion>{displayItems()}</ChakraAccordion>;
};
