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

import {Marker} from 'react-native-maps';
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
  let array = [];
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
  .then(result => this.helperHandleBarSearch(result.results))
}

helperHandleBarSearch(ArrayFromGoogle){
  
  let MarkerCreatitionArray = []
  for(let i = 0; i < ArrayFromGoogle.length; i++){
    console.log("From Array numer:" + i);
    
    let DataJson = {};
    DataJson.latitude = ArrayFromGoogle[i].geometry.location.lat; // latitude
    DataJson.longitude = ArrayFromGoogle[i].geometry.location.lng; // longitude
    DataJson.name = ArrayFromGoogle[i].name; // name
    DataJson.decription = ArrayFromGoogle[i].types[0]; // decription
    DataJson.open_now = ArrayFromGoogle[i].opening_hours.open_now; // now open
    DataJson.address = ArrayFromGoogle[i].vicinity; // address  

    console.log(DataJson);
    MarkerCreatitionArray.push(DataJson);
    console.log("From Array");
  }

  this.ArrayOfLocations.LocationJson = MarkerCreatitionArray;
  console.log("The Size of Location Array is: " + this.ArrayOfLocations.LocationJson.length);

}

makeMarkersFromArray(){
  arrayMarker = [];
  let ArrayOfLocations = this.getArrayOfLocations();
  for (let i = 0; i<ArrayOfLocations.length; i++){
    console.log("From Marker Maker 4:15:  " +ArrayOfLocations.length);
     arrayMarker.push(<Marker
      draggable
      coordinate={{
        latitude: ArrayOfLocations[i].latitude,
        longitude: ArrayOfLocations[i].longitude,
      }}            
      title={ArrayOfLocations[i].name}
      description={ArrayOfLocations[i].description}
      />);
    }
    return arrayMarker;
}

}
export default Services


