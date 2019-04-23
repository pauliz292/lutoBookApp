import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import BackButton from '../_common/back';
import { apiEndPoint } from '../../config.json';

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

    render() {
        const {recipe} = this.state;
        let url = apiEndPoint + recipe.recipePhoto.url;
        console.log(url)

        return (
            <View style={styles.container}>
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
                    <Text style={styles.label}>{recipe.tutorialUrl}</Text>
                    <Text style={{ fontWeight: '300', fontSize: 20, }}>Ingredients:</Text>
                    <Text style={styles.label}>{recipe.ingredients}</Text>
                    <Text style={{ fontWeight: '300', fontSize: 20, }}>Procedure:</Text>
                    <Text style={styles.label}>{recipe.instruction}</Text>
                    <View style={{ alignItems: 'center' }}>
                        <BackButton />
                    </View>
                </View>
            </View>
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