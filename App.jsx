import React, { useState } from 'react';
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

import Services from './Service/Service';

const App = () =>{

  
  let s = new Services;
  let markerArray = s.makeMarkersFromArray();
  const [mapRegion, setMapState] = useState(
    initialRegion
  );
  const [markers2, setMarkers] = useState(
    markerArray
  );
  
  console.log("THIS IS IT FINAL");
  //setMarker
  //(s.barSearch(37.78825,-122.4324));
  console.log("THIS IS IT FINAL");
  let initialRegion = {latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,}


  

  const onClickHandler = () => {
    // setMapState({
    //   latitude: 39.78825,
    //   longitude: -120.4324,
    //   latitudeDelta: 0.0922,
    //   longitudeDelta: 0.0421,
    // })
    setMarkers(s.makeMarkersFromArray());
  }

  return (
    //this.handleBarSearch(37.78825,-122.4324);
    //this.handleBarSearch(37.78825,-122.4324);
    <View style={styles.container}>
      <Button title = 'Update State'  onPress={onClickHandler}></Button>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}       
       region={mapRegion}
       
     >
      {markers2}
     </MapView>
     
   </View>
 );
  // return(
    
  //     <MapView //style={styles.map}
  //       region={mapRegion}
  //     >
  //     <Button title = 'Update State'  onPress={onClickHandler}></Button>  
  //       </MapView>
    
  // )
 
 const markerLocationJson = [
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


 export default App;

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



 //import Services from '../android/app/build/Service/Service';
/*

const MapStateComponent = () => {
  

  const updateMap = (key, value) => {
    setMapState(map => new Map(map.set(key, value)));
  }

  useEffect(() => {

  })
}


region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }


      function workingMap() {
  return (
     <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        onRegionChange={onRegionChange}
        region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421,
        }}
      >
        {showMarkerLocations()}
      </MapView>
    </View>
  );

*/




// makeMarker = () =>{
//   let temp;
// let s = new Services; 
// s.handleBarSearch(37.78825,-122.4324);
// temp = s.makeMarkersFromArray();
// //s.handleBarSearch(37.78825,-122.4324).then((responce) => temp = s.makeMarkersFromArray()); // THIS IS BROKEN, nEED TO GET 2nd funciton to wait on the first
// return temp;
// //return (s.makeMarkersFromArray());
// }

/* <View style={styles.body}>
    //   <Text style={styles.text}> {name}</Text>
    //   <Text style={styles.text}> This session number {session.number}</Text>
    //   <Text style={styles.text}> {current ? 'current session' : 'next current'}</Text>
    //   <Button title = 'Update State'  onPress={onClickHandler}></Button>

    // </View> */