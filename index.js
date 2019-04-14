/**
 * @format
 */

import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import Home from "./src/Home";
import { name as appName } from "./app.json";
import configureStore from "./src/store/configureStore";
import { Provider } from "react-redux";

const myStore = configureStore();
const RNRedux = () => (
  <Provider store={myStore}>
    <App />
  </Provider>
);
AppRegistry.registerComponent(appName, () => RNRedux);
