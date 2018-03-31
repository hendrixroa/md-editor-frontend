import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { Card, CardTitle, CardText, TextField, Button } from 'react-md';
import { servicesApi } from '../utils/servicesApi'
import { Validator } from '../utils/Validators'
import { Auth } from '../utils/Auth'
import './Login.css'

class Login extends Component {
  constructor(props){
		super(props)

		this.state = { 
      email: '',
      password: ''
		}
    this.handleOnChangePass = this.handleOnChangePass.bind(this)
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this)
    this.loginUser = this.loginUser.bind(this)
  }

  componentDidMount(){
    
  }

  handleOnChangeEmail(email){
    this.setState({
      email: email
    })
  }
  
  handleOnChangePass(pass){
    this.setState({
      password: pass
    })
  }

  async loginUser(){
    const url = `${servicesApi.apiUrl}/auth`
    const login = await axios.post(url, this.state).catch(err => { alert('Cannot login user') })
    if(login.status === 200 && login.auth === true){
      Auth.setUser(login.data)
      this.props.history.push('/editor')
    }else{
      alert('Wrong credentials')
    }
  }
  
  render() {
    const style = { maxWidth: 680 };
    return (
      <Card style={style} className="md-block-centered">
        <CardTitle className="md-block-centered" title="Login" subtitle="Enter your info" />
        <CardText>
        <TextField
          id="floating-email"
          label="Enter your email"
          type="email"
          className="md-block-centered"
          onChange={this.handleOnChangeEmail}
        />
        <TextField
          id="floating-password"
          label="Enter your password"
          type="password"
          className="md-block-centered"
          onChange={this.handleOnChangePass}
        />
        <div className="center-button">
          <Button disabled={!Validator.validateEmail(this.state.email) || !Validator.passwordLength(this.state.password)} flat primary swapTheming onClick={ this.loginUser }>Login</Button>
        </div>
        </CardText>
      </Card>
    )
  }
}

export default withRouter(Login)