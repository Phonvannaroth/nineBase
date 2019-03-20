import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { LAYOUTS } from "../modules";

export default class ShowMoreButton extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View style={styles.Button}>
          <Text style={styles.text}> Show more 9BASE</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  Button: {
    borderColor: "#f3f",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    height: 40
  },
  text: {
    color: "#f3f",
    fontSize: 18
  }
});
