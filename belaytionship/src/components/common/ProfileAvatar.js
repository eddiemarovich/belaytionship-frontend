import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'


const ProfileAvatar = ({ onPress, children, loggedIn }) => {
  const { profileAvatarMain, profileAvatarSide } = styles
  return (
    <TouchableOpacity onPress= {onPress} >
      <Image style= {loggedIn === true ? styles.profileAvatarMain : styles.profileAvatarSide }   source= {require('../../../images/profile-avatar.png')} />
    </TouchableOpacity>
  )

}
const styles = {
  profileAvatarMain: {
    display: 'flex',
    flexDirection: 'row',
    height: 75,
    width: 75,
    marginLeft: 76,
    marginTop: 15,
    opacity: .5
  },
  profileAvatarSide: {
    display: 'flex',
    flexDirection: 'row',
    height: 52,
    width: 52,
    opacity: .5,
    marginLeft: 76
  }
}

export { ProfileAvatar }
