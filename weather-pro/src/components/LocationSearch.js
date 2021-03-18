import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 


export default function LocationSearch({updateLocation}) {
const[text, setText] = useState();

const changeHandler = (val) => {
    setText(val);
}

return (

<View style={styles.searchForm}>

<TextInput 
placeholder = 'Search here...'
placeholderTextColor = '#fff'
style = {styles.input}
onChangeText ={changeHandler}
/>

<TouchableOpacity onPress = {() => updateLocation(text)} style = {styles.button}>
<AntDesign name="search1" size={24} color="#fff" />
</TouchableOpacity>
</View>

);

}


const styles = StyleSheet.create({

searchForm: {   

padding: 20,
height: 100,
alignItems: 'flex-start',
flexDirection: 'row',
},
input: {

    flexGrow: 1,
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderColor: '#FFF',
    borderRadius: 15,
    borderWidth: 1,
    fontSize: 15,
    color: '#FFF',
    marginRight: 10,
},

button:{
 width: 30,
 height: 35,
 color: '#FFF',
 alignItems: 'center',
 justifyContent: 'center',
},

});
