import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Picker, Image, AsyncStorage } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import PhotoUpload from 'react-native-photo-upload';

import * as recipeService from '../../services/recipeService';

class Admin extends Component {
    state = {
        recipe:
            { 
                name:"", 
                description:"", 
                instruction:"",
                tutorialUrl:"",
                categoryId:1,
                mealtypeId:1,
                image:"",
                serving:"",
                ingredients:"",
            },
        mealType: [],
        category:[],
    };

    handleLogOut = async () => {
        try {
            await AsyncStorage.removeItem('token')
                .then(() => {
                    this.props.history.push("/");
                })
        } catch (error) {
            console.log(error);
        }
    };

    addRecipe = async () => {
        try {
            let recipe = this.state.recipe;
            await recipeService.AddRecipe(recipe);   
            alert('Recipe Successfully Added!');
        } catch (error) {
            console.log(error);
        }
    };

    setName = name => {
        let recipe = {...this.state.recipe};
        recipe.name = name;
        this.setState({ recipe })
    };

    setDescription = description => {
        let recipe = {...this.state.recipe};
        recipe.description = description;
        this.setState({ recipe })
    };

    setInstruction = instruction => {
        let recipe = {...this.state.recipe};
        recipe.instruction = instruction;
        this.setState({ recipe })
    };

    setTutorialUrl = url => {
        let recipe = {...this.state.recipe};
        recipe.tutorialUrl = url;
        this.setState({ recipe })
    };

    setServing = serving => {
        let recipe = {...this.state.recipe};
        recipe.serving = serving;
        this.setState({ recipe })
    };

    setIngredients = ingredients => {
        let recipe = {...this.state.recipe};
        recipe.ingredients = ingredients;
        this.setState({ recipe })
    };

    storeCategory = value => {
        let recipe = {...this.state.recipe};
        recipe.categoryId = value;
        this.setState({ recipe });
    };

    storeMealType = value => {
        let recipe = {...this.state.recipe};
        recipe.mealtypeId = value;
        this.setState({ recipe }); 
    };

    handleSaveRecipe = () => {
        this.addRecipe();
    };

    Form = props => {
        return (
            <React.Fragment>
                <PhotoUpload
                    onPhotoSelect={image => {
                        if (image) {
                            let recipe = {...this.state.recipe};
                            recipe.image = image;
                            this.setState({ recipe })
                        }
                    }}
                >
                    <Image 
                        style={{
                            paddingVertical: 30,
                            width: 450,
                            height: 150,
                            backgroundColor: 'skyblue',
                        }}
                        resizeMode='cover'
                        source={{
                            uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
                        }}
                    />
                </PhotoUpload>
                <View style={styles.input}>
                    <Text style={styles.label}>Name:</Text>
                    <Input 
                        value={props.name}
                        onChangeText={props.setName}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Description:</Text>
                    <Input 
                        value={props.description}
                        onChangeText={props.setDescription}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Instruction:</Text>
                    <Input 
                        value={props.instruction}
                        onChangeText={props.setInstruction}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Tutorial:</Text>
                    <Input 
                        value={props.tutorialUrl}
                        onChangeText={props.setTutorialUrl}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Serving:</Text>
                    <Input 
                        value={props.serving}
                        onChangeText={props.setServing}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Ingredients:</Text>
                    <Input 
                        multiline={true}
                        value={props.ingredients}
                        onChangeText={props.setIngredients}
                    />
                </View>
                <View style={styles.dropdown}>
                    <Text style={styles.label}>Category:</Text>
                    <Picker
                        selectedValue={props.categoryId}
                        style={{height: 50, width: 200}}
                        onValueChange={props.storeCategory}>
                        <Picker.Item label="Luzon" value="1" />
                        <Picker.Item label="Visayas" value="2" />   
                        <Picker.Item label="Mindanao" value="3" />
                    </Picker>
                </View>
                <View style={styles.dropdown}>
                    <Text style={styles.label}>Meal Type:</Text>
                    <Picker
                        selectedValue={props.mealTypeId}
                        style={{height: 50, width: 200}}
                        onValueChange={ props.storeMealType }>
                        <Picker.Item label="Organic" value="1" />
                        <Picker.Item label="Entree" value="2" />   
                        <Picker.Item label="Sides" value="3" />
                        <Picker.Item label="Desserts" value="4" />  
                    </Picker>
                </View>
                <View style={styles.input}>
                    <Button title="Save" onPress={this.handleSaveRecipe} />
                </View>
            </React.Fragment>
        );
    };

    render() {
        const { recipe } = this.state;

        return (
            <KeyboardAwareScrollView style={styles.container}>
                <this.Form 
                    storeCategory={this.storeCategory}
                    storeMealType={this.storeMealType}
                    mealTypeId={recipe.mealtypeId}
                    categoryId={recipe.categoryId}
                    name={recipe.name}
                    description={recipe.description}
                    instruction={recipe.instruction}
                    serving={recipe.serving}
                    tutorialUrl={recipe.tutorialUrl}
                    ingredients={recipe.ingredients}
                    setName={this.setName}
                    setDescription={this.setDescription}
                    setInstruction={this.setInstruction}
                    setTutorialUrl={this.setTutorialUrl}
                    setIngredients={this.setIngredients}
                    setServing={this.setServing}
                    />
                <View style={{ height: 50, alignItems: 'center'}}>
                    <Button 
                        buttonStyle={{ backgroundColor: 'red', marginTop: 10, }}
                        title="Log Out"
                        onPress={this.handleLogOut}
                    />
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

export default Admin;

const styles = StyleSheet.create({
    container: {
        // height: Dimensions.get('window').height,
        paddingRight: 20,
        paddingLeft: 20,
    },
    input: {
        marginTop: 10,
    },
    dropdown: {
        width: 80,
    },
    label: {
        fontWeight: "bold",
        fontSize: 14,
    },
    linkContainer: {
        width: Dimensions.get('window').width,
        marginTop: 15,
    },
    linkText: {
        color: 'powderblue',
        fontSize: 18,
        fontWeight: 'bold',
    },
})