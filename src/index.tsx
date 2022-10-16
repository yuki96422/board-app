import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import postsReducer from "./features/Posts"
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";


const store = configureStore({
  reducer: {
    posts:postsReducer,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
