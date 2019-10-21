import React from 'react'

import ShowListNav from '../ShowListNav/ShowListNav'
import ApiContext from '../ApiContext/ApiContext'
import FooterNav from '../FooterNav/FooterNav'



export default class ReadingLog extends React.Component {
  static contextType = ApiContext;



  render() {
    return(
      <div className='NoteListMain__button-container'>
  <div>
  <ButtonToolbar>
    <Button variant="primary" size="lg">
      To Watch
    </Button>
    <Button variant="secondary" size="lg">
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
