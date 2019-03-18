import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class Recipes extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Recipes</Text>
            </View>
        );
    }
}

export default Recipes;