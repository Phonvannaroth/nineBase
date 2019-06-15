import React, { Component } from "react";
import { Text, StyleSheet, View, SafeAreaView, ScrollView,FlatList } from "react-native";
import CardCarousel from "../../components/CardCarousel";
import { House } from "../../dummy/House";
import { LAYOUT, COLORS } from "../../modules/";
import { fontBold } from "../../../functions/customFont";
import ShowMoreButton from "../../components/ShowMoreButton";
import CardTwoImage from "../../components/CardTwoImage";
import CardOneImage from "../../components/CardOneImage";
import SearchBOX from "../../components/Search";
import SmallCard from "../../components/SmallCard"

export default class HomeScreen extends Component {
  _onDetail=()=>{
    this.props.navigation.navigate("Detail")
  }
  render() {
    return (
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBOX/>
        <View style={styles.Padding}>
        <Text style={styles.title}>What can we help you find, Sir?</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <SmallCard onSelected={()=>this._onDetail()} txt="Apartment" image={{uri:"https://static01.nyt.com/images/2018/08/19/realestate/19underground-slide-AYDY/19underground-slide-AYDY-articleLarge.jpg?quality=75&auto=webp&disable=upscale"}}/>
        <SmallCard onSelected={()=>this._onDetail()} txt="Condominium" image={{uri:"https://photosrp.thailand-property.com/1.0-TH-2434-PJ-12758-19921046725a20cbe4c2a4f-1-525-325/mantra-beach-condominium.jpg"}}/>
        <SmallCard onSelected={()=>this._onDetail()} txt="Office Space" image={{uri:"https://images.unsplash.com/photo-1522165078649-823cf4dbaf46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"}}/>
        <SmallCard onSelected={()=>this._onDetail()} txt="Building" image={{uri:"https://i.ytimg.com/vi/9eh7hMOMWoo/maxresdefault.jpg"}}/>
        <SmallCard onSelected={()=>this._onDetail()} txt="Landed House" image={{uri:"https://dbv47yu57n5vf.cloudfront.net/s3fs-public/editorial/my/2018/August/17/20180309_PLA_SITEVISIT_CRADLETON_ECOMAJESTIC_SEMENYIH19_LYY_TEP.JPG"}}/>
        <SmallCard onSelected={()=>this._onDetail()} txt="Warehouse" image={{uri:"https://rw-media.s3.amazonaws.com/commercial/wp-content/uploads/2013/04/130423-Larkin-St-Riverwood.jpg"}}/>
        </ScrollView>
          <CardOneImage onSelected={()=>this._onDetail()}/>
          <CardTwoImage onSelected={()=>this._onDetail()}/>
          <View style={styles.Padding}>
            <Text style={styles.title}>Experiences in the spotlight</Text>
          </View>
          <CardCarousel data={House} />
          <View style={styles.Padding}>
            {/* <ShowMoreButton /> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: LAYOUT.FONT_H3,
    ...fontBold,
    color: COLORS.BLACK
  },
  Padding: {
    padding: LAYOUT.BODY_HORIZONTAL
  }
});
