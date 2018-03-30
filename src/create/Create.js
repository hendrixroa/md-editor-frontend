import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import { Grid, Cell, TextField, Button } from 'react-md'

import './Create.css'

class Create extends Component {
  constructor(props){
		super(props)

		this.state = {
      document: ''
		}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  componentDidMount(){
  
  }

  async handleSubmit(event){
  
  }
  
  handleOnChange(document){
    this.setState({
      document: document 
    })
  }

  render() {
    return (
      <div>
        <Grid>
          <Cell size={6}>
          <TextField
            id="placeholder-only-multiline"
            placeholder="Type many letters"
            rows={6}
            name="document"
            onChange={this.handleOnChange}
          />
          <Button flat primary swapTheming>Save</Button>
          </Cell>
          <Cell size={6}>
            <ReactMarkdown escapeHtml={false} skipHtml={false} source={this.state.document} /> 
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default withRouter(Create)