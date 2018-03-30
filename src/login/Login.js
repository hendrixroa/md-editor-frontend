import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import axios from 'axios'
import { servicesApi } from '../utils/servicesApi'
import { Validator } from '../utils/Validators'
import './Login.css'

class Login extends Component {
  constructor(props){
		super(props)

		this.state = {
      email: '',
      password: '',
      messageLogin: undefined,
      lang: ''
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

  message(msgOptional){
    
  }

  render() {

    return (
      <div className="row">
        
      </div>
    )
  }
}

export default withRouter(Login)