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
     id: id,
        currentSeason:""
        }
        }
      
        updateCurrentSeason(season) {
         // this.setState({currentSeason: season});
          let show=this.context.getShow(this.props.id);
          show.currentSeason= season;
          this.context.updateShow(show, this.props.id)
          console.log("season is ", season)
          console.log("update Season", show)
          this.props.history.push('/watching')
        }


  render() {
    return(
  

      <div className='NoteListMain__button-container'>
          <form className="folder" onSubmit = {(event)=>{
            event.preventDefault()
            console.log("submit")
              this.updateCurrentSeason(this.state.currentSeason)
          }}>

<input type="number" min ="1" max={this.context.getShow(this.state.id).seasons+""} placeholder="current season you're on" className="folder__control"
           name="currentSeason" id="currentSeason" onChange={(e) => this.setState({currentSeason:e.target.value})} />
           <button type="submit" className="folder__button"  >
            Save
        </button>

          </form>
  
    </div>
    )
  }
}
