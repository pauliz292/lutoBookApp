import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, Button, Icon, ListItem } from 'react-native-elements';
import { Link } from 'react-router-native';

import * as recipeService from '../../services/recipeService';
import { apiEndPoint } from '../../config.json';

class Organic extends Component {
    state = {
        recipes: [
            {
                id:1,
                name:"Matcha Cake",
                description:"Matcha chocolate",
                tutorialUrl: "https://www.google.com",
                recipePhoto: {
                    id: 1,
                    url: "https://picsum.photos/200/300"
                }
            },
            {
                id:2,
                name:"Mango Juice",
                description:"Mango crushed",
                tutorialUrl: "https://www.google.com",
                recipePhoto: {
                    id: 1,
                    url: "https://picsum.photos/200/300"
                }
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
                                    <Link to={{
                                        pathname: '/recipedetails',
                                        state: {
                                            recipe: recipe
                                        }
                                    }}>
                                        <Text style={{color: 'blue'}}>See details</Text>
                                    </Link>
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