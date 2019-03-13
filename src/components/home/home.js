import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Image } from 'react-native-elements';

// style import
import styles from './styles';

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.banner}>
                    {/* <Image 
                        style={styles.image}
                        source={{ uri: 'https://picsum.photos/g/' }}
                    /> */}
                </View>
            </View>
        );
    }
}

export default Home;