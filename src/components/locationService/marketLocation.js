import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import RNGooglePlaces from 'react-native-google-places';
import BackButton from '../_common/back';
import { Icon } from 'react-native-elements';
import * as locationService from '../../services/locationService';

class LocationPage extends Component {
    state = {
        places: [
            {
                id:1,
                geometry: { latitude: 0, longitude: 0},
            },
            {
                id:2,
                geometry: { latitude: 0, longitude: 0},
            },
        ],
        region: {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0,
            longitudeDelta: 0,
        },
        searchedRes: {
            latitude: 0,
            longitude: 0,
        }
    };

    // openSearchModal() {
    //     RNGooglePlaces.openAutocompleteModal()
    //     .then((place) => {
    //         console.log(place.location);
    //         this.setState({ 
    //             searchedRes: place.location
    //         })
    //     })
    //     .catch(error => console.log(error.message));
    // }

    openList = () => {
        const { places } = this.state;
        this.props.history.push({
            pathname: "/marketlist",
            state: {
                places
            }
        });
    };

    onRegionChange = (region) => {
        this.setState({ region });
    };

    async componentDidMount() {
        await navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError);
    }

    geoSuccess = async (position) => {
        const { latitude, longitude } = {...position.coords}
        const region = {
            latitude,
            longitude,
            latitudeDelta: latitude,
            longitudeDelta: longitude
        }
        console.log(region);
        await locationService.locateMarkets(region.latitude, region.longitude)
            .then(res => {
                this.setState({ places: res.data.results })
            }).catch(error => console.log(error));

        this.map.animateToRegion(region);
        this.setState({ region });
    };

    geoError = err => {
        console.log(err.message);
    };

    render() {
        const {region, searchedRes} = this.state;

        return (
            <View style={styles.wrapper}>
                <View style={styles.buttonwrapper}>
                    <BackButton />
                    <Icon
                        name="search"
                        type="font-awesome"
                        onPress={this.openList}
                        color="gray"
                        iconStyle={{ marginRight: 20 }}
                    />
                </View>
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
                    <Marker
                        title="Current Location"
                        coordinate={{ latitude: searchedRes.latitude, longitude: searchedRes.longitude }}
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
        height: '100%',
    },
    buttonwrapper: { 
        height: '10%', 
        flexDirection: 'row', 
        marginTop: 10, 
        marginLeft: 20,
        justifyContent: 'space-between',
    },
    map: {
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        height: '90%',
    },  
    search: { 
        marginRight: 20,
    }
})