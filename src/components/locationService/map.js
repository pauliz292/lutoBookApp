import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

class MapLocation extends Component {
    state = {
        place: {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0,
            longitudeDelta: 0,
        },
    };

    componentDidMount() {
        const { place } = this.props.location.state;
        console.log(place);
        const _place = {
            latitude: place.lat,
            longitude: place.lng,
            latitudeDelta: place.lat,
            longitudeDelta: place.lng
        }
        this.map.animateToRegion(_place);
        this.setState({ place: _place })
    };

    render() {
        const { place } = this.state;

        return (
            <View style={styles.wrapper}>
                <MapView
                    region={{ latitude: 7.076238, longitude: 125.6207596, latitudeDelta: 7.076238, longitudeDelta: 125.6207596}}
                    ref={map => {this.map = map}}
                    style={styles.map}
                    zoomEnabled={true}
                    minZoomLevel={15}
                    >
                    <Marker
                        title="Current Location"
                        coordinate={{ latitude: place.latitude, longitude: place.longitude }}
                    />
                </MapView>
            </View>
        );
    }
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
        top: 0,
        position: 'absolute',
        // height: '90%',
    }
})