import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'


const MessageButton = ({ onPress, children, style }) => {
  return (
    <TouchableOpacity onPress= {onPress} >
      <Image style= {style} source= {require('../../../../../images/message-icon.png')} />
    </TouchableOpacity>
  )
}


export { MessageButton }
