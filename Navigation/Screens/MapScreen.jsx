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
  View,
  AppRegistry
} from 'react-native';
// Import Map and Marker
import MapView, {Marker, enableLatestRenderer, PROVIDER_GOOGLE } from 'react-native-maps';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Services from '../../Service/Service';

const MapScreen = (props) =>{

 
      var minute = new Date().getMinutes();
      var second = new Date().getSeconds();
      var hour = new Date().getHours();


  console.log("Run: " + hour + ":" + minute + ":" + second);//format: d-m-y;

  let initialRegion = {latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,}

  let s = new Services;
  let markerArray = s.makeMarkersFromArray();
  
  console.log("THIS IS IT FINAL");

  //setMarkers(s.barSearch(37.78825,-122.4324));
  React.useEffect(() => {
    //setMarkers
    (s.barSearch(37.78825,-122.4324));
  }, []);

  console.log("THIS IS IT FINAL");

  const onClickHandler = () => {
    setMarkers(s.getArrayOfMarkers());
  }

  const [mapRegion, setMapState] = useState(
    initialRegion
  );
  const [markers2, setMarkers] = useState(
    markerArray
  );

  return (
    <View style={styles.container}>
      <Button title = 'Update State'  onPress={props.onClickHandler}></Button>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}       
       region={mapRegion}
       
     >
      {markers2}
     </MapView>
     
   </View>
 ); 
}

//AppRegistry.registerComponent('MapScreen', () => MapScreen);


 export default MapScreen;

 const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent:'center',
    flex: 1,
  },
  map: {
    width:'100%',
    height:'100%'
  },
 });