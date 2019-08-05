import React, { Component } from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = {
        loggedIn: null
    };

    render(){
        return(
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }

    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyC2dhUWqoaJ6ql-pLuyIaqKehN8_j8JtuM',
            authDomain: 'auth-c7979.firebaseapp.com',
            databaseURL: 'https://auth-c7979.firebaseio.com',
            projectId: 'auth-c7979',
            storageBucket: 'auth-c7979.appspot.com',
            messagingSenderId: '938823940701'
        });

        firebase.auth().onAuthStateChanged((user) => {
            this.setState({loggedIn: !!user})
        })
    }

    renderContent() {
        if(this.state.loggedIn){
            return (
                <Button onPress={this.onLogoutPressed.bind(this)}>
                    Log out
                </Button>
            );
        } else if(this.state.loggedIn === false){
            return <LoginForm />;
        } else {
            return <Spinner />;
        }
    }

    onLogoutPressed(){
        firebase.auth().signOut();
    }

}

export default App;