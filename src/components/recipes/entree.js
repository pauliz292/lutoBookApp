import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, Button, Icon, ListItem } from 'react-native-elements';

import * as recipeService from '../../services/recipeService';

class Organic extends Component {
    state = {
        recipes: [
            {
                id:1,
                name:"Matcha Cake",
                description:"Matcha chocolate"
            },
            {
                id:2,
                name:"Mango Juice",
                description:"Mango crushed"
            }
        ]
    };

    componentDidMount() {
        this.getRecipes();
    };

    getRecipes = async () => {
        try {
            await recipeService.GetRecipesByMealType("entree")
                .then(resp => {
                    console.log(resp);
                    this.setState({ recipes: resp.data })
                });
        } catch (error) {
            console.log(error);   
        }
    };

    render() {
        const { recipes } = this.state;

        return (
            <ScrollView>
                <Card containerStyle={{ padding: 0 }} style={{ marginTop: 50, height: 600}}>
                    {recipes.map(recipe => (
                        <ListItem 
                            key={recipe.id}
                            style={{ height: 100 }}
                            title={recipe.name} 
                            subtitle={
                                <View style={{ height: 50 }}>
                                    <Text>{recipe.description}</Text>
                                    <Button
                                        title="Clear button"
                                    />
                                </View>
                            }
                            leftAvatar={{ source: { uri: 'https://picsum.photos/g/100/' }}} />
                    ))}
                </Card>
            </ScrollView>
        );
    }
}

export default Organic;