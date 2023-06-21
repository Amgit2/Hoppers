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
import SignUpPage from './Navigation/Screens/Login/signUpScreen';
import Confirmation from './Navigation/Screens/Login/confirmation';
// Main function
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

  // Renders the Current Screen
  let [screensState, setScreensState] = useState(
    <View style={styles.container}>
      <Login
      />
  </View>
  );

  // Renders the Navigation Bar
  let [navbar, setNavBar] = useState(
    <View>      
    </View>
  )
  
  
  // Function handles the route change
  // Input will be the screen being called
  // Will set the new screen 
  routeHandler = (route) => {

    setNavBar(<View>      
      <Navigation/>
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

    } else if(route == 'Login') {
      console.log('here from Login'+ route)
      setScreensState(<View style={styles.container}><Login/></View>);
    
    } else if(route == 'SignUp') {
      console.log('here from SignUp'+ route)
      setScreensState(<View style={styles.container}><SignUpPage/></View>);

    } else if(route == 'Confirmation') {
      console.log('here from confirmation'+ route)
      setScreensState(<View style={styles.container}><Confirmation/></View>);
    
    // } else if(route == 'ForgotPassword') {
    //   console.log('here from ForgotPassword'+ route)
    //   setScreensState(<View style={styles.container}><ForgotPassword/></View>);
    }
  }
  
  return(<View style={styles.container}> 
      
       {navbar}
      <View>
            {screensState}
      </View>    
   </View>)
}

 export default App;

// The function that should be called when another screen wants to change the current screen
 export function setScreen(route){
  routeHandler(route);
 }

 const styles = StyleSheet.create({
  root: {
    flex: 1, 
    backgroundColor: '#F9FBFC'
  },
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