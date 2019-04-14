import React, { Component } from "react";
import { StyleSheet, View, TextInput, FlatList } from "react-native";
import { connect } from "react-redux";
import { addName, deleteName, saveName } from "./store/actions/index";

import ListItem from "./components/ListItem";
import CustomRoundButton from "./components/CustomRoundButton";

type Props = {};
class Second extends Component<Props> {
  firstNameChangedHandler = val => {
    this.props.onSaveName(val);
  };
  saveFirstNameButtonHandler = () => {
    this.props.onAddName(this.props.firstName);
  };
  deleteNameFromList = index => {
    this.props.onDeleteName(index);
  };
  render() {
    return (
      <View style={styles.container}>
        <CustomRoundButton
          btnText="Previous Screen"
          btnColor="#d3d3"
          onButtonPress={() => this.props.navigation.navigate("Home")}
        />

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
          data={this.props.firstNamesList}
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
    firstNamesList: state.names.firstNamesList,
    firstName: state.names.firstName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddName: name => dispatch(addName(name)),
    onDeleteName: key => dispatch(deleteName(key)),
    onSaveName: val => dispatch(saveName(val))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Second);
