import "@/styles/globals.css";
import "@/styles/slider.css";
import "@/styles/calendar.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Navbar from "../../components/layout/Navbar";
import baseTheme from "../../components/chakra-ui/theme";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MobileMenu from "../../components/layout/MobileMenu";
import { TenancyProvider } from "../../hook/TenancyProvider";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { appWithI18Next } from "ni18n";
import { ni18nConfig } from "../../ni18n.config";
import 'react-calendar/dist/Calendar.css';
import { ViewportProvider } from "../../hook/ViewportProvider";


 function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={baseTheme} toastOptions={{ defaultOptions: { position: 'bottom', duration: 3000, isClosable: true } }}>
        <ViewportProvider>
          <TenancyProvider>
            <Navbar />
            <Component {...pageProps} />
            <MobileMenu/>
          </TenancyProvider>
        </ViewportProvider>
      </ChakraProvider>
    </Provider>
  );
}

export default appWithI18Next(App, ni18nConfig);

