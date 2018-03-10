import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'


const PeaceOut = ({ onPress, children }) => {
  const { peaceOut } = styles
  return (
    <TouchableOpacity onPress= {onPress} >
      <Image style = {styles.peaceOut} source= {require('../../../images/peace-out.png')} />
    </TouchableOpacity>
  )

}
const styles = {
  peaceOut: {
    height: 52,
    width: 52,
    opacity: .5,
    transform: [{ rotate: '340 deg'}]
  }
}

export { PeaceOut }
