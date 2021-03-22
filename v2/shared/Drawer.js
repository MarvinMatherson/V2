import React from 'react';
import {Button, StyleSheet, Text, View, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';
import { Icon } from 'react-native-elements'


const CustomDrawer = ({...props}) =>{   
return(
  <DrawerContentScrollView {...props}>
    <Image source={require('./tvm-header-logo.png')} style={styles.logo}/>
    <View style = {styles.routes}>
    <DrawerItem 
      icon = {() =>(
      <Icon 
      name='home'
      type='Material'
      color='#3F3F3F'
      size = {50}
      style ={styles.icons}
   /> )}
    name = "Home"
    label = "Home"
    labelStyle={styles.label}
    pressColor= '#10AC84'
    onPress = {()=> props.navigation.navigate('Home')}
    />
    <DrawerItem 
    icon = {() =>(
      <Icon 
      name='tv'
      type='Material'
      color='#3F3F3F'
      size = {50}
      style ={styles.icons}
   /> )}
    name = "Shows"
    label = "Shows"
    labelStyle={styles.label}
    pressColor= '#10AC84'
    onPress = {()=> props.navigation.navigate('Show Screen')}
    />
    <DrawerItem 
    icon = {() =>(
      <Icon 
      name='people'
      type='Material'
      color='#3F3F3F'
      size = {50}
      style ={styles.icons}
   /> )}
    name = "People"
    label = "People"
    labelStyle={styles.label}
    pressColor= '#10AC84'
    onPress = {()=> props.navigation.navigate('People Screen')}
    />

    <DrawerItem
    name = 'love'
    label = 'Made with TVMaze'
    labelStyle = {styles.thanks}
    />
  </View>
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
    fontSize: 25,
}, 
icons:{
  marginTop: 10,
},
thanks:{
  fontSize: 20,
  marginTop: 300,
  marginLeft: 10,

},
routes :{
marginTop: 20,
},


})








export default CustomDrawer;