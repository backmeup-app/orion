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
      <AccordionItem
        key={index}
        borderBottomWidth={{ base: "0px !important", sm: "1px !important" }}
      >
        {({ isExpanded }) => (
          <>
            <AccordionButton px={{ base: 2, sm: 6 }}>
              <Flex
                justify="space-between"
                align="center"
                w="100%"
                py={{ base: 3, sm: 4 }}
              >
                <Text
                  color="charlestonGreen"
                  fontSize="1.021rem"
                  lineHeight="taller"
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
            <AccordionPanel pb={{ base: 0, sm: 5 }} px={{ base: 2, sm: 6 }}>
              <Text fontSize="md" lineHeight="taller">
                {content}
              </Text>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    ));

  return <ChakraAccordion allowToggle>{displayItems()}</ChakraAccordion>;
};
