import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ActivityIndicator, Image } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
import { useFonts } from 'expo-font';


const ShowDisplay = ({navigation}) => {

//declaring our usestates
  const[text, changeText] = useState('');
  const[data, setData] = useState([]);

//This was gonna be our fonts but it never worked
  const [loaded, error] = useFonts({ 

   });


 //Condition check if show has an image, if not show a placeholder. This is important as data won't load without an image
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
  
//This function makes a call to the api using the 'text' as the query  and sets 'data' to the results found
 const showfind = () =>{
  fetch('https://api.tvmaze.com/search/shows?q=' + text)
  .then((response)=> response.json())
  .then((json)=> setData(json))
  .catch((error)=>alert(error));
 }


//Function to handle the text inputted by the user. Sets 'text' to what the user inputs and the runs 'showfind' function
const changeHandler = (text) =>{
 changeText(text)
 showfind();
}


//Just a log to show what the text currently is as you type it
console.log('text is currently '+ text)



//this is what is gonna be displayed to user. Show the user a search box and 'Search here for a show' text
return( 
  <View style={styles.container}>
    <Text style={styles.categories}>Shows</Text>
    <View style = {styles.searchform}>
      <TextInput 
        placeholder = 'Search here for a show!'
        placeholderTextColor={'grey'}
        style = {styles.search}
        onChangeText={text => changeHandler(text)}
      />
    </View>
  {/*  Displays the shows relevant to what the user types into the box in a flatlist. Each one is clickable and naviagtes to its own show page, by passing through its id     */}
    <View>
     {data? (<View style={styles.resultsContainer}>
        <FlatList
            style = {styles.list}
            keyExtractor={(item, index)=> index.toString()}
            numColumns= '3'
            data={data}
            renderItem={({item}) => (
               <TouchableOpacity style = {styles.show} onPress={() =>          
                  navigation.navigate('Show', {id: item.show.id} )}>    
                <View style={styles.text}>
                  {check(item)}
                </View>
              </TouchableOpacity>
            )}
    
        />
          {/*  if no data, show loading spinner */}

        </View>) : (<View style={styles.loadingContainer}>
  
        <ActivityIndicator size="large" color="#000"/>
  
      </View>)}
    </View>
  </View>
  );

 

}


//The stylesheets for everything
const styles = StyleSheet.create({

container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
},

search :{
  paddingLeft: 15,
  width: 300,
  height: 40,
  borderWidth: 2,
 
  borderColor: '#3F3F3F',
  color: '#3F3F3F',
  marginBottom: 10,
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
}, 
list:{
 marginTop: 0,
},
categories:{
  fontSize: 70,
  color: '#3F3F3F',

}

});

  
export default ShowDisplay;


