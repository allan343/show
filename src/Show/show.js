import React from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../ApiContext/ApiContext'
import StartShow from '../StartShow/StartShow'
import FinishShow from '../FinishShow/FinishShow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import {faHome} from "@fortawesome/free-solid-svg-icons";


export default class Show extends React.Component {
  static defaultProps = {
    onDeleteNote: () => { },
  }

  static contextType = ApiContext;
//the show component
  constructor(props) {
    super(props);

    const { showId } = this.props
    const { showname } = this.props
//name id and various states the show can be in
    this.state = {
      showname: showname,
      id: showId,
      watching: false,
      towatch: false,
      watchLogVisible: false
    }
  }


  render() {
    const { showId } = this.props
    let show = this.context.getShow(showId)
    let showState = ""
    let start = ""
    let finish = ""
    let currentSeason = ""
    let icon = <FontAwesomeIcon icon={faFilm}/>
    //depending on which state
    // show is in
    //label accordingly
    if (show.towatch) {
      showState = "To Watch"
      finish = "Haven't started"
      start = "Haven't started"
      currentSeason = "Haven't started"
      icon =  <FontAwesomeIcon icon={faHome} />
    }
    if (show.watching) {
      showState = "Watching"
      finish = "Still Watching"
      start = show.startdate
      currentSeason = show.currentseason
      icon =<FontAwesomeIcon icon={faVideo} />
    }
    if (show.finish) {
      showState = "Finished"
      finish = show.finishdate
      start = show.startdate
      currentSeason = show.currentseason
      icon =    <FontAwesomeIcon icon={faCheck} />

    }


    return (

      <div id='actualShow'>

        <button className="backButton" type="button" onClick={this.props.hideshow}>
          Back
        </button>
        <div id="title">
        <div className= "titleIcon">
        <FontAwesomeIcon icon={faFilm} size='6x'/>
        </div>
        <div className = "titleButton" >
          {show.showname}
          {show.towatch ? <StartShow  history={this.props.history} /> : ""}
          {show.watching ? <FinishShow history={this.props.history} /> : ""}
          </div>
          
    
        </div>
        <hr></hr>
        <div id="watching">
          <div className="headerAndButton">
          Watching Log
          <div className="link">
          <Link to={`/WatchingLog/${this.context.getId()}`}>
            Update
          </Link>
          </div>
          </div>
          <div className="showStates">
            <span className ="showlabel">
          Watch State:
            </span>
            <span className = "showdetails">
           {icon}{`${showState}`}
           </span>
          </div>
          <div className="showStates">
          
          <span className = "showlabel">
          Started: 
          </span> <span className="showdetails">{`${start}`}
          </span>
          </div>
          <div className="showStates">
          <span className = "showlabel">
          Finished: 
          </span><span className="showdetails"> {`${finish}`}
          </span>
          </div>
          <div className="showStates">
          <span className = "showlabel">
          Current Season: 
          </span> <span className="showdetails">  {`${currentSeason}`}
          </span>
          </div>

        </div>
        <hr></hr>
        <div id="details">
        <div className="headerAndButton">
          Details: 
          <div className="link">
          <Link to={`/ShowDetails/Edit/${this.context.getId()}`}>
            Edit: 
          </Link>
          </div>
          </div>
          <div className="showStates">
          <span className = "showlabel">
          Name:  
          </span><span className="showdetails"> {`${show.showname}`}
          </span>
          </div>
          <div className="showStates">
          <span className = "showlabel">
          Genre:  </span> <span className="showdetails">{`${show.genre}`}
          </span>
          </div>
          <div className="showStates">
          <span className = "showlabel">
          Number of seasons: </span> <span className="showdetails"> {`${show.seasons}`}
          </span>
          </div>
          <div className="showStates">
          <span className = "showlabel">
          Description:   
          </span>
          <span className="showdetails"> 
          {`${show.showdescription}`}
          </span>
          </div>
          <div className="showStates">
          <span className = "showlabel">
         Language:  
         </span>
         <span className="showdetails"> 
          {`${show.showlanguage}`}
          </span>
          </div>
         
        </div>
      </div>

    )
  }
}
