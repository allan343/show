import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ApiContext from '../ApiContext/ApiContext'
import CircleButton from '../CircleButton/CircleButton'
import Show from '../Show/show'


export default class ShowListNav extends React.Component {
  static contextType = ApiContext;
  constructor(props) {
     

    super(props);
  this.state = {
    id:"",
     name: {
          value: "",
          touched: false
        },
       
          clicked: false
        
      }}

  updateName(name) {
    this.setState({name: {value:name,touched:true}});
  }

  render() {
    function showClicked(showid) {

     this.setState({id:showid, clicked:true });
    }
  
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
            /*
          {
          
            filteredShows.map(show =>
            <li key={show.id}>
           {  <NavLink
                className='ShowListNav__folder-link'
                to={`/show/${show.id}`}
              >
                <span className='ShowListNav__num-notes'>
                
                </span>
                {show.name}
           </NavLink>}
           </li>
          )}
            */
           filteredShows.map(show =>
           <li className='showitem'  key ={show.id} data-id={show.id}>{show.name}
           <button onClick={showClicked.bind(this, show.id)}>showdetails</button>
           </li>
            ) }
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
        {this.state.clicked? <Show showId={this.state.id}/>:"" }
      </div>
    )
  }
}