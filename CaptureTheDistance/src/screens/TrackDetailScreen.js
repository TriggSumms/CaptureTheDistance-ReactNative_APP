import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';
import moment from 'moment';
import {
    useFonts,
    Nunito_400Regular,
    Lato_400Regular,
    Inter_900Black,
    Cinzel_700Bold
} from '@expo-google-fonts/dev';
import { AppLoading } from 'expo';






const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext); // pull the track's list
    const _id = navigation.getParam('_id'); //pull id from route


    const track = state.find(t => t._id === _id); //find function pulls apart the arrray of tracks and pairs it with the "_id" number given?


    //    unixTimeStamp = track.locations.map(loc => loc.timestamp);
    //    const s = new Date(unixTimeStamp).toLocaleDateString("en-US");
    //     let date =  format(timeStamp)

    // const dateconvert = date.toLocaleDateString("en-US");

    // const date = (track.locations.map(loc => loc.timestamp));
    // const dateman = moment.unix(date).format("MM/DD/YYYY");

    // const moment = require('moment');

    // const timestamp = (track.locations.map(loc => loc.timestamp));
    // const formatted = moment(timestamp).valueOf();

    // console.log(formatted); // "02/24/2018"

    //  const dateconvert = datecon.toLocaleDateString("en-US");
    //  console.log("TESTing", date)



    //  let timeStamp = new Intl.DateTimeFormat("en", {
    //     timeStyle: "medium",
    //     dateStyle: "short"
    //   });

    // console.log(date.toLocaleDateString(""));

    const initialCoords = track.locations[0].coords; //Takes the first element in the track object...
    console.log("TESTING TRACK", track)

    
    let [fontsLoaded, error] = useFonts({
        Cinzel_700Bold
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <>
            {/* this is similar to the component we created but...we dont want to grab current info so reusability is not deemed */}
            <View style={styles.container}>
                <Text style={styles.TrackHeader}>...{track.name}</Text>
                {/* <Text style={{ fontSize: 48 }}>{track.timeStamp}</Text> */}
                <MapView
                    initialRegion={{
                        longitudeDelta: 0.01,
                        latitudeDelta: 0.01,
                        ...initialCoords
                    }}
                    style={styles.map}
                >
                    {/* draws a coordinates line */}
                    <Polyline coordinates={track.locations.map(loc => loc.coords)} />
                </MapView>
            </View>
        </>
    );
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
        height: 300
    },
});

export default TrackDetailScreen;