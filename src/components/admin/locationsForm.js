import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Dimensions, 
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Link } from 'react-router-native';

class LocationsForm extends Component {
    state = {
        location: [
            {
                name: "",
                address: ""
            }
        ]
    };

    setName = () => {

    };

    setAddress = () => {

    };

    handleSave = () => {

    };

    Form = props => {
        return (
            <React.Fragment>
                <View style={styles.input}>
                    <Text style={styles.label}>Name:</Text>
                    <Input 
                        value={props.name}
                        onChangeText={props.setName}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Address:</Text>
                    <Input 
                        value={props.address}
                        onChangeText={props.setAddress}
                    />
                </View>
                <View style={styles.input}>
                    <Button title="Save" onPress={this.handleSave} />
                </View>
            </React.Fragment>
        );
    };
    
    render() {
        const { location } = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.pageLabel}>Add Location</Text>
                <this.Form 
                    name={location.name}
                    address={location.address}
                    setName={this.setName}
                    setAddress={this.setAddress}
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

export default LocationsForm;

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