import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import ApiContext from '../ApiContext/ApiContext'
export default class FooterNav extends React.Component {
  static contextType = ApiContext;

  render() {
    const { shows = [] } = this.context
    return (
      <div className='ShowListNav'>
        <NavLink
          className='ShowListNav__folder-link'
          to={`/`}
        >
          <span className='ShowListNav__num-notes'>
            To Watch
                </span>
        </NavLink>
        <NavLink
          className='OrganizeListNav__folder-link'
          to={`/watching`}
        >
          <span className='ShowListNav__num-notes'>
            Watching
                </span>
        </NavLink>
        <NavLink
          className='FinishListNav__folder-link'
          to={`/finish`}
        >
          <span className='ShowListNav__num-notes'>
            Finished
                </span>
        </NavLink>
        <div className='ShowListNav__button-wrapper'>
        </div>
      </div>
    )
  }
}
