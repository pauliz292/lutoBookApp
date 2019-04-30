import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
} from 'react-native';
import { Link } from 'react-router-native';
import BackButton from '../_common/back';
import * as auth from '../../services/auth';

class Login extends Component {
    state = {
        email: '',
        password: '',
    };

    constructor(props) {
        super(props);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    };

    async componentDidMount() {
        await this.redirect();
    };

    redirect = async () => {
        const user = await auth.getCurrentUser();

        if(user == null || user == "undefined")
            return;

        if (user.role === "Admin") {
            this.props.history.push("/dashboard");
        } else {
            let userId = user.nameid;
            this.props.history.push({
                pathname: "/mealplanner",
                state: {
                    userId: userId
                }
            });
        }
    }

    emailChange(email) {
        this.setState({ email: email })
    };

    passwordChange(password) {
        this.setState({ password: password })
    };

    handleSubmitLogin = async () => {
        const { email, password } = this.state;

        if (email && password) {
            auth.login(email, password).catch(error => console.log(error));
            await this.redirect();
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
            <View style={styles.container}>
                <Text style={styles.text}>Please log in using your credentials.</Text>
                <View style={{ height: '80%' }}>
                    <this.Form  
                        email={email} 
                        password={password} 
                        emailChange={this.emailChange}
                        passwordChange={this.passwordChange}
                        handleSubmitLogin={this.handleSubmitLogin}
                    />
                </View>
            </View>
        );
    }
}

export default Login;

const styles = StyleSheet.create({
    container: {
        height: '100%',
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