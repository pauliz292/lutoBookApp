import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

class LocationPage extends Component {
    state = {
        region: {},
        marker: {
            lat: 7.0740632,
            lng: 125.6200578,
        }
    };

    onRegionChange = (region) => {
        this.setState({ region });
    };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError);
    }

    geoSuccess = position => {
        const { latitude, longitude } = {...position.coords}
        const { coords } = position;
        const region = {
            latitude,
            longitude,
            latitudeDelta: latitude,
            longitudeDelta: longitude
        }
        this.map.animateToRegion(region);
        this.setState({ region, marker: coords });
    };

    geoError = err => {
        console.log(err.message);
    };

    render() {
        const {region} = this.state;

        return (
            <View style={styles.wrapper}>
                <MapView
                    // region={this.state.region}
                    ref={map => {this.map = map}}
                    style={styles.map}
                    zoomEnabled={true}
                    minZoomLevel={15}
                    >
                    <Marker
                        title="Current Location"
                        coordinate={{ latitude: region.latitude, longitude: region.longitude }}
                    />
                </MapView>
            </View>
        );
    }
}

export default LocationPage;

const styles = StyleSheet.create({
    wrapper: {
        overflow: 'hidden',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    map: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
    },  
})