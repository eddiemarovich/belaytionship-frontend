import React from 'react'
import { View } from 'react-native'
import { ProfileAvatar, Carabiner, MessageButton } from './buttons/index.js'


const StackNavbar = () => {
  const { avatarStyle, messageIconStyle, carabinerStyle } = styles
  return (
    <View>
      <ProfileAvatar style= {styles.avatarStyle}/>
      <Carabiner style= {styles.carabinerStyle}/>
      <MessageButton style= {styles.messageIconStyle}/>
    </View>
  )
}

const styles = {
  avatarStyle: {
    peaceOutStyle: {
      display: 'flex',
      flexDirection: 'row',
      height: 60,
      width: 60,
      opacity: .5,
  },
  carabinerStyle: {
    display: 'flex',
    flexDirection: 'row',
    height: 75,
    width: 37.5,
    marginLeft: 130,
    marginTop: 15,
    opacity: .5
  },
  messageIconStyle: {
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    width: 30,
    marginLeft: 290,
    opacity: .5,
  }
}

export { StackNavbar }
