import { Center, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "blue.50",
        color: "gray.600",
        textAlign: "center",
      },
    },
  },
});

export default theme;
