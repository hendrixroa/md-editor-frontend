import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import './Body.css'

import Register from '../register/Register'
import Login from '../login/Login'
import NotFount from '../not-found/NotFound'
import Editor from '../editor/Editor'

class Body extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/" component={ Editor } />
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Register } />
          <Route component={ NotFount } />
        </Switch>
      </div>   
    )
  }
}

export default withRouter(Body)