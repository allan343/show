import React from 'react'


import WatchingListNav from '../WatchingListNav/WatchingListNav'
import ShowListNav from '../ShowListNav/ShowListNav'
import ApiContext from '../ApiContext/ApiContext'
import FooterNav from '../FooterNav/FooterNav'




export default class Finished extends React.Component {
  static contextType = ApiContext;



  render() {
    return (
      <div className='NoteListMain__button-container'>
      {/*<WatchingListNav></WatchingListNav>*/}
      <ShowListNav shows={this.context.shows.filter(show=> show.watching)}></ShowListNav>
      <FooterNav></FooterNav>
      </div>
    )
  
  }
}
