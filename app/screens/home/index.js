import React, { Component } from "react";
import { Text, StyleSheet, View,SafeAreaView } from "react-native";
import CardCarousel from "../../components/CardCarousel";
import { House } from "../../dummy/House";
import { LAYOUT,COLORS } from "../../modules/";
import { fontBold } from "../../../functions/customFont";
import ShowMoreButton from "../../components/ShowMoreButton"
export default class HomeScreen extends Component {

  render() {
    return (
      <SafeAreaView
        // style={{ alignItems: "center", justifyContent: "center"}}
      >
      <View style={styles.Padding}>
      <Text style={styles.title}>Experience in the spotlight</Text>
      </View>
     
        <CardCarousel data={House} />
        <View style={styles.Padding}>
        <ShowMoreButton/>
        </View>
        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    title: {
      fontSize: LAYOUT.FONT_H3,
      ...fontBold,
      color: COLORS.BLACK,
    },
    Padding:{
      padding:LAYOUT.BODY_HORIZONTAL
    } 
});
