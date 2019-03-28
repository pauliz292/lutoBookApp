import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Picker } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

class Admin extends Component {
    state = {
        recipe: [
            { 
                id:1, 
                name:"Melon Shake", 
                description:"", 
                instruction:"",
                categoryId:1,
                mealtypeId:1,
                tutorialUrl:"",
            }
        ],
        mealType: [],
        category:[],
        ingredients:[],
        locations:[],
    };

    render() {
        return (
            <KeyboardAwareScrollView style={styles.container}>
                <View style={styles.input}>
                    <Text>Name:</Text>
                    <Input />
                </View>
                <View style={styles.input}>
                    <Text>Description:</Text>
                    <Input />
                </View>
                <View style={styles.input}>
                    <Text>Instruction:</Text>
                    <Input />
                </View>
                <View style={styles.input}>
                    <Text>Category:</Text>
                    <Picker
                        selectedValue={this.state.language}
                        style={{height: 50, width: Dimensions.get('window').width}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({language: itemValue})
                    }>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />   
                    </Picker>
                </View>
                <View style={styles.input}>
                    <Text>Meal Type:</Text>
                    <Input />
                </View>
                <View style={styles.input}>
                    <Text>Tutorial:</Text>
                    <Input />
                </View>
                <View style={styles.input}>
                    <Text>Ingredients:</Text>
                    <Input />
                </View>
                <View style={styles.input}>
                    <Text>Locations:</Text>
                    <Input />
                </View>
                <View style={styles.input}>
                    <Button title="Save" />
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

export default Admin;

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
    },
    input: {
        marginTop: 20,
    },
})