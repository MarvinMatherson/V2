import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import LocationSearch  from './src/components/LocationSearch';
import WeatherDisplay from './src/components/WeatherDisplay';



export default function App() {

const [weatherData, setWeatherdata] = useState();
const [location, setLocation] = useState('Ipswich, UK')
const apiKey = '8ab65dfbd6e15ce9c8087b2d6a3b6797';

const getWeather = () =>{

  fetch('http://api.openweathermap.org/data/2.5/weather?q='+ location +'&units=metric&appid=8ab65dfbd6e15ce9c8087b2d6a3b6797')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);

    setWeatherdata({
      temp: json.main.temp,
      humidity: json.main.humidity,
      pressure: json.main.pressure,
      feelsLike: json.main.feels_like,
      description: json.weather[0].description,
      icon: json.weather[0].icon,
      windSpeed: json.wind.speed
    })
  })
  .catch((error) => {
    console.log(error)
  });

}

useEffect(()=>{
getWeather();
}, [location]);

const updateLocation = (newLocation) => {

  setLocation(newLocation);
  getWeather();

  
 

}




  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/weather-background/rain.jpg')} style={styles.imageBackground}>
        <LocationSearch updateLocation={updateLocation} />
        <WeatherDisplay weatherData={weatherData}/>
      </ImageBackground>
      <StatusBar hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',

  }
});
