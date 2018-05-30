import React, {Component} from 'react';
import {View } from 'react-native';
// import firebase from 'firebase';
import {Header} from "./components/common";
import LoginForm  from "./components/LoginForm";
//import './ReactotronConfig'


export default class App extends Component {
  componentWillMount() {
  // firebase.initializeApp({
  //     apiKey: 'AIzaSyDB0SORGB0G4rZGAhsIf2c1XxmJzKXVBeY',
  //     authDomain: 'autenticationc.firebaseapp.com',
  //     databaseURL: 'https://autenticationc.firebaseio.com',
  //     projectId: 'autenticationc',
  //     storageBucket: 'autenticationc.appspot.com',
  //     messagingSenderId: '670084083992'
  //   })
  };
  render() {
    return (
      <View>
        <Header headerText="Authentications"/>
        <LoginForm/>
      </View>
    );
  }
}