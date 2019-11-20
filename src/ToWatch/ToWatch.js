import React from 'react'

import ShowListNav from '../ShowListNav/ShowListNav'
import ApiContext from '../ApiContext/ApiContext'
import FooterNav from '../FooterNav/FooterNav'



export default class ToWatch extends React.Component {
  static contextType = ApiContext;



  render() {
    return(
      <span className='NoteListMain__button-container'>
         { <h1>To Watch</h1>}
    <ShowListNav shows={this.context.shows.filter(show=> show.toWatch) } history={this.props.history}>

      
    </ShowListNav>
    <FooterNav></FooterNav>
    </span>
    )
  }
}