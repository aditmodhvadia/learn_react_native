import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const SubListChild = props => (
  <View style={styles.listItem}>
  <TouchableOpacity onPress={() => alert(props.iconName)}>
      <Icon size={30} name={props.iconName} color="red" />
    </TouchableOpacity>
    <Text>{props.firstName}</Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    flexDirection: "row",
    margin: 15,
    padding: 10,
    justifyContent: "space-evenly",
    backgroundColor: "#eee"
  }
});

export default SubListChild;
