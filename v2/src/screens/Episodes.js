import React, { useState, useEffect} from "react";
import { Button, View, StyleSheet, Text, Image, ActivityIndicator, FlatList} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Episodes = ({route, navigation}) => {

const {tvshowID} = route.params;
console.log(tvshowID)

const[episode, setEpisode] = useState();


useEffect(()=>{
    fetch('http://api.tvmaze.com/shows/'+tvshowID+'/episodes')
    .then((response)=> response.json())
    .then((json)=> setEpisode(json))
    .catch((error)=>alert(error))
  },[tvshowID]);

  const check = (item) => {
    if(item.image && item.summary){
        const original = item.summary;
        const changed = original.replace(/(<([^>]+)>)/ig," ")
      return(
          <View>
            <Image source={{uri: item.image.medium}} style={{width:'100%', height: 400}} />
            <Text style={styles.epname}>Season {item.season}, Episode {item.number}: {item.name}.</Text>
            <Text style={styles.brief}>Brief:  {changed}</Text>
          </View>
      )
    }else{
      return(
          <View>
            <Image source={require('./components/noimage.png')} style={{width: '100%', height: 200}} />
            <Text style={styles.epname}>Season {item.season}, Episode {item.number}: {item.name}.</Text>
            <Text style={styles.brief}>There is no summary for this episode.</Text>
          </View>
        
      )
    }
  }
  

const specialRemove = (tvshow) => {
    if(tvshow.summary){
     
      return(
        <Text style={styles.summary}>{changed}</Text>
      )
    } else{
      return(
        <Text>There is no summary for this episode</Text>
      )
    }
  }




return (
    <View>


    {episode? (<View style={styles.resultsContainer}>
       <FlatList
           style = {styles.list}
           keyExtractor={(item, index)=> index.toString()}
           numColumns= '1'
           data={episode}
           renderItem={({item}) => (  
               <View style={styles.text}>
                        

                 {check(item)}

               </View>
           )}
   
       />
       </View>) : (<View style={styles.loadingContainer}>
 
       <ActivityIndicator size="large" color="#000"/>
 
     </View>)}
   </View>

  )
}




const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
  },
  image:{
    marginTop: 100,
    width: '100%',
    height: 500,
  },

  header: {
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 50,
    marginTop: 20,
    textAlign: 'center',
  },
  summary: {
    marginTop: 20,
    marginBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
  }, 
  text: {
marginBottom: 500,
  width: '100%',
  height: 200,
  borderStyle: "solid",
  borderColor: 'white',
  },
  epname:{
      marginTop: 10,
      textAlign: 'center',
      color: '#000',
      fontSize: 30,
  },
  brief:{
    fontSize: 15,
    color: '#000',
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  }
});

export default Episodes;