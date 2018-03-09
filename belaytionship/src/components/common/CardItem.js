import React from 'react'
import { View } from 'react-native'


const CardItem = (props) => {
  return (
    <View style= {style.containerStyle}>
      {props.children}
    </View>
  )
}

const style = {
  containerStyle: {
    // borderBottomWidth: 1,
    padding: 20,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
}


export  { CardItem }
