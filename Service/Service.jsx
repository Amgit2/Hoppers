import React, { Component } from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
/*
We call Services From the front end

Ex. For Getting bars -> we call GetBars(Info) -> returns Array of Json for Markers

*/
class Services extends Component {

getBars(){
 return "Hello12312";
}

ArrayOfLocations = {
  LocationJson: [
    {
      name:'1-1-1',
      latitude: 33,
      longitude: -122.4324,
      description: 'This is a description of the marker'
    },
    {
      name:'2-2',
      latitude: 35.78825,
      longitude: -122.4324,
      description: 'This is a description of the marker'
    },
    {
      name:'3-1',
      latitude: 38.78825,
      longitude: -122.4324,
      description: 'This is a description of the marker'
    }
  ]
}

getArrayOfLocations(){
  return this.ArrayOfLocations.LocationJson;
}


handleBarSearch = (latitude,longitude) => {
  const url  = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
  const location = `location=${latitude},${longitude}`;
  const radius = '&radius=2000';
  const type = '&keyword=restaurant';
  const key = '&key=AIzaSyChggobXMt-u7aYNGyBfOU1-x5OaDsnKKk';
  const restaurantSearchUrl = url + location + radius + type + key;
  let restaurantList = [];

  // Fetch with above data
  fetch(restaurantSearchUrl)
  .then(response => response.json())
  .then(result => console.log(result))

  console.log("Hi");
  console.log(result);
  console.log("Hi");
}

}

export default Services


