import React, {useState, useEffect} from 'react';
import { View, Button, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { FlatList } from 'react-native-gesture-handler';


export default function ShowDisplay({navigation, setData}) {

const check = (item) => {
  if(item.show.image){
    return(
      <Image source={{uri:item.show.image.medium}} style={{width:'100%', height: 200}} />
    )
  }else{
    return(
      <Image source={require('./noimage.png')} style={{width: '100%', height: 200}} />
    )
  }
}



const passThrough = (item) => {

if(item){

  const image =  item.show.image.medium;
  return(
    image
  )

}
else {
  const image = 'no image';
  return(
    image
  )
}
}




return(
  <View>
  {setData? (<View style={styles.resultsContainer}>
<FlatList
  numColumns= '3'
  data={setData}
  renderItem={({item}) => (
    <>
    <TouchableOpacity style = {styles.show}onPress={() => navigation.navigate('Shows', {
     id: item.show.id,

    } )}>    
    {check(item)}
    <View style={styles.text}>
     </View>



  </TouchableOpacity>
   

</>
  )}
  
  />
</View>) : (<View style={styles.loadingContainer}>

<ActivityIndicator size="large" color="#000"/>

</View>)}


</View>
);
  
}

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
    borderColor: 'white',
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

});





