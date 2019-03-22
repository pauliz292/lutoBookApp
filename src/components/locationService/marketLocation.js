import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import BackButton from '../_common/back';

class LocationPage extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={{ height: 30 }}>
                    <BackButton />
                </View>
                <WebView source={{ uri: 'https://www.google.com/maps/' }} />
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