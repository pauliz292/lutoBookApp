import React, { Component } from 'react';
import { Link } from 'react-router-native';
import { Text, View } from 'react-native';
import FontAwesome, { Icons, IconTypes } from 'react-native-fontawesome';

const BackButton = () => {
    return(
        <View style={{ alignItems: 'flex-start', height: 20 }}>
            <Link to="/">
                <Text style={{ color: '#3F51B5', margin: 10, fontSize: 15, textAlign: 'left' }}>
                    <FontAwesome 
                        type={IconTypes.FAR} 
                        style={{ fontSize: 15 }}>
                        {Icons.arrowLeft}
                    </FontAwesome>
                    Back to Home
                </Text>
            </Link>
        </View>
    );
};

export default BackButton