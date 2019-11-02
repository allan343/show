import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ApiContext from '../ApiContext/ApiContext'
import CircleButton from '../CircleButton/CircleButton'


export default class ShowListNav extends React.Component {
  static contextType = ApiContext;
  constructor(props) {
     

    super(props);
  this.state = {
   
     name: {
          value: "",
          touched: false
        },
      }}

  updateName(name) {
    this.setState({name: {value:name,touched:true}});
  }

  render() {
   
  
    const {  shows=[] } = this.props
    let filteredShows=[]
    if(this.state.name.value =="")
    {
 filteredShows=shows
    }
    else{
      filteredShows=shows.filter(show=> show.name===this.state.name.value);
    }
  
    return (
      <div className='ShowListNav'>
      
      <label htmlFor="name">Name *</label>
         <input type="text" className="folder__control"
           name="name" id="name" value = {this.state.name.value} onChange={e => this.updateName(e.target.value)} />
           
           
        <ul className='ShowListNav__list'>
          {
          
            filteredShows.map(show =>
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

