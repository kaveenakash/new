import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";

import App from "./components/App";
import theme from './components/ui/theme'

import store from "./store/index";
import { Provider } from "react-redux";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
