//Import a library to help create  component
import React from 'react'
import { Text, View, Section, Image, StyleSheet } from 'react-native'

//create a component
const Background = (props) => {
  const { backgroundStyle } = styles

  return (
    <Image source = {require('../../../images/background.png')} style= {styles.backgroundStyle}/>
   )
}
const styles = {
  backgroundStyle : {
    flex: 1,
    position: 'absolute',
    height: 671,
    width: 380,
  }
}



//make component available to the rest of application

export  { Background }
