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
import {NavigationContainer} from '@react-navigation/native';

const onClickHandler = (path) => {
    console.log("hi from " + path);
    //setMarkers(s.getArrayOfMarkers());
  }

function Navigation(){
    return (
      <View>
            <Button title = 'Profile'  onPress={onClickHandler('Profile')}></Button>
            <Button title = 'Map'  onPress={onClickHandler('Map')}></Button>
            <Button title = 'Favorites'  onPress={onClickHandler('Favorites')}></Button>
      </View>
    )
}

export default Navigation;
/*

                <li>Profile</li>
                <li>Favorites</li>

*/