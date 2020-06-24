import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from "@fortawesome/free-solid-svg-icons";


class Placeholder extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
  
          <div className="initialInfo">
              <div className = "initialInfoIcon" >
              <FontAwesomeIcon icon={faFilm} size='10x' />
              </div>
              <div className="instructions">
          This app allows you to add and track tv shows.  Click on one of your shows to see show details.  If you have no shows, click on "Add Show" to add a show. 
            </div>
          </div>
    
    )
}

}

export default Placeholder;