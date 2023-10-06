import { extendTheme, useBreakpointValue } from "@chakra-ui/react";

const baseTheme = extendTheme({
  
  styles: {
    global: () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const isMobileBreakpoint = useBreakpointValue({ base: true, lg: false });
      return {
        "html, body": {
          boxSizing: "border-box",
          // fontSize: isMobileBreakpoint ? "sm" : "md",
          fontFamily: `Arial`,
          color: "#003534",
          bgGradient: "linear(#103f27 30%, #0f4624, #1f7544);",
          bgRepeat: "no-repeat",
          minH: "100vh"
        },
      };
    },
  },
})

export default baseTheme;