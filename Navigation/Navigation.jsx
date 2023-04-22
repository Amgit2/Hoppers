import React, { useEffect, useState } from 'react';
import {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  FlatList,
  View,
} from 'react-native';

// import from app
import {NavigationContainer} from '@react-navigation/native';
import { setScreen } from '../App';


 const onClickHandler = (path) => {
   setScreen(path);
//     //setMarkers(s.getArrayOfMarkers());
}

//function Navigation(){
  const Navigation = () => {
    return (
      <View>
            <Button title = 'Profile'  onPress={() => onClickHandler('Profile')}></Button>
            <Button title = 'Map 2'  onPress={() => onClickHandler('Map')}></Button>
            <Button title = 'Favorites 2'  onPress={() => onClickHandler('Favorites')}></Button>
      </View>
    )
}

export default Navigation;
/*

                <li>Profile</li>
                <li>Favorites</li>

*/