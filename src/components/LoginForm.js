import React ,{Component} from 'react';
import {TextInput} from 'react-native';
import {Button , Card, CardSection, Login} from "./common";

export default class LoginForm extends Component {
  state = {text: '',password : ''};
  render(){
    return(
    <Card>
      <CardSection >

      </CardSection>

      <CardSection/>

       <CardSection>
          <Button text="Login"/>
       </CardSection>
    </Card>
  )
};
}