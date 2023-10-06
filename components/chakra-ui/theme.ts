import { extendTheme, useBreakpointValue } from "@chakra-ui/react";

const baseTheme = extendTheme({
  fontSizes: {
    "2xs": "0.5rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem", // 16px
    lg: "1.125rem",
    xl: "1.25rem",
    "1.5xl": "1.375rem",
    "2xl": "1.5rem",
  },
  colors: {
    white: "#fff",
    white1: "#deedfb",
    white5: "#f6fbff",
    black: {
      0: "#000",
      2: "rgba(118,171,214,.4)",
    },
    blue: {
      0: "#1e88e5",
      1: "#1b84f0",
      2: "#0477bd",
      3: "#61ceff",
      5: "#1b74f0",
      6: "#61cfff",
      7: "rgba(97,206,255,.102)",
      8: "#9bd1fd",
      9: "#deeefb",
      10: "#bedcef",
      11: "#eef7ff",
      12: "#1b75f0",
      13: "#deebfb",
    },
    grey: {
      0: "#2f3742",
      1: "#4d595e",
      2: "#caddee",
      4: "rgba(190,215,239,.6)",
      5: "#8297a5",
      6: "rgba(238,247,255,.502)",
      7: "#47515f",
    },
    red: {
      0: "#dc2326",
      1: "#e53",
      2: "#fc0505",
      3: "#ea6000",
    },
    orange: {
      0: "#f09b1b",
      1: "#fe9e0d",
      2: "#ff7a00",
    },
    bg: "linear-gradient(0deg, #0e5931, #024921);",
    table: "#c6c6c6",
    green1: "#36c96c",
    error: "#ce4242",
    lightGray: "#aeaeae",
    font:"rgba(0, 0, 0, 0.87)",
    secondary: "#303030",
  },
  styles: {
    global: () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const isMobileBreakpoint = useBreakpointValue({ base: true, lg: false });
      return {
        "html, body": {
          boxSizing: "border-box",
          fontSize: isMobileBreakpoint ? "sm" : "md",
          fontFamily: `Arial`,
          color: "#003534",
          bgGradient: "linear(#103f27 30%, #0f4624, #1f7544);",
        },
      };
    },
  },
})

export default baseTheme;