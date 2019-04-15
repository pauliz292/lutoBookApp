import React, { Component } from 'react';
import { View, Text } from 'react-native';

class RecipeDetails extends Component {
    componentDidMount() {
        const { recipe } = this.props.location.state;
        console.log(recipe);
    }

    render() {
        return (
            <View>
                <View>
                    <Text>
                        Recipe Details
                    </Text>
                </View>
                <View>
                    <Text>Image</Text>
                    <Text>Name of Recipe</Text>
                    <Text>Description</Text>
                    <Text>Ingredients</Text>
                    <Text>Instructions</Text>
                </View>
            </View>
        );
    }
}

export default RecipeDetails;