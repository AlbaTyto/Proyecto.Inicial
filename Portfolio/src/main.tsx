import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme, type ThemeConfig } from "@chakra-ui/react";
import App from "./App.tsx";
import "./index.css";

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })
// const theme = extendTheme({
//   styles: {
//     global: () => ({
//       body: {
//         color: 'rgb(51, 50, 104)',
//         bg: 'black',
//       }
//     })
//   },
// })

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
