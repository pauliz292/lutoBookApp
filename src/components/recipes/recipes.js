import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Image } from 'react-native-elements';

import * as recipeService from '../../services/recipeService';

import BackButton from '../_common/back';
import RecipesCard from './recipesCard';

class Recipes extends Component {
    async componentDidMount() {
        await recipeService.GetRecipes();
    };

    render() {
        return (
            <View style={{ height: Dimensions.get("window").height }}>
                <View style={{ height: '20%' }}>
                    <Image
                        style={{ height: 90 }}   
                        source={require('../../static/images/banner.jpeg')}
                    />
                    <View style={{ height: 20, alignItems: 'center' }}>
                        <BackButton />
                    </View>
                </View>
                <View style={{ height: '70%' }}>
                    <RecipesCard />
                </View>
            </View>
        );
    }
}

export default Recipes;