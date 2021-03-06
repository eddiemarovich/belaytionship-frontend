import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Background, Button, Input, Spinner, Profile, CardItem, Card, PeaceOut, ProfileAvatar } from './components/common/Index.js'
import firebase from 'firebase'
import LoginForm from './components/Login'
console.disableYellowBox = true



class App extends Component{

  state = {
    loggedIn: null
  }

  componentDidMount(){
    firebase.initializeApp({
       apiKey: "AIzaSyA8S2JPfKIGhxV0iQBQdZcTcovOdiyRZK0",
       authDomain: "belaytionship.firebaseapp.com",
       databaseURL: "https://belaytionship.firebaseio.com",
       projectId: "belaytionship",
       storageBucket: "",
       messagingSenderId: "376927284909"
    })

    firebase.auth().onAuthStateChanged((user) => {
      user ? this.setState({ loggedIn: true}) : this.setState({ loggedIn: false})
    })
  }

  renderContent() {
    switch (this.state.loggedIn){
      case true:
        return (
          <View style = {styles.navStyle}>
            <CardItem>
              <PeaceOut onPress= {() => firebase.auth().signOut()} />
              <ProfileAvatar loggedIn= {this.state.loggedIn} style= {styles.avatar} source= {require('../images/profile-avatar.png')} />
            </CardItem>
          </View>
        )
      case false:
        return <LoginForm />
      default:
        return <Spinner size= "large"/>
      }
    }

  render(){
    return (
      <View style= {styles.containerStyle}>
        <Text>Belaytionship</Text>
        <Background headerText= "Belaytionship"/>
        {this.renderContent()}
      </View>
    )
  }
}
const styles = {
  containerStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  navStyle: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },

}


export default App
