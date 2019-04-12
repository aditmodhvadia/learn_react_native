/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View, TextInput, FlatList } from "react-native";
import { connect } from "react-redux";
import { addName, deleteName } from "./src/store/actions/index";

import ListItem from "./src/components/ListItem";
import CustomRoundButton from "./src/components/CustomRoundButton";

const instructions = Platform.select({
  ios: "This is for iOS\n" + "I can't build and see it xD",
  android: "This is for android\n" + "which is the best."
});

type Props = {};
class App extends Component<Props> {
  firstNameChangedHandler = val => {
    this.setState({
      firstName: val
    });
  };
  saveFirstNameButtonHandler = () => {
    if (this.state.firstName === "") {
      return;
    }
    this.onAddName(this.state.firstName);
  };
  deleteNameFromList = index => {
    this.props.onDeleteName(index);
  };
  render() {
    // const firstNameListOutput = this.state.firstNamesList.map(firstName => (
    //   <ListItem
    //     key={firstName.key}
    //     firstName={firstName.value}
    //     index={firstName.key}
    //     onItemsPressed={firstName.key}
    //     onItemDeleted={this.deleteNameFromList}
    //     /* onItemLongPressed={this.deleteNameFromList} */
    //   />
    // ));

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.props.firstName}
          onChangeText={this.firstNameChangedHandler}
          placeholder="Enter your First Name"
          placeholderTextColor="#fff"
        />

        <CustomRoundButton
          btnText="Save this"
          btnColor="#d3d3"
          onButtonPress={this.saveFirstNameButtonHandler}
        />
        
        <FlatList
          data={this.propes.firstNamesList}
          renderItem={({ item }) => (
            <ListItem
              key={item.key}
              firstName={item.value}
              index={item.key}
              onItemsPressed={item.key}
              onItemDeleted={this.deleteNameFromList}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
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

const mapStateToProps = state => {
  return {
    firstName: state.names.firstNamesList,
    firstNamesList: state.names.firstName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddName: name => dispatch(name),
    onDeleteName: key => dispatch(key)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
