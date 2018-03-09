import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Background, Button, Input, Spinner, Profile, CardItem, Card } from './components/common/Index.js'
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
          <CardItem>
            <Button onPress= {() => firebase.auth().signOut()}>
              Log Out?
            </Button>
          </CardItem>
        )
      case false:
        return <LoginForm />
      default:
        return <Spinner size= "large"/>
      }
    }

  render(){
    return (
      <View>
        <Background headerText= "Belaytionship"/>
        {this.renderContent()}
        <Text/>
      </View>
    )
  }
}


export default App
