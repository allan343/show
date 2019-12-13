import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import ApiContext from '../ApiContext/ApiContext'
import Show from '../Show/show'
import '../main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from "@fortawesome/free-solid-svg-icons";

export default class ShowListNav extends React.Component {
  static contextType = ApiContext;
  //component that renders all shows from list
  constructor(props) {
    super(props);
    this.state = {
     
      name: {
        value: "",
        touched: false
      },
      clicked: false
    }
  }
   getHeading() {
   let heading = this.props.name
   if(heading==='towatch')
   {
    return <h1>To Watch</h1>;
   }
   if(heading==='watching')
   {
    return <h1>Watching</h1>;
   }
   if(heading==='finish')
   {
    return <h1>Finished</h1>;
   }
  }
  updateName(name) {
    this.setState({ name: { value: name, touched: true } });
  }

  showClicked(showid) {
    this.setState({  clicked: true });
    this.context.setId(showid)
  }

  render() {
    
    const { shows = [] } = this.props
    let label = this.props.name
    let filteredShows = []
    // there is a input field allowing user to filter shows by name
    if (this.state.name.value == "") {
      filteredShows = shows
    }
    else {
      filteredShows = shows.filter(show => show.showname.includes(this.state.name.value));
    }
    return (
      <div >
        <div id='shows' className={this.state.id ? 'showlist' : ''}>
       {this.props.name ==='towatch' ? <h1>To Watch</h1> : ""}
       {this.props.name ==='watching' ? <h1>Watching</h1> : ""}
       {this.props.name ==='finished'? <h1>Finished</h1> : ""}
          <label htmlFor="name"  ></label>
          <input type="text" className="folder__control" placeholder="Search your shows..."
            name="name" id="name" value={this.state.name.value} onChange={e => this.updateName(e.target.value)} />
          <NavLink
            to={`/add-show`}
          >
            Add Show
           </NavLink>
           {//create a list of shows
           //shows have button to allow user to see show details
           }
          <ul id='list' >
            {
              filteredShows.map(show =>
               
                <li id='show' key={show.id} data-id={show.id}> <FontAwesomeIcon icon={faFilm} size='2x' />{show.showname}
                  <button onClick={() => this.showClicked(show.id)}>showdetails</button>
                </li>
              )}
          </ul>
        </div>
        <div>
          {this.state.clicked? <Show showId={this.context.getId()} history={this.props.history} hideshow={()=>{this.setState({clicked:false})}} /> : ""}
        </div>
      </div>
    )
  }
}