import React, { Component } from 'react';
import { Text } from 'react-native';
import { Spinner, Button, Card, CardSection, Input } from './common';
import firebase from 'firebase';

class LoginForm extends Component {

    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };


    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="user@gmail.com"
                        keyboardType="email-address"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })} />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        placeholder="password"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })} />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }

    onButtonPress() {
        let { email, password } = this.state;

        this.setState({loading: true, error: ''});

        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onAuthFail.bind(this));
            });
    }

    onLoginSuccess() {
        this.setState({
            error: '',
            loading: false,
            email:'',
            password:''
        });
    }

    onAuthFail() {
        this.setState({
            error: 'Authentication failed',
            loading: false,
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small"/>;
        } else {
            return (
                <Button onPress={this.onButtonPress.bind(this)}>
                    Log in
                </Button>
            );
        }
    }

    renderError() {
        if(this.state.error){
            return(
                <CardSection additionalStyles={styles.errorContainerStyle}>
                    <Text style={styles.errorStyle}>
                        {this.state.error}
                    </Text>
                </CardSection>
            );
        }
    }

}

const styles = {
    errorContainerStyle:{
        justifyContent: 'center',
        borderBottomWidth: 0
    },
    errorStyle: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'red'
    }
};

export default LoginForm;