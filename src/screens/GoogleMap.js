import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View } from "react-native";
import MapView, { Polyline } from "react-native-maps"
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location"
import '../_mockLocation';

const GoogleMap = () => {

    const [err, setErr] = useState(null)

    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, (location) => {
                console.log(location)
            });
        }
        catch (e) {
            setErr(e)
        }
    }

    useEffect(() => {
        startWatching();
    }, []);

    let points = [];
    for (let i = 0; i < 20; i++) {
        if (i % 2 === 0) {
            points.push({
                latitude: 37.33233 + i * 0.001,
                longitude: -122.03121 + i * 0.001
            })
        }
        else {
            points.push({
                latitude: 37.33233 - i * 0.002,
                longitude: -122.03121 + i * 0.001
            })
        }

    }
    return (
        <View>
            <Text style={styles.text}>GoogleMap Screen</Text>
            <View>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.33233,
                        longitude: -122.03121,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01
                    }}
                >
                    <Polyline coordinates={points} />
                </MapView>
            </View>
            {err ? <Text>Please enable location services</Text> : null}
        </View>
    )

}
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        marginTop: '8%',
        marginBottom: '2%',
        alignSelf: 'center'
    },
    map: {
        height: 300
    }
});

export default GoogleMap;
