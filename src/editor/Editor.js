import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import { 
  Grid,
  Cell, 
  TextField, 
  Button, 
  DialogContainer, 
  Avatar,
  FontIcon,
  List,
  ListItem,
  Subheader,
  Card,
  CardText
 } from 'react-md'
import moment from 'moment'
import { servicesApi } from '../utils/servicesApi'
import { Auth } from '../utils/Auth'
import { Headers } from '../utils/headers'
import './Editor.css'

class Create extends Component {
  constructor(props){
		super(props)

		this.state = {
      data: {
        id: '',
        document: '',
        update: false
      },
      lists: {
        documents: []
      },
      message:{
        visible: false,
        text: ''
      }
		}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.close = this.close.bind(this)
    this.updateDocument = this.updateDocument.bind(this)
    this.deleteDocument = this.deleteDocument.bind(this)
  }

  async refreshDocuments(){
    const documents = await axios.get(`${servicesApi.apiUrl}/document`, Headers.getHeaderToken()).catch(err => { this.setState({ message: {visible: true, text: 'Cannot refresh documents' }}) })
    this.setState({
      lists: {documents: documents.data}
    })
  }

  componentDidMount(){
    if(!Auth.isLoged()){
      this.props.history.push('/login')
    }
    this.refreshDocuments()
  }

  async handleSubmit(event){
    const url = `${servicesApi.apiUrl}/document`
    const create = await axios.post(url, this.state.data, Headers.getHeaderToken()).catch(err => { this.setState({ message: {visible: true, text: 'Cannot create document' }}) })
    if(create.status === 200){
      this.setState({
        message: {
          visible: true,
          text: 'The document has been created'
        },
        data: {
          document: ''
        }
      })
      this.refreshDocuments()
    }
  }

  async updateDocument(event){
    const url = `${servicesApi.apiUrl}/document/${this.state.data.id}`
    const data = {document: this.state.data.document}
    const update = await axios.put(url, data, Headers.getHeaderToken()).catch(err => { this.setState({ message: {visible: true, text: 'Cannot update document' }}) })
    if(update.data.status === 200){
      this.setState({
        message: {
          visible: true,
          text: 'The document has been updated'
        },
        data: {
          document: '',
          id: '',
          update: false
        }
      })
      this.refreshDocuments()
    }
  }
  
  async deleteDocument(event){
    const url = `${servicesApi.apiUrl}/document/${this.state.data.id}`
    const remove = await axios.delete(url, Headers.getHeaderToken()).catch(err => { this.setState({ message: {visible: true, text: 'Cannot deleted document' }}) })
    if(remove.status === 200){
      this.setState({
        message: {
          visible: true,
          text: 'The document has been deleted'
        },
        data: {
          document: '',
          id: '',
          update: false
        }
      })
      this.refreshDocuments()
    }
  }

  handleOnChange(document){
    this.setState({
      data: {
        id: this.state.data.id,
        document: document,
        update: this.state.data.update
      }
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

  countDays(date){
    const dateInit = moment(date, 'dd mm yyyy')
    const dateEnd = moment(new Date(), 'dd mm yyyy')
    return `${dateInit.diff(dateEnd, 'days') === 0 ? 'today' : dateInit.diff(dateEnd, 'days') + ' days ago'}`
  }

  selectDocument(id, document){
    this.setState({
      data: {
        id: id,
        document: document,
        update: true
      }
    })
  }

  newDocument(){
    this.setState({
      data: {
        id: '',
        document: '',
        update: false
      }
    })
  }

  render() {
    return (
      <div>
        <Grid>
          <Cell size={2}>
          <List className="md-paper md-paper--1">
          <Subheader primaryText="MARKDOWNEDITOR" />
          <div className="center-button">
            <Button onClick={() => this.newDocument()} raised>New</Button>
          </div>  
            {
              this.state.lists.documents.map((doc) => {
                return (
                  <ListItem
                    key={doc.id}
                    leftAvatar={<Avatar icon={<FontIcon>insert_drive_file</FontIcon>} />}
                    primaryText={doc.document.slice(0, 10)}
                    secondaryText={this.countDays(doc.updated_at)}
                    onClick={() => this.selectDocument(doc.id, doc.document)}
                  />
                )
              })
            }
          </List>
          </Cell>
          <Cell size={5}>
            <TextField
              id="placeholder-only-multiline"
              placeholder="Type many letters"
              rows={6}
              value={this.state.data.document}
              onChange={this.handleOnChange}
            />
            <div className="center-button">
              { 
                this.state.data.update ? 
                <div>
                  <Button flat primary swapTheming onClick={ this.updateDocument }>Update</Button>
                  <Button flat secondary swapTheming onClick={ this.deleteDocument }>Delete</Button>
                </div>
                : <Button flat primary swapTheming onClick={ this.handleSubmit }>Save</Button>
              }
            </div>
          </Cell>
          <Cell size={5}>
            <Card className="md-block-centered">
              <CardText>
                <ReactMarkdown escapeHtml={false} skipHtml={false} source={this.state.data.document} /> 
              </CardText>
            </Card>
          </Cell>
        </Grid>
        <DialogContainer
          id="dialog"
          visible={this.state.message.visible}
          title="MarkdownEditor Notify"
          onHide={this.close}
        >
        {this.state.message.text}
        <div className="center-button">
          <Button flat primary swapTheming onClick={ this.close }>Close</Button>
        </div>
        </DialogContainer>
      </div>
    )
  }
}

export default withRouter(Create)