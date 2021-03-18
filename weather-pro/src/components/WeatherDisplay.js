import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';



export default function WeatherDisplay({weatherData}) {

if(weatherData){
    return(
    <View style={styles.weatherDisplay}>
            <Image source={{uri:'http://openweathermap.org/img/wn/' + weatherData.icon + '@2x.png'}} style={styles.WeatherIcon} />
        <View style ={styles.weatherDetails}> 
         <Text style={[styles.weatherDetailsText, styles.weatherDescription]}>{weatherData.description}</Text>
         <Text style={styles.weatherDetailsText}> Temperature: {weatherData.temp}</Text>
         <Text style={styles.weatherDetailsText}>Feels like: {weatherData.feelsLike}</Text>
         <Text style={styles.weatherDetailsText}>Humidity{weatherData.humidity}</Text>
    </View>
    </View>
    )
}else{
    return(
        <View style={styles.weatherDisplay}>
            <Text style={styles.weatherDetailsText}>Loading Weather Data</Text>
        </View>
    )
}

}

const styles = StyleSheet.create({

weatherDisplay: {
flexDirection: 'row',
backgroundColor: 'rgba(255,255,255,0.3)',
borderRadius: 15,
margin: 15,
padding: 10
},
WeatherIcon:{
    width: 120,
    height: 120
},
weatherDetails:{
    
},
weatherDetailsText:{
    fontWeight: '700',
    fontSize: 18


},
weatherDescription:{
    marginBottom: 10
}


});
