
import React, { useState, useEffect} from "react";
import { Button, View, StyleSheet, Text, Image, ActivityIndicator, FlatList} from "react-native";
import { ScrollView } from "react-native-gesture-handler";


const People = ({navigation, route}) => {

const check = (person) => {
  if(person.image){
    return(
      <Image source={{uri:person.image.medium}} style={{width:'100%', height: 400}} />
    )
  }else{
    return(
      <Image source={require('./components/noimage.png')} style={{width: '100%', height: 200}} />

    )
  }
}

const birthday = (person) => {
  if(person.birthday){
    return(
      <Text>{person.name}'s birthday is {person.birthday}.</Text>
    )

}else{
  return(
    <Text>There is no birthday available for {person.name}.</Text>
  )
 
}

}

const { id } = route.params;

const [person, setPerson] = useState([])
console.log(id)

useEffect(()=>{
  fetch('http://api.tvmaze.com/people/'+id)
  .then((response)=> response.json())
  .then((json)=> setPerson(json))
  .catch((error)=>alert(error))
},[id]);

  return (
<View>
{person ? (
<View>
  <ScrollView>
  {check(person)}
<Text style={styles.header}>{person.name}</Text>
  {birthday(person)}
  <Text>{person.name} identifies as a {person.gender}.</Text>
  <Text>Do you want to know more about {person.name}? You can vist his website at: {person.url}</Text>
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