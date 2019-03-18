import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import styles from './styles';

class RecipesCard extends Component {
    render() {
        return (
            <Card style={{ marginTop: 50}}
                image={require('../../static/images/banner.jpeg')}>
                <Text style={{marginBottom: 10, marginTop: 20,}}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <Button
                    backgroundColor='#03A9F4'
                    buttonStyle={styles.buttonStyle}
                    title='Check Tutorial' />
            </Card>
        );
    }
}

export default RecipesCard;