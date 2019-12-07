import React from 'react';
import ApiContext from '../ApiContext/ApiContext'

class FinishShow extends React.Component {
  static contextType = ApiContext
  constructor(props) {
    super(props);
    let id = this.props.id
    this.state = {
      id: id,
      show: []
    }
  }

  //this is a component that lets the user set the show from 
  //watching state to finihsed state
  // sets the date the show was finished
  // updates the show with changes by context update method
  finishShow = () => {

    let currentShow = this.context.getShow(this.state.id)
    currentShow.watching = false
    currentShow.towatch = false
    currentShow.finish = true
    currentShow.finishdate = new Date()
    currentShow.finishdate = currentShow.finishdate.toISOString()
    currentShow.currentseason = currentShow.seasons
    this.context.updateShow(currentShow, this.state.id)
    this.setState(
      {
        show: currentShow
      }
    )
    this.props.history.push("/finish")
  }

  render() {
    return (
      <div>
        <button type="button" className="folder__button" onClick={this.finishShow}>
          Finish
        </button>
      </div>
    )
  }
}
export default FinishShow;