import React, { Component } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import SubListChild from "./SubListChild";

type Props = {};
class SubList extends Component<Props> {
  state = {
    isSubListShowing: false
  };

  switchState = () => {
    this.setState({
      isSubListShowing: !this.state.isSubListShowing
    });
  };

  render() {
    const parentDataList = [
      { key: Math.random(), firstName: "Adit", iconName: "menu" },
      { key: Math.random(), firstName: "Avani", iconName: "menu" }
    ];

    return (
      <TouchableOpacity onPress={() => this.switchState()}>
        <View style={styles.container}>
          <Text>{props.firstName}</Text>
          if(this.state.isSubListShowing)
          {
            <FlatList
              data={parentDataList}
              renderItem={({ item }) => (
                <SubListChild
                  key={item.key}
                  firstName={item.firstName}
                  index={item.key}
                  onItemsPressed={() => this.switchState()}
                />
              )}
            />
          }
        </View>
      </TouchableOpacity>
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

export default SubList;
