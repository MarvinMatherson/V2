import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ActivityIndicator, Image } from 'react-native';
import {AntDesign} from '@expo/vector-icons';



export default function PeopleDisplay({navigation}) {

  const[text, changeText] = useState('');
  const[data, setData] = useState([]);


  const check = (item) => {
    if(item.person.image){
      return(
        <Image source={{uri:item.person.image.medium}} style={{width:'100%', height: 200}} />
      )
    }else{
      return(
        <Image source={require('./noimage.png')} style={{width: '100%', height: 200}} />
      )
    }
  }
  

 const showfind = () =>{
  fetch('https://api.tvmaze.com/search/people?q=' + text)
  .then((response)=> response.json())
  .then((json)=> setData(json))
  .catch((error)=>alert(error));
 }



const changeHandler = (text) =>{
 changeText(text)
 showfind();
}

console.log('text is currently '+ text)

return( 
  <View style={styles.container}>
    <View style = {styles.searchform}>
      <TextInput 
        placeholder = 'Search for a person'
         style = {styles.search}
         onChangeText={text => changeHandler(text)}
      />
     
    </View>
  
    <View>
     {data? (<View style={styles.resultsContainer}>
        <FlatList
            style = {styles.list}
            keyExtractor={(item, index)=> index.toString()}
            numColumns= '3'
            data={data}
            renderItem={({item}) => (
               <TouchableOpacity style = {styles.show} onPress={() =>          
                    navigation.navigate('Person', {
                      id: item.person.id,
                    } )}>    
    
                <View style={styles.text}>
                  {check(item)}
                </View>
              </TouchableOpacity>
            )}
    
        />
        </View>) : (<View style={styles.loadingContainer}>
  
        <ActivityIndicator size="large" color="#000"/>
  
      </View>)}
    </View>
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
  paddingLeft: 15,
  marginTop: 20,
  borderRadius:30,
  width: 200,
  height: 30,
  borderWidth: 1,
  borderColor: '#000'
}, header : {
  marginTop: 20,
  fontSize: 30,
},
searchform:{
flexDirection: 'row',
},

show:{
  width: '33.3%',
  height: 200,
  borderStyle: "solid",
  borderColor: 'white',
  borderWidth: 1,
}, 
list:{
 marginTop: 20,
 
}

});

  


