import { FC, useEffect, useRef } from "react";
import { HStack, Image, Box } from "@chakra-ui/react";
import { TSlides } from "./types";

export const Slides: FC<TSlides> = ({ selectedFeatureIndex }) => {
  useEffect(() => {
    if (slidesRef?.current) {
      const width = slidesRef.current.clientWidth;
      slidesRef.current.scrollLeft =
        selectedFeatureIndex * width + selectedFeatureIndex * 48;
    }
  }, [selectedFeatureIndex]);

  const slidesRef = useRef<HTMLDivElement | null>(null);

  return (
    <HStack
      ref={slidesRef}
      spacing={12}
      scrollBehavior="smooth"
      overflowX="scroll"
      css={{
        "&::-webkit-scrollbar": {
          width: "0",
          height: "0",
        },
      }}
    >
      {new Array(3).fill("").map((_, index) => (
        <Box
          key={index}
          p={8}
          bg={
            selectedFeatureIndex === index
              ? "hsla(0, 0%, 100%, 0.02)"
              : "transparent"
          }
          flexShrink={0}
          width="100%"
        >
          <Image
            src="https://res.cloudinary.com/olamileke/image/upload/v1672059645/dome/assets/orion/Screenshot_37_srit9r.png"
            objectFit="contain"
            alt=""
          />
        </Box>
      ))}
    </HStack>
  );
};
