import React from 'react'
import { View } from 'react-native'
import { MessageButton } from './buttons/index.js'

const ConversationNavbar = () => {
  const {navStyle, messageIconStyle } = styles
  return (
    <View style= {styles.navStyle}>
      <MessageButton  style = {styles.messageIconStyle}/>
      <Text>Name</Text>
    </View>
  )
}
const styles = {
  navStyle: {
    flex: 1,
    flexDirection: 'column'
  },
  messageIconStyle: {
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    width: 60,
    opacity: .5,
  }
}

export { ConversationNavbar }
