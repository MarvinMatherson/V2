import React, {useState, useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity, Image, FlatList, RefreshControl } from "react-native";
import ShowDisplay from './components/DisplayShow';


const ShowScreen = ({navigation}) => {


return(
    <ShowDisplay navigation = {navigation} />
)

}

export default ShowScreen;