import React from 'react'
import { NavLink, Link } from 'react-router-dom'


import ApiContext from '../ApiContext/ApiContext'


export default class FooterNav extends React.Component {
  static contextType = ApiContext;



  render() {

    const {  shows=[] } = this.context
    return (
      <div className='ShowListNav'>
        <ul className='ShowListNav__list'>
          {shows.map(show =>
            <li key={show.id}>
              <NavLink
                className='ShowListNav__folder-link'
                to={`/show/`}
              >
                <span className='ShowListNav__num-notes'>
                To Watch
                </span>
               
              </NavLink>
              <NavLink
                className='FinishListNav__folder-link'
                to={`/show/finish`}
              >
                <span className='ShowListNav__num-notes'>
                Finished
                </span>
               
              </NavLink>
              <NavLink
                className='OrganizeListNav__folder-link'
                to={`/show/organize`}
              >
                <span className='ShowListNav__num-notes'>
                Organize
                </span>
               
              </NavLink>
            </li>
          )}
        </ul>
        <div className='ShowListNav__button-wrapper'>
        
        </div>
      </div>
    )
  }
}
