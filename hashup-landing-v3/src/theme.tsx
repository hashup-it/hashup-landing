import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { Colors } from "./colors";

const fonts = { mono: `'Sora', normal` };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        margin: 0,
        padding: 0,
        fontFamily: "Sora",
        backgroundColor: "black",
        overflowX: "hidden",
      },
      a: {
        textDecoration: "none",
        color: "white",
      },
      button: {
        border: 0,
      },
      "h1, h2, h3, h4, h5, h6": {
        margin: 0,
      },
      ul: {
        padding: 0,
      },
      strong: {
        color: Colors.brandMain,
      },
    },
  },
});

export default theme;
