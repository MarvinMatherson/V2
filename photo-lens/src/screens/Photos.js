import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image, TouchableOpacity } from 'react-native';
import { global } from '../config/global';


export default function PhotosScreen({ navigation }) {

const [searchQuery, setSearchQuery] = useState('Beach');
const [photos, setPhotos] = useState();


const searchPhotos = () => {
    console.log("Make a call to the API using the search query: " + searchQuery);
    fetch('https://api.unsplash.com/search/photos?client_id='+global.unsplashAccessKey+'&query='+searchQuery)
    .then((response) => response.json())
    .then((json) => {
    console.log(json);
    setPhotos(json["results"]);
    })
    .catch((error) => {
    console.error(error);
    });

}

useEffect(() => {
    searchPhotos();
    }, [searchQuery]);
    

return (

<View style={styles.PhotosScreen}>

{photos ? <View style={styles.resultsContainer}>

<FlatList 
data={photos}
numColumns= '4'
style={{margin: 10}}
renderItem={({item}) => (

<TouchableOpacity
    style={styles.resultImageTouchable}
    onPress={() =>{navigation.navigate('Photo Details', {
        photoId: item.id,
        });
    }}>

<Image
style={styles.resultImage}
source={{uri: item.urls.regular}}
/>

</TouchableOpacity>


)}
    

/>

</View> : <View style={styles.loadingContainer}>

<ActivityIndicator size="large" color="#000"/>

</View>

}




</View>

);

}


const styles = StyleSheet.create({

PhotosScreen: {

/* styles here */

},
loadingContainer: {

height: '100%',
justifyContent: 'center'

},
resultImage: {
    flex: 1,

margin: 10,

height: 200
},
resultImageTouchable: {

    flex: 1,
    
    margin: 10,
    
    height: 200
    
    }

});