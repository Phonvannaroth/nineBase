import React, { Component } from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { LAYOUT, COLORS } from "../modules";
import Carousel from "react-native-snap-carousel";
import { fontBold } from "../../functions/customFont";
import _style from '../styles'

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
    <View
      style={{
        paddingHorizontal: 5,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        overflow: "hidden"
      }}
    >
      <View>
        <ImageBackground style={styles.imageBox} imageStyle={_style.imageBox} source={illustration}>
          <View style={styles.center}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.subtitleStyle}>
        <Text numberOfLines={5}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBox: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: LAYOUT.FONT_H2,
    ...fontBold,
    color: COLORS.WHITE,
  },
  subtitleStyle: {
    backgroundColor: "#f0f0f0",
    padding: LAYOUT.SPACE5,
    height: 120
  },
  center: {
    height: 200,
    justifyContent: "center",
    alignItems: 'center',
  }
});
