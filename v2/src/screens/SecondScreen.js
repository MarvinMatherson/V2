import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const SecondScreen = () => {
    return(
      
<View style={styles.container}>
    
  <Text style = {styles.header}>Search for a show!</Text>  
  <TextInput  style = {styles.search}/>


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


