import React, { Component } from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { LAYOUT,COLORS } from "../modules";
import Carousel from "react-native-snap-carousel";
import { fontBold } from "../../functions/customFont";

export default (CardCarousel = ({ data }) => {
  return (
    <View>
      <Carousel
        ref={c => {
          this._carousel = c;
        }}
        inactiveSlideScale={1}
        sliderWidth={LAYOUT.VIEW_PORT_WIDTH}
        itemWidth={LAYOUT.VIEW_PORT_WIDTH - LAYOUT.BODY_HORIZONTAL * 2}
        keyboardShouldPersistTaps="always"
        data={data}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={({ item, index }) => renderItem(item)}
      />
    </View>
  );
});

const renderItem = item => {
  const { title, subtitle, illustration } = item;
  return (
    <View style={{ paddingHorizontal: 5,borderTopRightRadius:12,borderTopLeftRadius: 12, overflow:"hidden" }}>
      <View>
        <ImageBackground
          style={{ width: "100%", height: 100 }}
          source={illustration}
        >
        <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
        </View>
        </ImageBackground>
      </View>
      <View style={styles.subtitleStyle}>
        <Text>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: LAYOUT.FONT_H2,
    ...fontBold,
    color: COLORS.WHITE,
    
  },
  subtitleStyle:{
    backgroundColor:"#f0f0f0",
    padding: LAYOUT.SPACE5
  },
  center:{
  alignItems: 'center',
  justifyContent: 'center',
  }
});
