import { FC } from "react";
import {
  Accordion as ChakraAccordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Flex,
  Text,
  chakra,
} from "@chakra-ui/react";
import { BsPlusCircle } from "react-icons/bs";
import { BiMinusCircle } from "react-icons/bi";
import { TAccordion } from "./types";

export const Accordion: FC<TAccordion> = ({ items }) => {
  const PlusIcon = chakra(BsPlusCircle);
  const MinusIcon = chakra(BiMinusCircle);

  const displayItems = () =>
    items.map(({ title, content }, index) => (
      <AccordionItem key={index}>
        {({ isExpanded }) => (
          <>
            <AccordionButton>
              <Flex justify="space-between" w="100%" py={4}>
                <Text
                  color="charlestonGreen"
                  // textShadow="0.5px 0.5px navajoWhite"
                  fontSize="1.075rem"
                >
                  {title}
                </Text>
                {isExpanded ? (
                  <MinusIcon fontSize="lg" color="charlestonGreen" />
                ) : (
                  <PlusIcon fontSize="lg" color="charlestonGreen" />
                )}
              </Flex>
            </AccordionButton>
            <AccordionPanel>{content}</AccordionPanel>
          </>
        )}
      </AccordionItem>
    ));

  return <ChakraAccordion allowToggle>{displayItems()}</ChakraAccordion>;
};
