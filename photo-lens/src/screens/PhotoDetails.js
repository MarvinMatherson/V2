import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import { global } from '../config/global';


export default function PhotoDetailsScreen({route, navigation }) {
    const { photoId } = route.params;
    console.log("show details for photo: " + photoId);
    const [photoData, setPhotoData] = useState([]);

    const getPhotoData = () => {
        fetch('https://api.unsplash.com/photos/'+photoId+'?client_id='+global.unsplashAccessKey)
        .then((response) => response.json())
        .then((json) => {
        setPhotoData(json["results"]);
        })
        .catch((error) => {
        console.error(error);
        });
    }

    useEffect(() => {
        getPhotoData();
        }, [photoId]);
        
return (

<View style={styles.PhotoDetailsScreen}>
{photoData ? (
<View style={styles.detailsContainer}>
    <Text>{photoData.description}</Text>
</View>
) : (
<View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color="#000"/>
</View>
)}
</View>
);
}


const styles = StyleSheet.create({

PhotoDetailsScreen: {
},
loadingContainer: {
    height: '100%',
    justifyContent: 'center'
    },

});