import React, { Component } from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { fontSemiBold, fontBold } from "../../functions/customFont";
import { TouchableOpacity } from "react-native-gesture-handler";

export default (SmallCard = ({ txt, image }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <ImageBackground style={styles.img} source={image}>
          <View style={styles.center}>
            <Text style={styles.txt}>{txt}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    borderBottomWidth: 0.5,
    borderLeftWidth: 0.3,
    borderRightWidth: 0.3,
    borderTopWidth: 0.1,
    borderColor: "#92969e",
    justifyContent: "center",
    borderRadius: 4,
    margin: 10,
    marginBottom: 12
  },
  img: {
    height: 120
  },
  center: {
    height: 40,
    backgroundColor: "#fff",
    marginTop: 80
  },
  txt: {
    paddingLeft: 12,
    paddingTop: 5,
    ...fontBold
  }
});
