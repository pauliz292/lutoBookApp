import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { SearchBar, Image } from 'react-native-elements';

// styles import
//import styles from './styles';
import BackButton from '../_common/back';
import RecipesCard from './recipesCard';

class Recipes extends Component {
    state = {
        search: ''
    };

    updateSearch = search => {
        this.setState({ search })
    };

    render() {
        const { search } = this.state;

        return (
            <View style={{ height: Dimensions.get("window").height }}>
                <View style={{ height: '20%' }}>
                    <Image
                        style={{ height: 90 }}   
                        source={require('../../static/images/banner.jpeg')}
                    />
                    <View style={{ height: 20 }}>
                        <BackButton />
                    </View>
                </View>
                <View style={{ height: '10%' }}>
                    <SearchBar
                        style={{ height: 20 }}
                        lightTheme={true}
                        placeholder="Type Here..."
                        onChangeText={this.updateSearch}
                        value={search}
                    />
                </View>
                <View style={{ height: '70%' }}>
                    <RecipesCard />
                </View>
            </View>
        );
    }
}

export default Recipes;