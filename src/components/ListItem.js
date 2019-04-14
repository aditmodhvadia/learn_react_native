import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const listItem = props => (
  <View style={styles.listItem}>
    <Text>{props.firstName}</Text>
    <TouchableOpacity onPress={() => props.onItemDeleted(props.index)}>
      <Icon size={30} name="delete" color="red" />
    </TouchableOpacity>
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

export default listItem;
