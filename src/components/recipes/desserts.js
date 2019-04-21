import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, Button, Icon, ListItem } from 'react-native-elements';
import { apiEndPoint } from '../../config.json';

import * as recipeService from '../../services/recipeService';

class Organic extends Component {
    state = {
        recipes: [
            {
                id:1,
                name:"Matcha Cake",
                description:"Matcha chocolate",
                recipePhoto: {
                    id: 1,
                    url: "https://picsum.photos/200/300"
                }
            },
            {
                id:2,
                name:"Mango Juice",
                description:"Mango crushed",
                recipePhoto: {
                    id: 2,
                    url: "https://picsum.photos/200/300"
                }
            },
        ]
    };

    componentDidMount() {
        this.getRecipes();
    };

    getRecipes = async () => {
        try {
            await recipeService.GetRecipesByMealType("desserts")
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
        // let url = apiEndPoint + recipes.recipePhoto.url

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
                            leftAvatar={{ source: { uri: apiEndPoint + recipe.recipePhoto.url }}} />
                    ))}
                </Card>
            </ScrollView>
        );
    }
}

export default Organic;