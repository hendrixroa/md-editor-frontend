import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './NotFound.css'

class NotFound extends Component {
  render() {
    return (
      <div>
       <p>Not Found route, maybe you do want go to this url: </p>
       <Link to="/login">Login</Link>
      </div>
    )
  }
}

export default withRouter(NotFound)