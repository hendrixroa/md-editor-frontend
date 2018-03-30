import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import axios from 'axios'
import { Validator } from '../utils/Validators'
import { servicesApi } from '../utils/servicesApi'
import './Register.css'

class Register extends Component {
  constructor(props){
		super(props)

		this.state = {
      role: 'user',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      messageRegister: undefined
		}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  componentDidMount(){
  
  }

  async handleSubmit(event){
  
  }
  
  handleOnChange(event){
    let target = event.target
    let name = target.name

    this.setState({
      [name]: target.value 
    })
  }

  validateFields(){
    return Validator.validateEmail(this.state.email) && 
    this.state.username !== '' &&
    Validator.passwordEquals(this.state.password, this.state.confirmPassword) 
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default withRouter(Register)