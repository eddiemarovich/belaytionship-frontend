import React, { Component } from 'react'
import { Text, Image } from 'react-native'
import  firebase  from 'firebase'
import { Button, Card, CardItem, Input, Spinner  } from './common/Index.js'



class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false}

  onButtonPress() {
    const { email, password } = this.state

    this.setState({ error: '', loading: true })

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this))
      })
  }


  onLoginFail() {
    this.setState({ error: 'Dang, you better check your login info!', loading: false })
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    })
  }

  renderButton () {
    if (this.state.loading){
      return <Spinner size= 'large'/>
    }
    return (
      <Button onPress= {this.onButtonPress.bind(this)}>
        Log in
      </Button>
    )
  }

  render () {
    return (
      <Card >
        <Text style= {styles.titleStyle}>Belaytionship</Text>
        <Image style= {styles.imageStyle} source = {require('../../images/belaytionship-logo.png')}/>
        <CardItem>
          <Input
            placeholder= "user@gmail.com"
            label="Email:"
            value= {this.state.email}
            onChangeText= {email => this.setState({ email })}
          />
        </CardItem>
        <CardItem>
          <Input
            secureTextEntry
            placeholder= "password"
            label= "Password:"
            value= {this.state.password}
            onChangeText= {password => this.setState({ password })}
          />
        </CardItem>

        <Text style= {styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardItem>
          {this.renderButton()}
        </CardItem>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  titleStyle: {
    fontSize: 45,
    color: 'white',
    alignSelf: 'center',
    paddingTop: 30,
    paddingBottom: 25
  },
  imageStyle: {
    alignSelf: 'center'
  }
}


export default LoginForm
