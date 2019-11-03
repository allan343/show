import React from 'react'
import { Link } from 'react-router-dom'
import ShowDetails from '../ShowDetails/ShowDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ApiContext from '../ApiContext/ApiContext'
import StartShow from '../StartShow/StartShow'





export default class Show extends React.Component {
  static defaultProps ={
    onDeleteNote: () => {},
  }
  static contextType = ApiContext;

  handleClickDelete = e => {
    
  }

  render() {
    const { shows=[]} = this.context
    const { showId } = this.props.match.params
    // var show= this.context.shows.find(show => this.props.match.params.id === show.id)
      
    
   
    return (
      <div className='Note'>
        <h2 className='Note__title'>
          <StartShow id={showId}></StartShow>
          Watching Log
        <Link to={`/WatchingLog/${showId}`}>
           Update
          </Link>
          Details
          <Link to={`/ShowDetails/Edit/${showId}`}>
           Edit
          </Link>
        </h2>
       
        
        </div>
        

     
    )
  }
}
