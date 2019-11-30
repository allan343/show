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
    //const { showId } = this.props.match.params
    
    const { showId } = this.props
    const {showname}=this.props
    

    this.state = {
      showname:showname,
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

    //const { showId } = this.props.match.params
    const { showId } = this.props
    // var show= this.context.shows.find(show => this.props.match.params.id === show.id)
      console.log("id",showId)
      let show= this.context.getShow(showId)
      console.log("show",show)
      let showState=""
      let start=""
      let finish=""
      if(show.towatch)
      {
        showState= "To Watch"
        finish="Haven't started"
        start="Haven't started"
      }
      if(show.watching)
      {
        showState="Watching"
        finish ="Still Watching"
        start =show.startdate
      }
      if(show.finish)
      {
        showState="Finished"
        finish=show.finishdate
        start= show.startdate
      }
     
  
    return (
     
      <div id='actualShow'>
        
        {/*this.setWatching(showId)*/}
        <div id = "title"> 
          {show.showname}
          {show.towatch? <StartShow id={this.state.id} history={this.props.history}/>:"" }
          {show.watching? <FinishShow id={this.state.id} history={this.props.history}/>:""}
          </div>
          <hr></hr>
          <div id = "watching"> 
          Watching Log
          Watch State {`${showState}`}
          Started {`${start}`}
          Finished {`${finish}`}
          
        <Link to={`/WatchingLog/${this.state.id}`}>
           Update
          </Link>
          </div>
          <hr></hr>
          <div id = "details"> 
          Details
          <Link to={`/ShowDetails/Edit/${this.state.id}`}>
           Edit
          </Link>
        </div>
       
        
        </div>
        

     
    )
  }
}
