import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, Alert } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { apiEndPoint } from '../../config.json';

import * as recipeService from '../../services/recipeService';

class RecipeDetails extends Component {
    state = {
        recipe: {
            category: {},
            recipePhoto: {}
        }
    };

    componentDidMount() {
        const { recipe } = this.props.location.state;
        this.setState({
            recipe: recipe
        })
    }

    handleDelete = () => {
        Alert.alert(
            'Delete Recipe',
            'Are you sure you want to delete this recipe?',
            [
                {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
                },
                {text: 'OK', onPress: () => {
                    recipeService.DeleteRecipe(this.state.recipe.id);
                    this.props.history.goBack();
                }},
            ],
            {cancelable: false},
            );
    };

    render() {
        const {recipe} = this.state;
        let url = apiEndPoint + recipe.recipePhoto.url;

        return (
            <ScrollView style={styles.container}>
                <Image 
                    style={{
                        paddingVertical: 30,
                        width: 450,
                        height: 150,
                        backgroundColor: 'skyblue',
                    }}
                    resizeMode='cover'
                    source={{uri: url}}
                />
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 24, fontWeight: '500' }}>{recipe.name}</Text>
                    <Text style={styles.label}>{recipe.description}</Text>
                    <Text style={styles.label}>Serving Size: {recipe.servingSize}</Text>
                    <Text style={styles.label}>{recipe.tutorialUrl}</Text>
                    <Text style={{ fontWeight: '300', fontSize: 20, }}>Ingredients:</Text>
                    <Text style={styles.label}>{recipe.ingredients}</Text>
                    <Text style={{ fontWeight: '300', fontSize: 20, }}>Procedure:</Text>
                    <Text style={styles.label}>{recipe.instruction}</Text>
                    <View>
                        <Icon 
                            raised
                            name="trash"
                            type="font-awesome"
                            onPress={this.handleDelete}
                            color="#f50"
                        />
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 15, }}>
                        <Button 
                            buttonStyle={{ backgroundColor:'blue' }}
                            title="Back"
                            onPress={() => { this.props.history.goBack() }}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default RecipeDetails;

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
    },
    label: {
        fontSize: 18,
        fontWeight: '300',
        textAlign: 'left',
        marginTop: 5,
    },
})