import React, {useState, useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity, Image, FlatList, RefreshControl } from "react-native";
import PeopleDisplay from './components/DisplayPeople';



const ShowScreen = ({navigation}) => {


return(
    <PeopleDisplay navigation = {navigation} />
)

}

export default ShowScreen;