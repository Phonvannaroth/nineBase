import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import _style from "../../styles";
export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={[_style.flx1, _style.centerMode]}>
        <Text> Profile </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
