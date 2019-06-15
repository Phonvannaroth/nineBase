import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { LAYOUT } from "../modules";

const { width: width } = Dimensions.get("window");

const marginCard = 5;
const heightCard = 210;

let cardWidth = width / 2 - LAYOUT.BODY_HORIZONTAL - marginCard;
let buttom = width / 2.3 - LAYOUT.BODY_HORIZONTAL - marginCard;
let card = width - LAYOUT.BODY_HORIZONTAL - marginCard;

export default (CardTwoImage = ({ onSelected }) => {
  return (
    <View>
      <View style={styles.card}>
        <ImageBackground
          source={require("../img/agent.jpg")}
          style={styles.img}
        />
        <View style={{ marginTop: 15, width: cardWidth * 1.6 }}>
          <Text style={styles.txtHeader}>
            Find out how much you could earn hosting your place
          </Text>
          <Text style={styles.txtDetail}>
            Turn your extra space into extra income.
          </Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={onSelected}>
          <Text style={styles.txtBtn}>Find out more</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  card: {
    marginHorizontal: marginCard * 2,
    padding: 20,
    marginTop: 15,
    width: card,
    height: 450,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#dedede",

    shadowColor: "#CFCCDC",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowRadius: 10,
    shadowOpacity: 0.45,
    elevation: 10,
    marginBottom: 30
  },

  img: {
    height: 180,
    resizeMode: "cover",
    overflow: "hidden"
  },
  txtHeader: {
    fontSize: 22,
    fontWeight: "800",
    color: "#8B0000",
    marginBottom: 12
  },
  txtDetail: {
    fontSize: 18,
    fontWeight: "100",
    color: "#2b2b2b"
  },
  txtBtn: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff"
  },
  btn: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    width: buttom,
    height: 50,
    borderRadius: 4,

    backgroundColor: "#018489"
  }
});
