import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const customRoundButton = props => (
  <TouchableOpacity onPress={props.onButtonPress}>
    <View style={styles.container} backgroundColor={props.btnColor}>
      <Text style={styles.txt}> {props.btnText} </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 500,
    borderWidth: 1
  },
  txt: {
    color: "white",
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
    marginBottom: 15,
    fontSize: 30
  }
});

export default customRoundButton;
