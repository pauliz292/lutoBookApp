import React, { Component } from 'react';
import { Link } from 'react-router-native';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

const BackButton = () => {
    return(
        <View style={{ height: 20, flexDirection: 'row', marginTop: 10 }}>
            <Icon 
                name='angle-left'
                type='font-awesome'
                color='#3F51B5'
                iconStyle={{ marginRight: 5 }}
            />
            <Link to="/">
                <Text style={{ color: '#3F51B5', fontSize: 17, textAlign: 'left' }}>
                    Back to Home
                </Text>
            </Link>
        </View>
    );
};

export default BackButton