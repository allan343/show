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

        <FontAwesomeIcon icon={faFilm} size='4x'/>
        <div className = "titleButton" >
          {show.showname}
          {show.towatch ? <StartShow  history={this.props.history} /> : ""}
          {show.watching ? <FinishShow history={this.props.history} /> : ""}
          </div>
        </div>
        <hr></hr>
        <div id="watching">
          Watching Log
          {icon}
          Watch State {`${showState}`}
          Started {`${start}`}
          Finished {`${finish}`}
          Current Season  {`${currentSeason}`}

          <Link to={`/WatchingLog/${this.context.getId()}`}>
            Update
          </Link>

        </div>
        <hr></hr>
        <div id="details">
          Details
          <Link to={`/ShowDetails/Edit/${this.context.getId()}`}>
            Edit
          </Link>
        </div>
      </div>

    )
  }
}
