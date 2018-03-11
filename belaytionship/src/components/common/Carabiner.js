import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'

const Carabiner = ({ loggedIn, onPress, style }) => {
  return (
    <TouchableOpacity onPress= {onPress}>
      <Image style= {style} source = {require('../../../images/carabiner.png')}/>
    </TouchableOpacity>
  )
}

export { Carabiner }
