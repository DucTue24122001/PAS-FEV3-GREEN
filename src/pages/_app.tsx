import "@/styles/globals.css";
import "@/styles/slider.css"
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Navbar from "../../components/layout/Navbar";
import baseTheme from "../../components/chakra-ui/theme";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MobileMenu from "../../components/layout/MobileMenu";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={baseTheme}>
      <Navbar />
      <Component {...pageProps} />
      <MobileMenu/>
    </ChakraProvider>
  );
}
