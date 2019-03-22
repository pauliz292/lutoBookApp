import React, { Component } from 'react';
import { Text, Image, View, Dimensions } from 'react-native';
import { Card, Button, Icon, ListItem } from 'react-native-elements';
import { TabView, SceneMap } from 'react-native-tab-view';
import styles from './styles';
import Organic from './organic';
import Desserts from './desserts';
import Entree from './entree';
import Sides from './sides';

const _Organic = () => (
    <Organic />
);

const _Desserts = () => (
    <Desserts />
);

const _Entree = () => (
    <Entree />
);

const _Sides = () => (
    <Sides />
);

class RecipesCard extends Component {
    state = {
        index: 0,
        routes: [
            { key: 1, title: 'Organic' },
            { key: 2, title: 'Dessert' },
            { key: 3, title: 'Entree' },
            { key: 4, title: 'Sides' },
        ],
    };

    render() {
        return (
            <TabView 
                navigationState={this.state}
                renderScene={SceneMap({
                    1: _Organic,
                    2: _Desserts,
                    3: _Entree,
                    4: _Sides,
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
            />
        );
    }
}

export default RecipesCard;