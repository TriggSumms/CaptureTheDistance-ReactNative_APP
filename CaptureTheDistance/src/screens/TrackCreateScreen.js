//import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { View, StyleSheet,  } from 'react-native';
import { Text, Spacer } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
//import { withNavigationFocus } from 'react-navigation';
//import { requestPermissionsAsync} from 'expo-location';
// import React, { useEffect, useState } from 'react';
// import { Accuracy, watchPositionAsync } from 'expo-location';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';
import {
    useFonts,
    Nunito_400Regular,
    Lato_400Regular,
    Inter_900Black,
    Cinzel_700Bold
} from '@expo-google-fonts/dev';
import { AppLoading } from 'expo';


//Is focused is the props object imported from RN's withNavigationFocus....it allows for an event listener to tell if the screen is focused....through a [bit]


const TrackCreateScreen = ({ isFocused }) => {
    const {
        //state declared to recording....."state.recording"
        state: { recording },
        addLocation
    } = useContext(LocationContext);
    const callback = useCallback(
        location => {
            addLocation(location, recording);
        },
        [recording] //just an array of the current recordings and it will rebuild if there is a change 
        //basically just returning the callback v1 until a new value is given in the array....then a new function is built 
    );
    const [err] = useLocation(isFocused || recording, callback);


    let [fontsLoaded, error] = useFonts({
        Cinzel_700Bold
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }


    return (
         <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
            {/* <View> */}
            <Text style={styles.TrackHeader} >Create a Quick lil Track</Text>
            
            <Map style={styles.map}  />
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm />
            {/* </View> */}
        </SafeAreaView>
    );
};

//This is a lil helper function to request the users location permissions approve/deny
// Im currently not running this version of the application

// const startWatching = async () => {
//  try {
//   const { granted } = await requestPermissionsAsync();
//     await watchPositionAsync({
//        accuracy: Accuracy.BestNavigation,
//        timeInterval: 1000,
//        distanceInterval: 10,
//     }, location =>{
//         console.log(location)
//     }) }
//       if (!granted) {
//         throw new Error('Location permission not granted');
//       }
//     } catch (e) {
//       setErr(e);
//     }  };


//navi bar styling
TrackCreateScreen.navigationOptions = {
    title: 'Add a New Track Babi',
    tabBarIcon: <FontAwesome name="plus" size={20} />
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100,
    },
    TrackHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Cinzel_700Bold',
        fontSize: 30,
        marginBottom: 25,
        marginLeft: 25
    },
    map: {
        justifyContent: 'center',
        alignItems: 'center',
        
    },


});

export default withNavigationFocus(TrackCreateScreen);