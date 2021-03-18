import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ActivityIndicator, Image } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';


const SecondScreen = () => {

  const[show, getShow] = useState();
  const[text, changeText] = useState();
  const[data, setData] = useState([]);


  const check = (item) => {
    if(item.show.image){
      return(
        <Image source={{uri:item.show.image.medium}} style={{width:'100%', height: 200}} />
      )
    }else{
      return(
        <Text>Poo</Text>
      )
    }
  }
  





 const showfind = () =>{

  fetch('https://api.tvmaze.com/search/shows?q=' +show)
  .then((response)=> response.json())
  .then((json)=> setData(json))
  .catch((error)=>alert(error))
 }

const showSearch = (text) =>{
  getShow(text)
  showfind();
}


const changeHandler = (val) =>{
 changeText(val)
}





 return( 
  <>
    <View style={styles.container}>
      <Text style = {styles.header}>Search for a show!</Text>  
    <TextInput 
       style = {styles.search}
       onChangeText={changeHandler}
  />
  <TouchableOpacity onPress={() => showSearch(text)}>
    <AntDesign name="search1" size={24} color='black' />
  </TouchableOpacity>
</View>


<View>
  {data? (<View style={styles.resultsContainer}>
<FlatList
  numColumns= '3'
  data={data}
  renderItem={({item}) => (
    <>
    <TouchableOpacity style = {styles.show} onPress={() => navigation.navigate('Shows', {
     id: item.show.id,

    } )}>    
    <View style={styles.text}>
    {check(item)}
     </View>
  </TouchableOpacity>
   

</>
  )}
  
  />
</View>) : (<View style={styles.loadingContainer}>

<ActivityIndicator size="large" color="#000"/>

</View>)}


</View>




</>

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
},
show:{

  width: '33.3%',
  height: 200,
  borderStyle: "solid",
  borderColor: 'white',
  borderWidth: 1,
},

});

  
  export default SecondScreen;


