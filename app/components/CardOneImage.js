import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import { LAYOUT } from '../modules'

const { width: width } = Dimensions.get("window")

const marginCard = 5;
const heightCard = 210;

let cardWidth = (width / 2) - LAYOUT.BODY_HORIZONTAL - marginCard;
let buttom = width - LAYOUT.BODY_HORIZONTAL - marginCard;


export default CardOneImage = () => {
    return (
        <View>
       
            <View style={{  flexDirection: "row", flexWrap: "wrap", paddingHorizontal: LAYOUT.BODY_HORIZONTAL - marginCard }}>
            <Text style={styles.txtMain}>Homes around the world</Text>
                <TouchableOpacity style={styles.card} >
                    <ImageBackground source={require('../img/location.jpg')} style={styles.img} />
                    <View style={styles.contain}>
                        <View style={styles.containHeader}>
                            <Text style={styles.txtHeader}>ENTIRE HOUSE . MARASKESH</Text>
                        </View>
                        <Text style={styles.txtDetail}>YOUR PRIVATE 3 BEDS. RAID, AND</Text>
                        <Text style={styles.txtPrice}>$91 per night</Text>
                        <Text style={styles.txtSub}>★★★★☆ 227. Superhost</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} >
                    <ImageBackground source={require('../img/location1.jpg')} style={styles.img} />
                    <View style={styles.contain}>
                        <View style={styles.containHeader}>
                            <Text style={styles.txtHeader}>ENTIRE HOUSE . MARASKESH</Text>
                        </View>
                        <Text style={styles.txtDetail}>YOUR PRIVATE 3 BEDS. RAID, AND</Text>
                        <Text style={styles.txtPrice}>$91 per night</Text>
                        <Text style={styles.txtSub}>★★★★☆ 227. Superhost</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} >
                    <ImageBackground source={require('../img/loacation2.jpg')} style={styles.img} />
                    <View style={styles.contain}>
                        <View style={styles.containHeader}>
                            <Text style={styles.txtHeader}>ENTIRE HOUSE . MARASKESH</Text>
                        </View>
                        <Text style={styles.txtDetail}>YOUR PRIVATE 3 BEDS. RAID, AND</Text>
                        <Text style={styles.txtPrice}>$91 per night</Text>
                        <Text style={styles.txtSub}>★★★★☆ 227. Superhost</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} >
                    <ImageBackground source={require('../img/location3.jpg')} style={styles.img} />
                    <View style={styles.contain}>
                        <View style={styles.containHeader}>
                            <Text style={styles.txtHeader}>ENTIRE HOUSE . MARASKESH</Text>
                        </View>
                        <Text style={styles.txtDetail}>YOUR PRIVATE 3 BEDS. RAID, AND</Text>
                        <Text style={styles.txtPrice}>$91 per night</Text>
                        <Text style={styles.txtSub}>★★★★☆ 227. Superhost</Text>
                    </View>
                </TouchableOpacity>

            </View>
            <TouchableOpacity style = {styles.btn} >

        <Text style={styles.txtBtn}>Show all (200+)</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        width: cardWidth, 
        height: heightCard, 
        marginHorizontal: marginCard, 
        marginBottom:10
    },
    img: {
        height: 100,
        borderTopLeftRadius:  4,
        borderTopRightRadius:  4,
        resizeMode: 'cover',
        overflow: 'hidden'

    },
    contain: {
        height: 110,
        backgroundColor: '#f7f9fa',
        borderBottomLeftRadius:4,
        borderBottomRightRadius:4,
      

    },
    containHeader: {
        height: 30,
        justifyContent: 'center'
    },
    txtMain: {
        fontSize: 24,
        fontWeight: '600',
        color: '#2b2b2b',
        marginBottom:12,
        marginHorizontal: marginCard
    },
    txtHeader: {
        fontSize: 10,
        fontWeight: '800',
        color: '#8B0000'
    },
    txtDetail: {
        fontSize: 14,
        fontWeight: '700',
        color: '#2b2b2b'
    },
    txtPrice: {
        fontSize: 16,
        fontWeight: '100',
        color: 'gray'
    },
    txtSub: {
        fontSize: 12,
        fontWeight: '100',
        color: '#2b2b2b'
    },
    txtBtn:{
        fontSize: 14,
        fontWeight: '700',
        color: 'gray'
    },
    btn:{
        marginHorizontal: marginCard *2,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width:buttom,
        height: 50,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#dedede'


    }
})
