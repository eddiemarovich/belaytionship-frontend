import React from 'react'
import { Text, TouchableOpacity } from 'react-native'


const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles

  return (
    <TouchableOpacity style= {buttonStyle} onPress= {onPress} >
      <Text style= {textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = {
  textStyle: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#3087BD',
    borderRadius: 20,
    borderWidth: .2,
    borderColor: 'white',
    marginRight: 5,
    marginLeft: 5
  }
}

export { Button }
