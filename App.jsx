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

import MapScreen from './Navigation/Screens/Map/MapScreen';
import Navigation from './Navigation/Navigation';
import Profile from './Navigation/Screens/Profile/Profile';
import Favorites  from './Navigation/Screens/Favorites/FavoritesScreen';
import Login from './Navigation/Screens/Login/loginScreen';

/*
line 45
<MapScreen
      onPress={props.PropsWithChildren}
      //onPress ={onClickHandler}
      />


*/
const App = () =>{


  const onClickHandler = (path) => {
    console.log("hi from " + path);
    //setMarkers(s.getArrayOfMarkers());
  }


  /*
  
    setScreensState(
          <View style={styles.container}>
        <Profile/>
        </View>
        )    


  */
  let [screensState, setScreensState] = useState(
    <View style={styles.container}>
      <Login
      //onPress={props.PropsWithChildren}
      //onPress ={onClickHandler}
      />
  </View>
  );
  
  let [navbar, setNavBar] = useState(
    <View>      
    </View>
  ) 
  routeHandler = (route) => {

    setNavBar(<View>
      <Button title = 'Profile'  onPress={() => routeHandler('Profile') }></Button>
      <Button title = 'Map'  onPress={() => routeHandler('Map')}></Button>
      <Button title = 'Favorites'  onPress={() => routeHandler('Favorites')}></Button>
</View>);

    if(route == 'Profile'){
      console.log('here from Profile'+ route)
      setScreensState(<View style={styles.container}><Profile/></View>);
    } else if(route == 'Map') {
      console.log('here from MapScreen'+ route)
      setScreensState(<View style={styles.container}><MapScreen/></View>);
    } else if(route == 'Favorites') {
      console.log('here from Favorites'+ route)
      setScreensState(<View style={styles.container}><Favorites/></View>);
    }
  }
  
  return(<View style={styles.container}>   
      
       {navbar}
      <View>
            {screensState}
      </View>
    {/* <Navigation/> */}
    {/* <Button title = 'Profile'></Button>
    </Navigation> */}
    
   </View>)
}

 export default App;


 export function getScreen(route){
  routeHandler(route);
 }
 const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent:'center',
    flex: 1,
  },
  map: {
    width:'90%',
    height:'90%'
  },
 });