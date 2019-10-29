import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ApiContext from '../ApiContext/ApiContext'
import CircleButton from '../CircleButton/CircleButton'


export default class WatchingListNav extends React.Component {
  static contextType = ApiContext;


  render() {
  
  
    const {  shows=[] } = this.context
    let  watching = shows.filter(show=> show.watching)
    console.log("watching", watching)
    return (
      <div className='ShowListNav'>
      

        <ul className='ShowListNav__list'>
          {
         
            watching.map(show =>
            <li key={show.id}>
              <NavLink
                className='ShowListNav__folder-link'
                to={`/show/${show.id}`}
              >
                <span className='ShowListNav__num-notes'>
                
                </span>
                {show.name}
              </NavLink>
            </li>
          )}
        </ul>
        <div className='ShowListNav__button-wrapper'>
          <CircleButton
            tag={Link}
            to='/add-show'
            type='button'
            className='ShowListNav__add-folder-button'
          >
            <FontAwesomeIcon icon='plus' />
            <br />
            +
          </CircleButton>
        </div>
      </div>
    )
  }
}

