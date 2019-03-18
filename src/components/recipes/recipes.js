import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Link } from 'react-router-native';

// styles import
import styles from './styles';
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
            <View style={styles.container}>
                <View style={styles.banner}>
                    
                </View>
                <BackButton />
                <View style={styles.content}>
                    <SearchBar
                        lightTheme={true}
                        style={{ height: 50 }}
                        placeholder="Type Here..."
                        onChangeText={this.updateSearch}
                        value={search}
                    />
                </View>
                <View style={styles.content}>
                    <RecipesCard />
                </View>
            </View>
        );
    }
}

export default Recipes;