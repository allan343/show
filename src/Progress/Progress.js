import React from 'react'

import ShowListNav from '../ShowListNav/ShowListNav'
import ApiContext from '../ApiContext/ApiContext'
import FooterNav from '../FooterNav/FooterNav'



export default class Progress extends React.Component {
  static contextType = ApiContext;

  constructor(props) {
    super(props);
    this.state = {
        currentSeason: {
            value: '',
            touched: false
          }}
        }
              updateCurrentSeason(season) {
                this.setState({currentSeason: season});
              }

  render() {
    return(
      <div className='NoteListMain__button-container'>
    <input type="text" className="folder__control"
           name="currentSeason" id="currentSeason" onChange={e => this.updateCurrentSeason(e.target.value)} />
    </div>
    )
  }
}
