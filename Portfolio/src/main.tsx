import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme, type ThemeConfig } from "@chakra-ui/react";
import App from "./App.tsx";
import "./index.css";

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ 
  config,
//  })
// const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        color: 'rgb(51, 50, 104)',
        bg: 'black',
      }
    })
  },
  colors: {
    brand: {
      900: '#323c49',
      800: '#495564',
      700: '#848e99',
      0o1: '#000000'
    },
  }
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
