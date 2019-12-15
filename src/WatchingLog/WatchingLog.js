import React from 'react'
import ApiContext from '../ApiContext/ApiContext'
import Progress from '../Progress/Progress'
import './WatchingLog.css'

export default class WatchingLog extends React.Component {
  static contextType = ApiContext;
  constructor(props) {
    super(props);
    let id = this.props.id
    this.state = {
      watching: false,
      id: id
    }
  }

  //method to set the show to watching state
  setWatching = () => {
    this.setState({ watching: true })
    let show = this.context.getShow(this.state.id)
    //show set to watching state
    //towatch and finish states set to false
    show.towatch = false
    show.watching = true
    show.finish = false
    show.startdate = new Date()
    show.startdate = show.startdate.toISOString()
    show.finishdate = ""
    this.context.updateShow(show, show.id)
  }

   //method to set the show to watching state
  setToWatch = () => {
    let show = this.context.getShow(this.state.id)
    //show set to not yet watching state
    //watching and finish states set to false
    show.towatch = true
    show.watching = false
    show.finish = false
    show.startdate = ""
    show.finishdate = ""
    this.context.updateShow(show, show.id)
    this.props.history.push('/')
  }

  //method to set the show to watching state
  setShowFinish = () => {
    let show = this.context.getShow(this.state.id)
    //show set to not yet watching state
    //watching and finish states set to false
    show.towatch = false
    show.watching = false
    show.finish = true
    show.finishdate = new Date()
    show.finishdate = show.finishdate.toISOString()
    show.currentseason = show.seasons
    if (show.startdate == "") {
      show.startdate = new Date()
      show.startdate = show.startdate.toISOString()
    }
    if (show.startdate == null) {
      show.startdate = new Date()
      show.startdate = show.startdate.toISOString()
    }
    this.context.updateShow(show, show.id)
    this.props.history.push('/finish')
  }

  render() {
    return (
      <div id='watchingLog'>
        <div>
          <h1>Watching Log</h1>
          <div className="watchLog__button__group">
          <button type="submit" className="folder__button" onClick={this.setToWatch}>
            To Watch
</button>

          <button type="submit" className="folder__button" onClick={this.setWatching}>
            Watching
</button>
          <button type="submit" className="folder__button" onClick={this.setShowFinish}>
            Finished
</button>
          {this.state.watching ? <Progress id={this.state.id} history={this.props.history} closeWatchLog={this.props.closeWatchLog} /> : ""}
        </div>
      </div>
      </div>
    )
  }
}
