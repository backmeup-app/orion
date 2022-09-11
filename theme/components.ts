import { ComponentStyleConfig } from "@chakra-ui/theme";

export const components: { [key: string]: ComponentStyleConfig } = {
  Text: {
    baseStyle: {
      fontFamily: "openSans",
      textAlign: "left",
    },
  },
  Heading: {
    baseStyle: {
      fontFamily: "openSans",
    },
  },
  Button: {
    baseStyle: {
      py: 6,
      borderRadius: 0,
      transition: "all 0.3s ease-in",
      fontFamily: "openSans",
      fontWeight: 400,
      fontSize: "sm",

      _focus: {
        boxShadow: "none",
      },
    },
    variants: {
      primary: {
        background: "charlestonGreen",
        color: "white",
        boxShadow: " 0px 9px 0px -5px navajoWhite",
        opacity: 1,

        _hover: {
          background: "gray.700",
        },

        _focus: {
          boxShadow: " 0px 9px 0px -5px navajoWhite",
        },

        _loading: {
          opacity: 1,
          boxShadow: " 0px 9px 0px -5px navajoWhite",

          _hover: {
            background: "gray.700",
          },
        },
      },
      secondary: {
        background: "ivory",
        border: "1px solid #1E2D2F",
        color: "#1E2D2F",
        textShadow: "0.5px 0.5px navajoWhite",
        fontWeight: "bold",

        _hover: {
          background: "yellow.500",
        },
      },
      danger: {
        background: "red.500",
        color: "white",
      },
    },
    sizes: {
      sm: {
        px: 4,
        py: 5,
      },
      lg: {
        py: 7,
        // px: 4,
      },
    },
    defaultProps: {
      variant: "primary",
    },
  },
  Accordion: {
    baseStyle: {
      container: {
        border: "none",
        mb: 1,
        borderWidth: "1px",
        borderStyle: "ridge",
        borderColor: "navajoWhite",
      },
      item: {
        bg: "yellow",
        _focus: {
          bg: "none",
        },
      },
      button: {
        px: 6,
        _focus: {
          boxShadow: "none",
        },

        _hover: {
          bg: "none",
        },
      },
      panel: {
        px: 6,
        pt: 1,
        pb: 5,
      },
    },
  },
};
