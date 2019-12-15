import React from 'react'
import ApiContext from '../ApiContext/ApiContext'

export default class Progress extends React.Component {
  static contextType = ApiContext;
// a component who's only purpose is to set the current season of a show
// is only called for shows set to the watching state

  constructor(props) {
    super(props);
    let id = this.props.id
    this.state = {
      id: id,
      currentseason: ""
    }
  }

  updateCurrentSeason(season) {
    //gets the show
    // and updates the current season
    let show = this.context.getShow(this.props.id);
    show.currentseason = season;
    this.context.updateShow(show, this.props.id)
    this.props.history.push('/watching')
  }

  render() {
    return (
      <div className='NoteListMain__button-container'>
        <h1>Current Season</h1>
        <form className="folder" onSubmit={(event) => {
          event.preventDefault()
          this.updateCurrentSeason(this.state.currentSeason)
        }}>
          <input type="number" min="1" max={this.context.getShow(this.state.id).seasons + ""} placeholder="current season you're on" className="folder__control"
            name="currentSeason" id="currentSeason" onChange={(e) => this.setState({ currentSeason: e.target.value })} />
          <button type="submit" className="folder__button"  >
            Set Current Season
        </button>
        </form>
      </div>
    )
  }
}
