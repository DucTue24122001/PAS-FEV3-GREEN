import { extendTheme, useBreakpointValue } from "@chakra-ui/react";
import { colors } from "./colors";

const baseTheme = extendTheme({
  colors,
  components: {
    Button: {
      variants: {
       
      }
    },
    Input: {
      variants: {
        "default": {
          borderRadius: "0.25rem",
          bg: "white",
        }
      },
    }
  },
  styles: {
    global: () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const isMobileBreakpoint = useBreakpointValue({ base: true, lg: false });
      return {
        "html, body": {
          boxSizing: "border-box",
          // fontSize: isMobileBreakpoint ? "sm" : "md",
          fontFamily: `'Poppins', sans-serif`,
          color: "#000",
          bgGradient: "linear(#000435 30%, #000549, #000a83);",
          bgRepeat: "no-repeat",
          minH: "100vh",
          overflowX: "clip"
        },
      };
    },
  },
})

export default baseTheme;