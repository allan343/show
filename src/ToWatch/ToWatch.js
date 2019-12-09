import React from 'react'

import ShowListNav from '../ShowListNav/ShowListNav'
import ApiContext from '../ApiContext/ApiContext'
import FooterNav from '../FooterNav/FooterNav'

export default class ToWatch extends React.Component {
  static contextType = ApiContext;

   //filter shows by their not yet watching state
  //only show shows that have that state for this view
  render() {
    return (
      <span className='NoteListMain__button-container'>
       
        <ShowListNav name={'towatch'} shows={this.context.shows.filter(show => show.towatch)} history={this.props.history}>
        
        </ShowListNav>
      
        <FooterNav></FooterNav>
      </span>
    )
  }
}