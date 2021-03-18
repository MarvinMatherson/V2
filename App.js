import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen';
import Shows from './src/screens/Shows';
import SecondScreen from './src/screens/SecondScreen.js';
import PeopleScreen from'./src/screens/PeopleScreen';
import {MaterialIcons} from '@expo/vector-icons';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
 
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#10AC84",
  },
  headerTintColor: "#ffff",
  headerBackTitle: "#ffff",
};


//This is the MainStack component. The ONLY thing to be rendered is the HomeScreen component with the stack navbar that has a button to open the drawer.
const MainStack = ({navigation}) => {
return(
  <Stack.Navigator style={styles.header} screenOptions={screenOptionStyle} initialRouteName="Home">
        <Stack.Screen style = {styles.header}
        name="Home"component={HomeScreen} 
        options={{
         headerTitle: 
          <View>
           <MaterialIcons name='menu' style={styles.color} onPress={() =>navigation.openDrawer()} size={28} /> 
          </View>
          }}
         
        />
        <Stack.Screen name="Shows" component={Shows} />
        <Stack.Screen name="People" component={People} />
      </Stack.Navigator>
      );
  }
//Show stack navigator, using the navigation prop to open drawer
const ShowScreen = ({navigation}) => {
      return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen 
              name="Shows" component={SecondScreen} 
              options={{headerTitle: 
              <View>
                <MaterialIcons style={styles.color} name='menu' onPress={() =>navigation.openDrawer()} size={28} /> 
              </View>
              }} />
        </Stack.Navigator>
          );
        }

//People stack navigator, using the navigation prop to open drawer
const People = ({navigation}) => {
  return(
    <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen 
          name="People" component={PeopleScreen} 
          options={{headerTitle: 
          <View>
            <MaterialIcons name='menu' onPress={() =>navigation.openDrawer()} size={28} /> 
          </View>
          }} />
    </Stack.Navigator>
      );
}




//Drawer navigation being rendered first. The first route points to the MainStack component, the other options are the show screen and people screen
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainStack} /> 
        <Drawer.Screen name="Show Screen" component={ShowScreen} /> 
        <Drawer.Screen name="People Screen" component={People} />
      </Drawer.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  color: {
     color: '#000'
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
});

export default App;