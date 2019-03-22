import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Button,
    KeyboardAvoidingView,
} from 'react-native';
import { Link } from 'react-router-native';
import BackButton from '../_common/back';

class Login extends Component {
    render() {
        const Form = () => {
            return (
                <View style={styles.form}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textBox}
                            placeholder="username"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textBox}
                            secureTextEntry={true}
                            placeholder="password"
                        />
                    </View>

                    <Link style={[styles.buttonContainer, styles.button]}>
                        <Text style={styles.buttonText}>Login</Text>    
                    </Link>
                    <Link to="/register" style={[styles.buttonContainer, styles.registerButton]}>
                        <Text style={styles.buttonText}>Register</Text>    
                    </Link>
                    <View style={{ height: 20 }}>
                        <BackButton />
                    </View>
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.text}>Please log in using your credentials.</Text>
                    <Form />
                </View>
            </View>
        );
    }
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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