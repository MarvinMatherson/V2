
import React, { useState, useEffect} from "react";
import { Button, View, StyleSheet, Text, Image, ActivityIndicator, FlatList} from "react-native";
import { ScrollView } from "react-native-gesture-handler";


const check = (tvshow) => {
  if(tvshow.image){
    return(
      <Image source={{uri:tvshow.image.medium}} style={{width:'100%', height: 400}} />
    )
  }else{
    return(
      <Image source={require('./components/noimage.png')} style={{width: '100%', height: 200}} />

    )
  }
}

const specialRemove = () => {
  if(tvshow.summary){
    const original = tvshow.summary;
    const changed = original.replace('<p>', '</p>', '<br>', '')
    return(
      <Text style={styles.summary}>{changed}</Text>
    )
  } else{
    return(
      <Text>There is no summary for this show!</Text>
    )
  }
}




const People = ({navigation, route}) => {
const { id } = route.params;

const [tvshow, setShow] = useState([])
console.log(id)

useEffect(()=>{
  fetch('http://api.tvmaze.com/people/'+id)
  .then((response)=> response.json())
  .then((json)=> setShow(json))
  .catch((error)=>alert(error))
},[id]);

  return (
<View>
{tvshow ? (
<View>
  <ScrollView>
  {check(tvshow)}
<Text style={styles.header}>{tvshow.name}</Text>
<Text style={styles.summary}>{tvshow.summary}</Text>
  </ScrollView>

</View>
) : (
<View>
<ActivityIndicator size="large" color="#000"/>
</View>
)}
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
  }
});

export default People;