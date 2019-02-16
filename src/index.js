import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import configureStore from "./store";
import * as serviceWorker from "./serviceWorker";

const initialState = {};
const store = configureStore(initialState);
const rootElement = document.getElementById("root");

const ReactApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

if (rootElement == null) {
  throw new Error("empty element");
} else {
  ReactDOM.render(<ReactApp />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
