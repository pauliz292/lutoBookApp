import React, { Component } from 'react';
import { Link } from 'react-router-native';
import { Text, View } from 'react-native';

const BackButton = () => {
    return(
        <View style={{ alignItems: 'flex-start' }}>
            <Link to="/">
                <Text style={{ color: '#3F51B5' }}>Back to Home</Text>
            </Link>
        </View>
    );
};

export default BackButton