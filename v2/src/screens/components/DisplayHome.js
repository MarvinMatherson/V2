import React, {useState, useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity, Image, FlatList, RefreshControl } from "react-native";



export default function HomeDisplay({navigation}) {

  const [data, setData] = useState([]);

  const getNewShow = () => {
    fetch('https://api.tvmaze.com/search/shows?q='+chooseShow)
      .then((response)=> response.json())
      .then((json)=> setData(json))
      .catch((error)=>alert(error))
  }
  
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const [refreshing, setRefreshing] = React.useState(false);
  
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(0.1)
      .then(() => setRefreshing(false))
      
    }, []);


const randomShows = ['car', 'dog', 'cat', 'girls', 'boys', 'new', 'old', 'animals', 'it', 'house', 'food', 'home', 'shop', 'the']
const random = Math.floor(Math.random() * randomShows.length)
const chooseShow = randomShows[random];


  useEffect(()=>{
    getNewShow();
  },[refreshing]);


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



return(
  <View>
  {data? (<View style={styles.resultsContainer}>
<FlatList
refreshControl={
  <RefreshControl
    refreshing={refreshing}
    onRefresh={onRefresh}
  />
}
  numColumns= '3'
  data={data}
  keyExtractor={(item, index)=> index.toString()}
  renderItem={({item}) => (
    
    <TouchableOpacity style = {styles.show}onPress={() => navigation.navigate('Show', {
     id: item.show.id,

    } )}>    
    {check(item)}
    <View style={styles.text}>
     </View>



  </TouchableOpacity>
   
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





