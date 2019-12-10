import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import ApiContext from '../ApiContext/ApiContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import {faHome} from "@fortawesome/free-solid-svg-icons";
export default class FooterNav extends React.Component {
  static contextType = ApiContext;

  render() {
    const { shows = [] } = this.context
    //const element = <FontAwesomeIcon icon={fatv} />
    return (
      <div className='ShowListNav'>
        <NavLink
          className='ToWatchlink'
          to={`/`}
          style={{ textDecoration: 'none' }}
        >
         
          <span className='ToWatchIcon'>
          <FontAwesomeIcon icon={faHome} />
       To Watch
                </span>
        </NavLink>
        <NavLink
          className='Watchinglink'
          to={`/watching`}
          style={{ textDecoration: 'none' }}
        >
          <span className='WatchingIcon Icon'>
          <FontAwesomeIcon icon={faVideo} />
            Watching
                </span>
        </NavLink>
        <NavLink
          className='FinishLlink'
          to={`/finish`}
          style={{ textDecoration: 'none' }}
        >
          <span className='FinishIcon Icon'>
          <FontAwesomeIcon icon={faCheck} />
            Finished
                </span>
        </NavLink>
        <div className='ShowListNav__button-wrapper'>
        </div>
      </div>
    )
  }
}
