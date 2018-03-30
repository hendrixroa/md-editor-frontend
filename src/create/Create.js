import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import { Grid, Cell, TextField, Button, DialogContainer } from 'react-md'
import { servicesApi } from '../utils/servicesApi'
import './Create.css'

class Create extends Component {
  constructor(props){
		super(props)

		this.state = {
      data: {
        post: ''
      },
      message:{
        visible: false,
        text: ''
      }
		}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.close = this.close.bind(this)
  }

  componentDidMount(){
  
  }

  async handleSubmit(event){
    console.log('hoaaaa')
    const createPost = await axios.post(`${servicesApi.apiUrl}/post`, this.state.data).catch(err => { this.setState({ message: {visible: true, text: 'Cannot create post' }}) })
    console.log(createPost)
    if(createPost.status === 200){
      this.setState({
        message: {
          visible: true,
          text: 'The post has been created'
        }
      })
    }
  }
  
  handleOnChange(post){
    this.setState({
      data: {post: post}
    })
  }

  close(){
    this.setState({
      message: {
        visible: false,
        text: ''
      }
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
              onChange={this.handleOnChange}
            />
            <div>
              <Button flat primary swapTheming onClick={ this.handleSubmit }>Save</Button>
            </div>
          </Cell>
          <Cell size={6}>
            <ReactMarkdown escapeHtml={false} skipHtml={false} source={this.state.data.post} /> 
          </Cell>
        </Grid>
        <DialogContainer
          id="dialog"
          visible={this.state.message.visible}
          title="Simple List Dialog"
          onHide={this.close}
        >
        {this.state.message.text}
        <div>
          <Button flat primary swapTheming onClick={ this.close }>Close</Button>
        </div>
        </DialogContainer>
      </div>
    )
  }
}

export default withRouter(Create)