import React, {useState, useEffect} from 'react';
import { View, Button, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList, SafeAreaView, ActivityIndicator, Image, useFocusEffect, RefreshControl} from "react-native";
import HomeDisplay from './components/DisplayHome';

const HomeScreen = ({navigation}) => {

  return (
      <HomeDisplay navigation = {navigation}  />
  )}

     
     const styles = StyleSheet.create({
       container: {
         flexDirection: 'row',
         width: '100%',
         flexWrap: 'wrap',
       },
       show:{
         width: '33.3%',
         height: 200,
         borderStyle: "solid",
         borderColor: 'black',
         borderWidth: 1,
       },
       text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       },
       font:{
         textAlign:'center',
         color: '#000',
         padding: 10,
       },
       loadingContainer: {
        height: '100%',
        justifyContent: 'center'
       },
       container: {
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
      },

      resultImage: {
        flex: 1,
        margin: 10,
        height: 200
      }
      
  
     
     });
     
  
  export default HomeScreen;


