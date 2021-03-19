import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
export default function HomeScreen({ navigation }) {
    
return (

<View style={styles.HomeScreen}>

<TouchableOpacity>

<Text onPress={() => navigation.navigate('Photos')}>Browse Photos</Text>

</TouchableOpacity>

<TouchableOpacity>

<Text onPress={() => navigation.navigate('Collections')}
>Browse Collections</Text>

</TouchableOpacity>

</View>

);

}


const styles = StyleSheet.create({

HomeScreen: {

padding: 20

/* styles here */

},

});