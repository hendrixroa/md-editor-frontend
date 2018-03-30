import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import {
  Avatar,
  Divider,
  FontIcon,
  List,
  ListItem,
  Subheader,
} from 'react-md';
import axios from 'axios'
import './ListDocs.css'

class ListsDocs extends Component {
  constructor(props){
		super(props)

		this.state = {
      date: '',
      post: ''
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
        <List className="md-paper md-paper--1">
          <Subheader primaryText="MARKDOWNEDITOR" />
          <ListItem
            leftAvatar={<Avatar icon={<FontIcon>insert_drive_file</FontIcon>} />}
            primaryText="Photos"
            secondaryText="Jan 9, 2014"
          />
          <ListItem
            leftAvatar={<Avatar icon={<FontIcon>insert_drive_file</FontIcon>} />}
            primaryText="Recipes"
            secondaryText="Jan 17, 2014"
          />
          <ListItem
            leftAvatar={<Avatar icon={<FontIcon>insert_drive_file</FontIcon>} />}
            primaryText="Work"
            secondaryText="Jan 28, 2014"
        />
        </List>
      </div>
    )
  }
}

export default withRouter(ListsDocs)