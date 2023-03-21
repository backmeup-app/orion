import { FC } from "react";
import {
  Accordion as ChakraAccordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  Flex,
  Text,
  chakra,
} from "@chakra-ui/react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { TAccordion } from "./types";

export const Accordion: FC<TAccordion> = ({ items }) => {
  const PlusIcon = chakra(AiOutlinePlus);
  const MinusIcon = chakra(AiOutlineMinus);

  const displayItems = () =>
    items.map(({ title, content }, index) => (
      <AccordionItem key={index} borderBottomWidth={"1px !important"}>
        {({ isExpanded }) => (
          <>
            <AccordionButton px={{ sm: 5 }}>
              <Flex
                justify="space-between"
                align="center"
                w="100%"
                py={{ base: 3 }}
              >
                <Text
                  color="charlestonGreen"
                  fontSize={{ base: "1rem", sm: "1.021rem" }}
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
            <AccordionPanel pb={5} px={{ sm: 5 }}>
              <Text fontSize={{ base: "1rem", sm: "md" }} lineHeight="taller">
                {content}
              </Text>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    ));

  return (
    <ChakraAccordion allowToggle px={{ base: 3, sm: 0 }}>
      {displayItems()}
    </ChakraAccordion>
  );
};
