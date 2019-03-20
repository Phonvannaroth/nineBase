import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Swiper from "react-native-swiper";
import { fontSemiBold, fontBold } from "../../../functions/customFont";
import Icon from "react-native-vector-icons/Ionicons"
import { ScrollView } from "react-native-gesture-handler";
export default class DetailScreen extends Component {
  render() {
    return (
      <View style={styles.contianer}>
      <ScrollView>
      <View style={styles.wrapper}>
          <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}>
            <View style={styles.slide1}>
              <Image
                style={styles.ImageSwiper}
                source={{
                  uri:
                    "https://sg1-cdn.pgimgs.com/listing/18608949/UPHO.51213304.V800/Landed-House-on-Gilstead-Newton-Novena-Singapore.jpg"
                }}
              />
            </View>
            <View style={styles.slide1}>
              <Image
                style={styles.ImageSwiper}
                source={{
                  uri:
                    "https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?cs=srgb&dl=architecture-blue-sky-buildings-290275.jpg&fm=jpg"
                }}
              />
            </View>
            <View style={styles.slide1}>
              <Image
                style={styles.ImageSwiper}
                source={{
                  uri: "https://i.ytimg.com/vi/9eh7hMOMWoo/maxresdefault.jpg"
                }}
              />
            </View>
          </Swiper>
        </View>
        <View style={{ fontSize: 8, paddingTop: 10, paddingLeft: 12 }}>
          <Text style={{ ...fontBold }}>ENTIRE COTTAGE</Text>
        </View>
        <View style={{ fontSize: 8, paddingTop: 5, paddingLeft: 12 }}>
          <Text style={{ ...fontBold, fontSize: 28 }}>
            Adorable Garden Gingerbread House{" "}
          </Text>
        </View>
        <View style={{padding:12}}>
          <View style={styles.row}>
            <View style={{width:250}}>
            <Text numberOfLines={2} style={styles.text}>Cambodian, Phnum Penh, Takmav, Posted By Mr.Sitha</Text>
            </View>
           
            <Image
              style={styles.imagePro}
              source={{
                uri:
                  "https://scontent.fpnh10-1.fna.fbcdn.net/v/t1.0-9/14212772_1311078968922392_2684388185732899805_n.jpg?_nc_cat=110&_nc_ht=scontent.fpnh10-1.fna&oh=4118624685c0cb9844ee5e628e45038b&oe=5D14B269"
              }}
            />
          </View>
        </View>
        <View style={styles.row1}>
          <Icon style={{fontSize:18, paddingLeft:12}} name="ios-key"/>
          <View style={{alignItems:"flex-start",paddingLeft: 22}}>
          <Text style={{...fontSemiBold,}}>ENTIRE COTTAGE</Text>
          <Text>2 Guest Studio 1 bed 1 bath </Text>
          </View>
        </View>
        <View style={styles.row1}>
          <Icon style={{fontSize:18, paddingLeft:12}} name="ios-journal"/>
          <View style={{alignItems:"flex-start",paddingLeft: 22}}>
          <Text style={{...fontSemiBold,}}>ENTIRE COTTAGE</Text>
          <Text>Check  yourself in with the lockbox</Text>
          </View>
        </View>
        <View style={styles.row1}>
          <Icon style={{fontSize:18, paddingLeft:12}} name="ios-medal"/>
          <View style={{alignItems:"flex-start",paddingLeft: 22}}>
          <Text style={{...fontSemiBold,}}>ENTIRE COTTAGE</Text>
          <View style={{width:250}}>
          <Text>Superhosts are experienced, highly rated host who are committed to providing great stays for guests </Text>
          </View>
          </View>
        </View>
      </ScrollView>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  IconBack:{
    fontSize:18,
    color: "#000"
  },
  contianer: {
    flex: 1
  },
  wrapper: {
    height: 300
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  ImageSwiper: {
    width: "100%",
    height: 300
  },
  imagePro: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row1: {
    flexDirection: "row",
    margin: 12,
  },
  text:{
    fontSize:16
  }
});
