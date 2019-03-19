import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import CardTwoImage from '../../components/CardTwoImage';
import CardOneImage from '../../components/CardOneImage';
import { ScrollView } from 'react-native-gesture-handler';

export default class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView>
      <ScrollView>
       
        <CardOneImage/>
        <CardTwoImage />
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({})
