import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const listItem = props => (
  <TouchableOpacity /* onPress={() => alert(props.onItemsPressed)} */
    onPress={() => props.onItemDeleted(props.index)}
    /* onLongPress={props.onLongPressed(i)} */
  >
    <View style={styles.listItem}>
      <Text>{props.firstName}</Text>
      <Text>{props.index}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    margin: 15,
    borderWidth: 2,
    borderColor: "#adad",
    padding: 10,
    backgroundColor: "#eee"
  }
});

export default listItem;
