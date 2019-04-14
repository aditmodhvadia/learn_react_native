import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import { addName, deleteName, saveName } from "./store/actions/index";
import Icon from "react-native-vector-icons/MaterialIcons";
import ListItem from "./components/ListItem";
import CustomRoundButton from "./components/CustomRoundButton";
import SubListParent from "./components/SubListParent";

type Props = {};
class Drawer extends Component<Props> {
  render() {
    const dataList = [
      { key: Math.random(), value: "Modhvadia" },
      { key: Math.random(), value: "Shitole" },
      { key: Math.random(), value: "Majmudar" },
      { key: Math.random(), value: "Manglani" },
      { key: Math.random(), value: "Agrawal" }
    ];
    return (
      <View style={styles.container}>
        <Icon name="edit" color="white" size={30} />

        <FlatList
          data={dataList}
          renderItem={({ item }) => (
            <SubListParent firstName={item.value} />
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

/* const mapStateToProps = state => {
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
)(Drawer); */

export default Drawer;
