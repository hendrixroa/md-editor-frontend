import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './NotFound.css'

class NotFound extends Component {
  render() {
    return (
      <div>
       Not Found
      </div>
    )
  }
}

export default withRouter(NotFound)