import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import ApiContext from '../ApiContext/ApiContext'
import Show from '../Show/show'
import '../main.css'

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

  updateName(name) {
    this.setState({ name: { value: name, touched: true } });
  }

  showClicked(showid) {
    this.setState({  clicked: true });
    this.context.setId(showid)
  }

  render() {
    
    const { shows = [] } = this.props
    let filteredShows = []
    // there is a input field allowing user to filter shows by name
    if (this.state.name.value == "") {
      filteredShows = shows
    }
    else {
      filteredShows = shows.filter(show => show.showname.includes(this.state.name.value));
    }
    return (
      <div>
        <div id='shows' className={this.state.id ? 'showlist' : ''}>
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
          <ul >
            {
              filteredShows.map(show =>
                <li id='show' key={show.id} data-id={show.id}>{show.showname}
                  <button onClick={() => this.showClicked(show.id)}>showdetails</button>
                </li>
              )}
          </ul>
        </div>
        <div>
          {this.state.clicked? <Show showId={this.context.getId()} history={this.props.history}  /> : ""}
        </div>
      </div>
    )
  }
}