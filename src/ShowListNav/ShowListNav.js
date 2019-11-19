import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ApiContext from '../ApiContext/ApiContext'
import CircleButton from '../CircleButton/CircleButton'
import Show from '../Show/show'
import '../main.css'


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
      <div>
      <div id='shows'>
      
      <label htmlFor="name">Name *</label>
         <input type="text" className="folder__control"
           name="name" id="name" value = {this.state.name.value} onChange={e => this.updateName(e.target.value)} />
         <NavLink
                
                to={`/add-show`}
              >
              
                Add Show
           </NavLink>
           
        <ul >
          {
            

            
           filteredShows.map(show =>
           <li id='show'  key ={show.id} data-id={show.id}>{show.name}
           <button onClick={showClicked.bind(this, show.id)}>showdetails</button>
           </li>
            ) }
        </ul>
       
        
      </div>
      <div id ="actualShow">
        {this.state.clicked? <Show name = {this.state.name} showId={this.state.id}/>:"" }
        </div>
      </div>
    )
  }
}