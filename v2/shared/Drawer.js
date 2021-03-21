import React from 'react';
import {Button, StyleSheet, Text, View, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'; 


const CustomDrawer = ({...props}) =>{   
return(
  <DrawerContentScrollView {...props}>
    <Image source={require('./tvm-header-logo.png')} style={styles.logo}/>

    <DrawerItem 
    name = "Home"
    label = "Home"
    labelStyle={styles.label}
    pressColor= '#10AC84'
    onPress = {()=> props.navigation.navigate('Home')}
    />
    <DrawerItem 
    name = "Shows"
    label = "Shows"
    labelStyle={styles.label}
    pressColor= '#10AC84'
    onPress = {()=> props.navigation.navigate('Show Screen')}
    />
    <DrawerItem 
    name = "People"
    label = "People"
    labelStyle={styles.label}
    pressColor= '#10AC84'
    onPress = {()=> props.navigation.navigate('People Screen')}
    />
  </DrawerContentScrollView>
);
}

const styles = StyleSheet.create({

logo:{
marginLeft: 10,
marginTop: 10,
},
label:{
    marginTop: 10,
    color: '#6EC3BA',
    fontSize: 30,
}

})








export default CustomDrawer;