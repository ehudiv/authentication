import React from 'react';
import {Text , View} from 'react-native';

//const {containerStyle} = styles;

export const Card = (props) =>
{
  return(
    <View style={styles.containerStyle}>
      {props.children}

    </View>

  )
};

const styles = {
  containerStyle : {
    borderWidth:1,
    borderRadius: 2,
    borderBottomWidth : 0,
    borderColor :'black',
    shadowColor : 'black',
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
}