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

locations = []

getArrayOfLocations(){
  return this.ArrayOfLocations.LocationJson;
}

helper = async () =>{
  this.locations = await this.barSearch(37.78825, -122.4324);
  return await this.makeMarkersFromArray()
}

async barSearch(lat, long){
  console.log("Bar Search")
  let array = [];
  const url  = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
  const location = `location=${lat},${long}`;
  const radius = '&radius=2000';
  const type = '&keyword=restaurant';
  const key = '&key=AIzaSyChggobXMt-u7aYNGyBfOU1-x5OaDsnKKk';
  const restaurantSearchUrl = url + location + radius + type + key;
  let restaurantList = [];

  // Fetch with above data
  response = await fetch(restaurantSearchUrl);
  barData = await response.json();
  result = this.helperHandleBarSearch(barData.results);
  
  return result
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
  // Fetch with above data
  return fetch(restaurantSearchUrl)
  .then(response => response.json())
  .then(result => this.helperHandleBarSearch(result.results))
}

helperHandleBarSearch(ArrayFromGoogle){
  
  let MarkerCreatitionArray = []
  console.log("before the for loop")
  for(let i = 0; i < ArrayFromGoogle.length; i++){
    //console.log("From Array numer:" + i);
    console.log("in the for loop")
    let DataJson = {};
    DataJson.latitude = ArrayFromGoogle[i].geometry.location.lat; // latitude
    DataJson.longitude = ArrayFromGoogle[i].geometry.location.lng; // longitude
    DataJson.name = ArrayFromGoogle[i].name; // name
    DataJson.decription = ArrayFromGoogle[i].types[0]; // decription
    DataJson.open_now = ArrayFromGoogle[i].opening_hours.open_now; // now open
    DataJson.address = ArrayFromGoogle[i].vicinity; // address  

    //console.log(DataJson);
    MarkerCreatitionArray.push(DataJson);
    //console.log("From Array");
  }

  this.ArrayOfLocations.LocationJson = MarkerCreatitionArray;
  console.log("The Size of Location Array is: " + this.ArrayOfLocations.LocationJson.length);
  return MarkerCreatitionArray
}

addMoreMarkersToArray(){
  this.ArrayOfLocations.LocationJson.push({
    name:'4-1-1',
    latitude: 33.5,
    longitude: -122.2,
    description: 'This is a description of the marker 2'
  });
  this.ArrayOfLocations.LocationJson.push({
    name:'4-2-2',
    latitude: 35.5,
    longitude: -121.2,
    description: 'This is a description of the marker 2'
  });
  this.ArrayOfLocations.LocationJson.push({
    name:'4-3-3',
    latitude: 38.5,
    longitude: -124.2,
    description: 'This is a description of the marker 2'
  });
}

makeMarkersFromArray(){
  //this.handleBarSearch(37.78825,-122.4324);
  arrayMarker = [];
  let ArrayOfLocations = this.getArrayOfLocations();
  for (let i = 0; i<ArrayOfLocations.length; i++){
    console.log("From Marker Maker 4:15:  " +ArrayOfLocations.length);
     arrayMarker.push(<Marker
      draggable
      key={ArrayOfLocations[i].name}
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
