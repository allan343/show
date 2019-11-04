import React from 'react'
import { Link } from 'react-router-dom'
import ShowDetails from '../ShowDetails/ShowDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ApiContext from '../ApiContext/ApiContext'
import StartShow from '../StartShow/StartShow'
import FinishShow from '../FinishShow/FinishShow'





export default class Show extends React.Component {
  static defaultProps ={
    onDeleteNote: () => {},
  }
  
  static contextType = ApiContext;

  constructor(props) {
    super(props);
    const { showId } = this.props.match.params
    this.state = {
      id: showId,
    watching:false,
    toWatch:false
  
    }
  
  }
  /*
  setWatching= (id) =>{
    let show= this.context.getShow(id)
    console.log("wtf",show)
  let currentlyWatching= false
  let notYetWatching= false
  
    if(show.watching )
      {
    currentlyWatching= true
        }
        else if (show.toWatch){
          notYetWatching = true
        }
  
        this.setState(
          {
          watching:currentlyWatching,
        toWatch:notYetWatching}
      )
     }
*/

  render() {
    const { shows=[]} = this.context

    const { showId } = this.props.match.params
    // var show= this.context.shows.find(show => this.props.match.params.id === show.id)
      console.log("id",showId)
      let show= this.context.getShow(showId)
      console.log("what?",show)
      console.log("what?22",show.watching)
      let currentlyWatching= false
  let notYetWatching= false
  
    if(show.watching )
      {
    currentlyWatching= true
        }
        else if (show.toWatch){
          notYetWatching = true
        }
  
       
     
  
    return (
     
      <div className='Note'>
        <h2 className='Note__title'>
        {/*this.setWatching(showId)*/}
          
          {notYetWatching? <StartShow id={this.state.id}/>:""}
          {currentlyWatching? <FinishShow id={this.state.id}/>:""}
          
          Watching Log
        <Link to={`/WatchingLog/${this.state.id}`}>
           Update
          </Link>
          Details
          <Link to={`/ShowDetails/Edit/${this.state.id}`}>
           Edit
          </Link>
        </h2>
       
        
        </div>
        

     
    )
  }
}
