import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Picker, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { Link } from 'react-router-native';
import BackButton from '../_common/back';
import PhotoUpload from 'react-native-photo-upload';

import * as recipeService from '../../services/recipeService';

class Admin extends Component {
    state = {
        recipe:
            { 
                name:"", 
                description:"", 
                instruction:"",
                categoryId:1,
                mealtypeId:1,
                tutorialUrl:"",
                image:"",
            },
        mealType: [],
        category:[],
    };

    addRecipe = async () => {
        try {
            let recipe = this.state.recipe;
            console.log(recipe);
            await recipeService.AddRecipe(recipe);   
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
                    onPhotoSelect={avatar => {
                        if (avatar) {
                            console.log('Image base64 string: ', avatar)
                        }
                    }}
                >
                    <Image 
                        style={{
                            paddingVertical: 30,
                            width: 150,
                            height: 150,
                            borderRadius: 75
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
                <View style={styles.dropdown}>
                    <Text style={styles.label}>Category:</Text>
                    <Picker
                        selectedValue={props.categoryId}
                        style={{height: 50, width: 200}}
                        onValueChange={props.storeCategory}>
                        <Picker.Item label="Luzon" value="-1" />
                        <Picker.Item label="Visayas" value="-2" />   
                        <Picker.Item label="Mindanao" value="-3" />
                    </Picker>
                </View>
                <View style={styles.dropdown}>
                    <Text style={styles.label}>Meal Type:</Text>
                    <Picker
                        selectedValue={props.mealTypeId}
                        style={{height: 50, width: 200}}
                        onValueChange={ props.storeMealType }>
                        <Picker.Item label="Breakfast" value="-1" />
                        <Picker.Item label="Lunch" value="-2" />   
                        <Picker.Item label="Dinner" value="-3" />  
                    </Picker>
                </View>
                <View style={styles.linkContainer}>
                    <Link to="/admin/ingredientsform"> 
                        <Text style={styles.linkText}>Add Ingredients</Text>
                    </Link>
                </View>
                <View style={styles.linkContainer}>
                    <Link to="/admin/locationsform"> 
                        <Text style={styles.linkText}>Add Location</Text>
                    </Link>
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
                    tutorialUrl={recipe.tutorialUrl}
                    setName={this.setName}
                    setDescription={this.setDescription}
                    setInstruction={this.setInstruction}
                    setTutorialUrl={this.setTutorialUrl}
                    />
                <View style={{ height: 50, alignItems: 'center'}}>
                    <BackButton />
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

export default Admin;

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
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