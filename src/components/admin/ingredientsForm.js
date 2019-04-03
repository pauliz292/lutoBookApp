import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Dimensions, 
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Link } from 'react-router-native';

class IngredientsForm extends Component {
    state = {
        ingredients: [
            {
                name: "",
                qty: 0,
                unit: ""    
            }
        ]
    };

    setName = () => {

    };

    setQty = () => {

    };

    setUnit = () => {

    };

    handleSave = () => {

    };

    Form = props => {
        return(
            <React.Fragment>
                <View style={styles.input}>
                    <Text style={styles.label}>Name:</Text>
                    <Input 
                        value={props.name}
                        onChangeText={props.setName}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Qty:</Text>
                    <Input 
                        value={props.qty}
                        onChangeText={props.setQty}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Unit:</Text>
                    <Input 
                        value={props.unit}
                        onChangeText={props.setUnit}
                        placeholder="i.e cup, tablespoon"
                    />
                </View>
                <View style={styles.input}>
                    <Button title="Save" onPress={this.handleSave} />
                </View>
            </React.Fragment>
        );
    };
    
    render() {
        const { ingredients } = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.pageLabel}>Add Ingredients</Text>
                <this.Form 
                    name={ingredients.name}
                    qty={ingredients.qty}
                    unit={ingredients.unit}
                    setName={this.setName}
                    setQty={this.setQty}
                    setUnit={this.setUnit}
                />
                <View style={{ height: 50, alignItems: 'center'}}>
                    <Link to="/dashboard" style={{ marginTop: 10 }}>
                        <Text style={{ color: 'powderblue', fontWeight: '400' }}>Back to Dashboard</Text>
                    </Link>
                </View>
            </View>
        );
    }
}

export default IngredientsForm;

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        paddingRight: 20,
        paddingLeft: 20,
    },
    pageLabel: {
        fontSize: 20,
        fontWeight: 'bold',
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