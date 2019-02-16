import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import lightGreen from "@material-ui/core/colors/lightGreen";

import "./index.css";
import App from "./components/App";
import configureStore from "./store";
import * as serviceWorker from "./serviceWorker";

// Custom primary and secondary color.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: green[500],
      main: green[700],
      dark: green[900]
    },
    secondary: {
      light: lightGreen[500],
      main: lightGreen[700],
      dark: lightGreen[900]
    }
  }
});

const initialState = {};
const store = configureStore(initialState);
const rootElement = document.getElementById("root");

const ReactApp = () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
);

if (rootElement == null) {
  throw new Error("empty element");
} else {
  ReactDOM.render(<ReactApp />, rootElement);
}

serviceWorker.register();
