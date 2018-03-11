import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'


const PeaceOut = ({ onPress, children, style }) => {
  return (
    <TouchableOpacity onPress= {onPress} >
      <Image style= {style} source= {require('../../../../../images/peace-out.png')} />
    </TouchableOpacity>
  )
}


export { PeaceOut }
