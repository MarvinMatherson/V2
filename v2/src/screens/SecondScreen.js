import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {AntDesign} from '@expo/vector-icons';


const SecondScreen = () => {

const showSearch = (newShow) =>{

}








    return(
      
<View style={styles.container}>
    
  <Text style = {styles.header}>Search for a show!</Text>  
  <TextInput  style = {styles.search}/>
  <TouchableOpacity>
    <AntDesign name="search1" size={24} color='black' />
  </TouchableOpacity>

</View>

);

}

const styles = StyleSheet.create({

container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',

},
search :{
  paddingLeft: 20,
  marginTop: 20,
  borderRadius:30,
  width: 300,
  height: 30,
  borderWidth: 1,
  borderColor: '#000'
}, header : {
  marginTop: 20,
  fontSize: 30,
}

});

  
  export default SecondScreen;


