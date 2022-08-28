import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { components } from "./components";
import { sizes } from "./sizes";
import { styles } from "./styles";
import { typography } from "./typography";

export const theme = extendTheme({
  components,
  styles,
  colors,
  sizes,
  ...typography,
});
