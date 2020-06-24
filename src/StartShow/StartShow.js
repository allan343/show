import React from 'react';
import ApiContext from '../ApiContext/ApiContext';
import './startShow.css';

class StartShow extends React.Component {
  static contextType = ApiContext;
  constructor(props) {
    super(props);

    this.state = {
      show: []
    }
  }

  //a component who's only purpose is to start the show
  // ie set the show to be watching state
  // also sets the start date of the show

  startShow = () => {

    let currentShow = this.context.getShow(this.context.getId());
    currentShow.watching = true;
    currentShow.towatch = false;
    currentShow.finish = false;
    currentShow.startdate = new Date();
    currentShow.startdate = currentShow.startdate.toISOString();
    currentShow.currentseason = 1;
    this.context.updateShow(currentShow, this.context.getId());
    this.setState(
      {
        show: currentShow
      }
    )
    this.props.history.push("/watching");
  }

  render() {
    return (
      <div>
        <button type="button" className="state__button" onClick={this.startShow}>
          Start
        </button>
      </div>
    )
  }
}

export default StartShow;