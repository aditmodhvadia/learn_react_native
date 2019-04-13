/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, TextInput, FlatList } from "react-native";
import { connect } from "react-redux";
import { addName, deleteName } from "./src/store/actions/index";

import ListItem from "./src/components/ListItem";
import CustomRoundButton from "./src/components/CustomRoundButton";
import Provider from "react-redux";
import configureStore from "./src/store/configureStore";
import Home from "./src/Home";

type Props = {};
export default class App extends Component<Props> {
  render() {
    const myStore = configureStore();
    return (
      <Provider store={myStore}>
        <Home />
      </Provider>
    );
  }
}
