import React from 'react'

import ShowListNav from '../ShowListNav/ShowListNav'
import ApiContext from '../ApiContext/ApiContext'
import FooterNav from '../FooterNav/FooterNav'
import Progress from '../Progress/Progress'



export default class WatchingLog extends React.Component {
  static contextType = ApiContext;

  setProgress() {
    <Progress></Progress>
  }

  render() {
    return(
      <div className='NoteListMain__button-container'>
  <div>
  <ButtonToolbar>
    <Button variant="primary" size="lg">
      To Watch
    </Button>
    <Button variant="secondary" size="lg" onClick={this.setProgress}>
      Watching
    </Button>
    <Button variant="secondary" size="lg">
      Finish
    </Button>
  </ButtonToolbar>

 
</div>
    </div>
    )
  }
}
