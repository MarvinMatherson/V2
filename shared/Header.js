import React from 'react';
import {Button, StyleSheet, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';


const Header =() =>{   

   const Hello = ({navigation}) => {
       navigation.openDrawer();
   }

    return(
        <View style={styles.header}>
            <Button title="hello" onPress={() => Hello()} />
            <MaterialIcons name='menu' onPress={() => navigation.toggleDrawer()} size={28} /> 
        </View>
    );
}

//its not weeerrrrrkin

const styles = StyleSheet.create({
header:{
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
},

});

export default Header;