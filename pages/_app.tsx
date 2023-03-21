import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";
import { AppContext } from "../contexts";

function MyApp({ Component, pageProps }: AppProps) {
  const [browserWidth, setBrowserWidth] = useState<number>();

  useEffect(() => {
    setBrowserWidth(window.innerWidth);

    window.addEventListener("resize", () => {
      setBrowserWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <AppContext.Provider value={{ browserWidth }}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AppContext.Provider>
  );
}

export default MyApp;
