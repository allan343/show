import React from 'react'


import FinishedListNav from '../FinishedListNav/FinishedListNav'
import ShowListNav from '../ShowListNav/ShowListNav'
import ApiContext from '../ApiContext/ApiContext'
import FooterNav from '../FooterNav/FooterNav'




export default class Finished extends React.Component {
  static contextType = ApiContext;



  render() {
    return (
      <div className='NoteListMain__button-container'>
         { <h1>Finished</h1>}
      {/*<FinishedListNav></FinishedListNav>*/}
      <ShowListNav shows={this.context.shows.filter(show=> show.finish)}></ShowListNav>
      <FooterNav></FooterNav>
      </div>
    )
  
  }
}
