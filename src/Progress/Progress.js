import React from 'react'

import ShowListNav from '../ShowListNav/ShowListNav'
import ApiContext from '../ApiContext/ApiContext'
import FooterNav from '../FooterNav/FooterNav'



export default class Progress extends React.Component {
  static contextType = ApiContext;

  constructor(props) {
    super(props);
    let id=this.props.id
    this.state = {
        currentSeason: {
            value: '',
            touched: false,
           
          },
          id:id
        }
        }
      
        updateCurrentSeason(season) {
          this.setState({currentSeason: season});
          let show=this.context.getShow(this.state.id);
          show.currentSeason= this.state.currentSeason;
          this.context.updateShow(show, this.state.id)
        }


  render() {
    return(
  

      <div className='NoteListMain__button-container'>
          <form className="folder" onSubmit = {(event)=>{
      //  event.preventDefault();
        //      this.setState({currentSeason: event.value});
            
          }}></form>
    <input type="text" className="folder__control"
           name="currentSeason" id="currentSeason" onChange={e => this.updateCurrentSeason(e.target.value)} />
           <button type="submit" className="folder__button" >
            Save
        </button>
    </div>
    )
  }
}
