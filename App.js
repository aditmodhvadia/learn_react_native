/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from "react-native";

import ListItem from "./src/components/ListItem";
import CustomRoundButton from "./src/components/CustomRoundButton";

const instructions = Platform.select({
  ios: "This is for iOS\n" + "I can't build and see it xD",
  android: "This is for android\n" + "which is the best."
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    firstName: "",
    savedFirstName: "",
    firstNamesList: []
  };

  firstNameChangedHandler = val => {
    this.setState({
      firstName: val
    });
  };
  saveFirstNameButtonHandler = () => {
    if (this.state.firstName === "") {
      return;
    }
    this.setState(prevState => {
      return {
        savedFirstName: prevState.firstName,
        firstName: "",
        firstNamesList: prevState.firstNamesList.concat({
          key: Math.random(),
          value: prevState.firstName
        })
      };
    });
  };
  deleteNameFromList = index => {
    this.setState(prevState => {
      return {
        firstNamesList: prevState.firstNamesList.filter(firstName => {
          return firstName.key !== index;
        })
      };
    });
  };
  render() {
    const firstNameListOutput = this.state.firstNamesList.map(firstName => (
      <ListItem
        key={firstName.key}
        firstName={firstName.value}
        index={firstName.key}
        onItemsPressed={firstName.key}
        onItemDeleted={this.deleteNameFromList}
        /* onItemLongPressed={this.deleteNameFromList} */
      />
    ));

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Welcome to React Native! </Text>

        <Text style={styles.instructions}> {instructions} </Text>

        <Text style={styles.firstName}> {this.state.savedFirstName} </Text>

        <TextInput
          style={styles.input}
          value={this.state.firstName}
          onChangeText={this.firstNameChangedHandler}
          placeholder="Enter your First Name"
          placeholderTextColor="#fff"
        />

        <CustomRoundButton
          btnText="Save this"
          btnColor="#d3d3"
          onButtonPress={this.saveFirstNameButtonHandler}
        />

        <ScrollView style={styles.listContainer}>
          {firstNameListOutput}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#000"
  },
  welcome: {
    fontSize: 40,
    textAlign: "center",
    color: "#00e640",
    margin: 10
  },
  instructions: {
    fontSize: 30,
    textAlign: "center",
    color: "#19b5fe",
    marginBottom: 5
  },
  firstName: {
    fontSize: 25,
    textAlign: "center",
    margin: 25,
    color: "#ade121"
  },
  input: {
    width: 300,
    color: "white",
    borderColor: "white",
    borderWidth: 1,
    margin: 25
  },
  saveButton: {
    width: "25%"
  },
  listContainer: {
    width: "100%",
    margin: 25
  }
});
