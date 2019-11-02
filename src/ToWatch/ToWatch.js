import React from 'react'

import ShowListNav from '../ShowListNav/ShowListNav'
import ApiContext from '../ApiContext/ApiContext'
import FooterNav from '../FooterNav/FooterNav'



export default class ToWatch extends React.Component {
  static contextType = ApiContext;



  render() {
    return(
      <div className='NoteListMain__button-container'>
    <ShowListNav shows={this.context.shows.filter(show=> show.toWatch)}></ShowListNav>
    <FooterNav></FooterNav>
    </div>
    )
  }
}
