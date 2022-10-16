import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import theme from "./theme/theme";

type PostData = {
  id: number;
  name: string;
  post: string;
};

function App() {
  const postList = useSelector((state:Array<PostData>)=>console.log(state.posts))
  return <ChakraProvider theme={theme}>aa</ChakraProvider>;
}

export default App;
