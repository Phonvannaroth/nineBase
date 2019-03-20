import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import ICon from "react-native-vector-icons/Ionicons";
import { fontSemiBold } from "../../functions/customFont";
import { LAYOUT } from "../modules";
export default class Search extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View style={styles.SearchBox}>
          <View style={styles.row}>
            <ICon style={styles.Icon} name="ios-search" />
            <Text style={styles.Pleacholder}> Try "9Base" </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  SearchBox: {
    borderBottomWidth: 0.5,
    borderLeftWidth: 0.3,
    borderRightWidth: 0.3, 
    borderTopWidth: 0.1,
    borderColor: "#92969e",
    justifyContent: "center",
    borderRadius: 4,
    height: 50,
    margin: 10,
 
  },
  row: {
    flexDirection: "row",
    paddingLeft: 22,
    alignItems: 'center',
  },
  Pleacholder: {
    ...fontSemiBold,
    fontSize: LAYOUT.FONT_H5,
    paddingLeft:12,
    color: "#90949c"
  },
  Icon: {
    fontSize: LAYOUT.FONT_H4,
    ...fontSemiBold,
    fontWeight:'500',
    color: "#90949c"
  }
});
