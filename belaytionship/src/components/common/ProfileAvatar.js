import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'


const ProfileAvatar = ({ onPress, children, loggedIn, style }) => {
  return (
    <TouchableOpacity onPress= {onPress} >
      <Image  style= {style} source= {require('../../../images/profile-avatar.png')} />
    </TouchableOpacity>
  )
}


export { ProfileAvatar }
