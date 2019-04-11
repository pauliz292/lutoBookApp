import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Input, Button } from 'react-native-elements';
import BackButton from '../_common/back';

import * as authService from '../../services/authService';

class Register extends Component {
    state = {
        user: {
            firstname:"",
            lastname:"",
            email:"",
            password:"",
            phonenumber:"",
        }
    };

    setFirstName = firstname => {
        let user = {...this.state.user};
        user.firstname = firstname;
        this.setState({ user })
    };

    setLastName = lastname => {
        let user = {...this.state.user};
        user.lastname = lastname;
        this.setState({ user })
    };

    setEmail = email => {
        let user = {...this.state.user};
        user.email = email;
        this.setState({ user })
    };

    setPassword = password => {
        let user = {...this.state.user};
        user.password = password;
        this.setState({ user })
    };

    setPhoneNumber = phonenumber => {
        let user = {...this.state.user};
        user.phonenumber = phonenumber;
        this.setState({ user })
    };

    handleSave = async () => {
        try {
            let user = this.state.user;
            await authService.Register(user)
            this.props.history.push("/");
        } catch (error) {
            console.log(error)
        }
    };
    
    Form = props => {
        return(
            <React.Fragment>
                <View style={styles.input}>
                    <Text style={styles.label}>First Name:</Text>
                    <Input 
                        value={props.firstname}
                        onChangeText={props.setFirstName}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Last Name:</Text>
                    <Input 
                        value={props.lastname}
                        onChangeText={props.setLastName}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Email:</Text>
                    <Input 
                        value={props.email}
                        onChangeText={props.setEmail}
                        placeholder="user@user.com"
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Password:</Text>
                    <Input 
                        value={props.password}
                        onChangeText={props.setPassword}
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Phone Number:</Text>
                    <Input 
                        value={props.phonenumber}
                        onChangeText={props.setPhoneNumber}
                    />
                </View>
                <View style={styles.input}>
                    <Button title="Save" onPress={this.handleSave} />
                </View>
            </React.Fragment>
        );
    };

    render() {
        const { user } = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.pageLabel}>Register</Text>
                <this.Form 
                    firstname={user.firstname}
                    lastname={user.lastname}
                    email={user.email}
                    password={user.password}
                    phonenumber={user.phonenumber}
                    setFirstName={this.setFirstName}
                    setLastName={this.setLastName}
                    setEmail={this.setEmail}
                    setPassword={this.setPassword}
                    setPhoneNumber={this.setPhoneNumber}
                />
                <View style={{ height: 50, alignItems: 'center'}}>
                    <BackButton />
                </View>
            </View>
        );
    }
}

export default Register;

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