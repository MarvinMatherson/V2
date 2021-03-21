import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen';
import ShowScreen from './src/screens/ShowScreen';
import PeopleScreen from'./src/screens/PeopleScreen';
import Shows from './src/screens/Shows';
import People from './src/screens/People';
import {MaterialIcons} from '@expo/vector-icons';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
 
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#10AC84",
  },
  headerTintColor: "#ffff",
  headerBackTitle: "Return",
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
        <Stack.Screen name="Show" component={Shows} />
        <Stack.Screen name="Person" component={People} />
      </Stack.Navigator>
      );
  }


//Show stack navigator, using the navigation prop to open drawer
const theShows = ({navigation}) => {
      return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen 
              name="Shows" component={ShowScreen} 
              options={{headerTitle: 
              <View>
                <MaterialIcons style={styles.color} name='menu' onPress={() =>navigation.openDrawer()} size={28} /> 
              </View>
              }} />
              <Stack.Screen name="Show" component={Shows} />
        </Stack.Navigator>
          );
        }

//People stack navigator, using the navigation prop to open drawer
const thePerson = ({navigation}) => {
  return(
    <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen 
          name="People" component={PeopleScreen} 
          options={{headerTitle: 
          <View>
            <MaterialIcons name='menu' style={styles.color} onPress={() =>navigation.openDrawer()} size={28} /> 
          </View>
          }} />
      <Stack.Screen name="Person" component={People} />
    </Stack.Navigator>
      );
}




//Drawer navigation being rendered first. The first route points to the MainStack component, the other options are the show screen and people screen
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainStack} /> 
        <Drawer.Screen name="Show Screen" component={theShows} /> 
        <Drawer.Screen name="People Screen" component={thePerson} />
      </Drawer.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  color: {
    marginRight: 200,
     color: '#fff'
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
});

export default App;