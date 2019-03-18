import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Link } from 'react-router-native';

// styles import
import styles from './styles';
import BackButton from '../_common/back';

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
                <View style={{ marginTop: 30}}>
                    <SearchBar
                        lightTheme={true}
                        style={{ height: 20 }}
                        placeholder="Type Here..."
                        onChangeText={this.updateSearch}
                        value={search}
                    />
                </View>
                <View style={{ marginTop: 50}}>

                </View>
            </View>
        );
    }
}

export default Recipes;