import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Picker } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { Link } from 'react-router-native';
import BackButton from '../_common/back';

class Admin extends Component {
    state = {
        recipe:
            { 
                id:1, 
                name:"Melon Shake", 
                description:"", 
                instruction:"",
                categoryId:1,
                mealtypeId:1,
                tutorialUrl:"",
                image:"",
                ingredients:[
                    {
                        name: "",
                        qty: 0,
                        unit: ""
                    }
                ],
                locations:[
                    {
                        name: "",
                        address: ""
                    }
                ],
            },
        mealType: [],
        category:[],
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

    handleSaveRecipe() {
        alert("Recipe Saved!");
    };

    render() {
        const { recipe } = this.state;

        const Form = props => {
            return (
                <React.Fragment>
                    <View style={styles.input}>
                        <Text style={styles.label}>Name:</Text>
                        <Input />
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.label}>Description:</Text>
                        <Input />
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.label}>Instruction:</Text>
                        <Input />
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.label}>Tutorial:</Text>
                        <Input />
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

        return (
            <KeyboardAwareScrollView style={styles.container}>
                <Form 
                    storeCategory={this.storeCategory}
                    storeMealType={this.storeMealType}
                    mealTypeId={recipe.mealtypeId}
                    categoryId={recipe.categoryId} />
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