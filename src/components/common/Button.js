import React from 'react';
import {Text, TouchableOpacity} from 'react-native';


export const Button = ({onPress, children}) => {
  const {buttonStyles , textbuttonStyle}= styles;


  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyles}>
      <Text style={textbuttonStyle}>
        {children}
      </Text>
  </TouchableOpacity>

  );
};
const styles = {
  buttonStyles :{
    flex : 1,
    alignSelf  : 'stretch',
    borderWidth :1,
    marginLeft:5,
    marginRight :5
  },
  textbuttonStyle : {
    alignSelf:'center',
    fontSize :14,
    color :'#007aff'
  }
}