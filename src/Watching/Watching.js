import React from 'react'
import ShowListNav from '../ShowListNav/ShowListNav'
import ApiContext from '../ApiContext/ApiContext'
import FooterNav from '../FooterNav/FooterNav'

export default class Finished extends React.Component {
  static contextType = ApiContext;

  //filter shows by their watching state
  //only show shows that have that state for this view
  render() {
    return (
      <div className='NoteListMain__button-container'>

        <ShowListNav name={'watching'} shows={this.context.shows.filter(show => show.watching)} history={this.props.history}></ShowListNav>
        <FooterNav></FooterNav>
      </div>
    )
  }
}
