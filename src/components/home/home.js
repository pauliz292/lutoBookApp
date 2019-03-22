import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';
import { Image } from 'react-native-elements';

// style import
import styles from './styles';

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.banner}>
                    <Image 
                        style={styles.image}
                        source={require('../../static/images/banner.jpeg')}
                    />
                </View>
                <View style={styles.linksContainer}>
                    <Link to="/recipes">
                        <Text style={styles.linkText}>Recipes</Text>
                    </Link>
                </View>
                <View style={styles.linksContainer}>
                    <Link to="/location">
                        <Text style={styles.linkText}>Location Service</Text>
                    </Link>
                </View>
                <View style={styles.linksContainer}>
                    <Link to="/login">
                        <Text style={styles.linkText}>Meal Planner</Text>
                    </Link>
                </View>
            </View>
        );
    }
}

export default Home;