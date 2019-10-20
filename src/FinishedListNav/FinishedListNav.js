import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import ApiContext from '../ApiContext'
import PropTypes from 'prop-types';
import { countNotesForFolder } from '../notes-helpers'


export default class OrganizeListNav extends React.Component {
  static contextType = ApiContext;



  render() {

    const {  shows=[] } = this.context
    return (
      <div className='OrganizeListNav'>
        <ul className='OrganizeListNav__list'>
          {shows.map(shows =>
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
        <div className='OrganizeListNav__button-wrapper'>
          <CircleButton
            tag={Link}
            to='/add-show'
            type='button'
            className='OrganizeListNav__add-folder-button'
          >
            <FontAwesomeIcon icon='plus' />
            <br />
            Show
          </CircleButton>
        </div>
      </div>
    )
  }
}

NoteListNav.propTypes = {
  key: PropTypes.string,
  path: PropTypes.string

}