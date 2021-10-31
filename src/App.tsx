import React from "react";
import { Provider } from "react-redux";
import { StyledEngineProvider } from "@mui/material/styles";

import { Routes } from "./routes";
import { store } from "./stateManegement/redux/store/store";

export const App = () => {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <Routes />
      </StyledEngineProvider>
    </Provider>
  );
};
