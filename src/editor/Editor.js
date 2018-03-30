import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import axios from 'axios'
import { Grid, Cell } from 'react-md'
import ListDocs from '../list/ListDocs'
import Create from '../create/Create'
import './Editor.css'

class Editor extends Component {
  constructor(props){
		super(props)

		this.state = {
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

  render() {
    return (
      <div>
        <Grid>
          <Cell size={2}>
            <ListDocs />
          </Cell>
          <Cell size={10}>
            <Create />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default withRouter(Editor)