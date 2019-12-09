import React from 'react'
import ShowListNav from '../ShowListNav/ShowListNav'
import ApiContext from '../ApiContext/ApiContext'
import FooterNav from '../FooterNav/FooterNav'

export default class Finished extends React.Component {
  static contextType = ApiContext;

  //a view to only show shows that are in the finished state
  render() {
    return (
      <div className='NoteListMain__button-container'>
        
        <ShowListNav name={'finished'} shows={this.context.shows.filter(show => show.finish)}></ShowListNav>
        <FooterNav></FooterNav>
      </div>
    )
  }
}
