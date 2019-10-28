import React from 'react'


import FinishedListNav from '../FinishedListNav/FinishedListNav'
import ApiContext from '../ApiContext/ApiContext'
import FooterNav from '../FooterNav/FooterNav'




export default class Finished extends React.Component {
  static contextType = ApiContext;



  render() {
    return (
      <div className='NoteListMain__button-container'>
      <FinishedListNav></FinishedListNav>
      <FooterNav></FooterNav>
      </div>
    )
  
  }
}
