import React from 'react';
import {Text , View } from 'react-native';

 export const Header = (props) => {
   const {textStyles, viewStyles} = styles;

  return (
    <View style={viewStyles}>
    <Text style ={ textStyles }>{ props.headerText}  </Text>
   </View>
  );
 }

 const styles = {
viewStyles : {
   backgroundColor:'#F5F5F5',
  padding : 15,
  justifyContent:'center',
  alignItems : 'center',
  height : 60,
  width: '100%',
  shadowColor: '#FFFAFA',
  shadowOpacity: 0.6,
  shadowOffset :{height:2 , width:0.6},
  elevation : 2,
  position :'relative'
 },
   textStyles : {
     fontSize : 20
   }
};