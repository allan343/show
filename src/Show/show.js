import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ApiContext from '../ApiContext/ApiContext'





export default class Show extends React.Component {
  static defaultProps ={
    onDeleteNote: () => {},
  }
  static contextType = ApiContext;

  handleClickDelete = e => {
    /*
    e.preventDefault()
    const noteId = this.props.id
 var url= `${config.API_ENDPOINT}/notes/${noteId}`
console.log("url is "+url)
    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
   //    'content-type': 'application/json'
      },
    })
      .then(res => {
        if (res.ok){

          this.context.deleteNote(noteId)
          // allow parent to perform extra behaviour
          this.props.onDeleteNote(noteId)
        }
       //   return res.json().then(e => Promise.reject(e))
       // return res.json()
      })
     /* .then(() => {
        this.context.deleteNote(noteId)
        // allow parent to perform extra behaviour
        this.props.onDeleteNote(noteId)
      })
      .catch(error => {
        console.error({ error })
      })*/
  }

  render() {

     var show= this.context.shows.find(show => this.props.match.params.id === show.id)
      
    
   
    return (
      <div className='Note'>
        <h2 className='Note__title'>
          <Link to={`/show/addshow`}>
           
          </Link>
        </h2>
        <button
          className='Note__delete'
          type='button'
          onClick={this.handleClickDelete}
        >
          <FontAwesomeIcon icon='trash-alt' />
          {' '}
          remove
        </button>
        <div className='Note__dates'>
          <div className='Note__dates-modified'>
            Modified
            {' '}
            <span className='Date'>
         
            </span>
          </div>
        </div>
        

      </div>
    )
  }
}
