import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import BackButton from '../_common/back';

class LocationPage extends Component {
    componentDidMount() {
        // let geoOptions = {
        //     enableHighAccuracy: true,
        //     timeOut: 20000,
        //     maximumAge: 60 * 60 * 24
        // };
        navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError);
    }

    geoSuccess = position => {
        console.log(position.coords.longitude, position.coords.latitude);
    };

    geoError = err => {
        console.log(err.message);
    };

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={{ height: 30 }}>
                    <BackButton />
                </View>
                {/* <WebView source={{ uri: 'https://www.google.com/maps/' }} /> */}
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
})