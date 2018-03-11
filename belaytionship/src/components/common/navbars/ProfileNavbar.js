import React from 'react'
import { View } from 'react-native'
import { ProfileAvatar, Carabiner, PeaceOut } from '../Index.js'

const ProfileNavbar = ({ loggedIn,onPress }) => {
  const {navStyle, avatarStyle, peaceOutStyle, carabinerStyle } = styles
  return (
    <View style= {styles.navStyle}>
      <PeaceOut onPress= {onPress} style = {styles.peaceOutStyle}/>
      <ProfileAvatar style = {styles.avatarStyle}/>
      <Carabiner style = {styles.carabinerStyle}/>
    </View>
  )
}
const styles = {
  navStyle: {
    flex: 1,
    flexDirection: 'column'
  },
  peaceOutStyle: {
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    width: 60,
    opacity: .5,
    transform: [{ rotate: '340 deg'}]
  },
  avatarStyle: {
    display: 'flex',
    flexDirection: 'row',
    height: 75,
    width: 75,
    marginLeft: 130,
    marginTop: 15,
    opacity: .5
  },
  carabinerStyle: {
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    width: 30,
    marginLeft: 290,
    opacity: .5,
    transform: [{ rotate: '20 deg'}]
  }
}

export { ProfileNavbar }
