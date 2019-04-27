import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Button } from 'react-native-elements';

const MapLocation = ({ location, history }) => {
    console.log(location.state.place);
    const place = location.state.place;
    return(
        <View style={styles.wrapper}>
            <View style={styles.buttonwrapper}>
                <Button 
                    title="Back"
                    onPress={() => history.goBack()}
                />
            </View>
            <MapView
                region={{ 
                    latitude: 7.076238, 
                    longitude: 125.6207596, 
                    latitudeDelta: 7.076238, 
                    longitudeDelta: 125.6207596
                }}
                ref={map => {this.map = map}}
                style={styles.map}
                zoomEnabled={true}
                minZoomLevel={15}
                onMapReady={this.onMapReady}
                >
                <Marker
                    title="Market Address"
                    coordinate={{ latitude: place.lat, longitude: place.lng }}
                />
            </MapView>
        </View>
    );
}

export default MapLocation;

const styles = StyleSheet.create({
    wrapper: {
        overflow: 'hidden',
        width: Dimensions.get('window').width,
        height: '100%',
    },
    map: {
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        height: '90%',
    },
    buttonwrapper: { 
        height: '10%', 
        flexDirection: 'row', 
        marginTop: 10, 
        marginLeft: 20,
        justifyContent: 'space-between',
    },
})