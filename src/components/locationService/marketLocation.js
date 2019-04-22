import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import RNGooglePlaces from 'react-native-google-places';
import BackButton from '../_common/back';

class LocationPage extends Component {
    state = {
        region: {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0,
            longitudeDelta: 0,
        },
        marker: {
            lat: 7.0740632,
            lng: 125.6200578,
        }
    };

    openSearchModal() {
        RNGooglePlaces.openAutocompleteModal()
        .then((place) => {
            console.log(place);
            // place represents user's selection from the
            // suggestions and it is a simplified Google Place object.
        })
        .catch(error => console.log(error.message));  // error is a Javascript Error object
    }

    onRegionChange = (region) => {
        this.setState({ region });
    };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError);
    }

    geoSuccess = position => {
        const { latitude, longitude } = {...position.coords}
        const region = {
            latitude,
            longitude,
            latitudeDelta: latitude,
            longitudeDelta: longitude
        }
        console.log(region);
        this.map.animateToRegion(region);
        this.setState({ region });
    };

    geoError = err => {
        console.log(err.message);
    };

    render() {
        const {region} = this.state;

        return (
            <View style={styles.wrapper}>
                {/* <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.openSearchModal()}
                >
                    <Text>Pick a Place</Text>
                </TouchableOpacity> */}
                <MapView
                    region={region}
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
                <View style={{ height: '10%', alignItems: 'center'}}>
                    <BackButton />
                </View>
            </View>
        );
    }
}

export default LocationPage;

const styles = StyleSheet.create({
    wrapper: {
        overflow: 'hidden',
        width: Dimensions.get('window').width,
        height: '100%',
    },
    // button: {
    //     height: '10%',
    //     width: '100%',
    // },
    map: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        // height: '90%',
    },  
})