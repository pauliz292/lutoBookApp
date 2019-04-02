import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Dimensions,
    KeyboardAvoidingView,
    AsyncStorage
} from 'react-native';
import { Link } from 'react-router-native';
import BackButton from '../_common/back';
import * as authService from '../../services/authService';
import jwt_decode from 'jwt-decode';

const localToken = "token";

class Login extends Component {
    state = {
        email: 'admin@admin.com',
        password: 'password123',
    };

    constructor(props) {
        super(props);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    };

    emailChange(email) {
        this.setState({ email: email })
    };

    passwordChange(password) {
        this.setState({ password: password })
    };

    handleSubmitLogin = () => {
        const { email, password } = this.state;

        if (email && password) {
            authService.AdminLogin(email, password)
                .then(res => {
                    if (res.data) {
                        AsyncStorage.setItem(localToken, res.data);
                        var decoded = jwt_decode(res.data);
                        if (decoded.role == "Admin") {
                            this.props.history.push("/dashboard");
                        } else {
                            this.props.history.push("/mealplanner");
                        }
                    } else {
                        alert("Log in failed!")
                    }
                }).catch(error => alert(error));
        }
    };

    Form = props => {
        return (
            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textBox}
                        value={props.email}
                        placeholder="email"
                        onChangeText={props.emailChange}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textBox}
                        value={props.password}
                        secureTextEntry={true}
                        onChangeText={props.passwordChange}
                        placeholder="password"
                    />
                </View>

                <Link style={[styles.buttonContainer, styles.button]}
                    onPress={props.handleSubmitLogin}>
                    <Text style={styles.buttonText}>Login</Text>    
                </Link>
                <Link to="/register" style={[styles.buttonContainer, styles.registerButton]}>
                    <Text style={styles.buttonText}>Register</Text>    
                </Link>
                <View style={{ height: 50, alignItems: 'center'}}>
                    <BackButton />
                </View>
            </View>
        );
    }

    render() {
        const { email, password } = this.state;

        return (
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.text}>Please log in using your credentials.</Text>
                    <this.Form  
                        email={email} 
                        password={password} 
                        emailChange={this.emailChange}
                        passwordChange={this.passwordChange}
                        handleSubmitLogin={this.handleSubmitLogin}
                        />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

export default Login;

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        alignItems: 'center'
    },
    heading: {
        marginTop: 40,
        fontWeight: 'bold',
        fontSize: 20
    },
    form: {
        flex: 1,
        marginTop: 20,
        alignItems: 'flex-start',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textBox: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
        fontSize: 18
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    button: {
        backgroundColor: '#00b5ec',
    },
    registerButton: {
        backgroundColor: '#F44336',
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    text: {
        marginHorizontal: 8,
        marginVertical: 10
    },
})