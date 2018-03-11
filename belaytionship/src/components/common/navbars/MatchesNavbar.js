import React from 'react'
import { View } from 'react-native'
import { MessageButton, Carabiner } from './buttons/index.js'

const MatchesNavbar = () => {
  const { messageIconStyle, carabinerStyle} = styles
  return (
    <View>
      <Carabiner style= {styles.carabinerStyle}/>
      <MessageButton style= {styles.messageIconStyle}/>
    </View>
  )
}

const styles = {
  carabinerStyle: {
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    width: 60,
    opacity: .5,
    transform: [{ rotate: '340 deg'}]
  },
  messageIconStyle: {
    display: 'flex',
    flexDirection: 'row',
    height: 75,
    width: 75,
    marginLeft: 130,
    marginTop: 15,
    opacity: .5
  }
}

export { MatchesNavbar }
