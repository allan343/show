import React from 'react'

import ShowListNav from '../ShowListNav/ShowListNav'
import ApiContext from '../ApiContext/ApiContext'
import FooterNav from '../FooterNav/FooterNav'
import Progress from '../Progress/Progress'



export default class WatchingLog extends React.Component {
  static contextType = ApiContext;
  
  constructor(props) {
    super(props);
    id=this.props.id
    this.state = {
      watching:false,
      id:id

    }
  }
  setWatching = () =>{
  
    this.setState({watching:true})
    let show = this.context.getShow(id)
    show.toWatch= false
    show.watching= true
    show.finish=false
   this.context.updateShow(show, show.id)
  }

  setToWatch = () =>{
   let show = this.context.getShow(id)
    show.toWatch= true
    show.watching= false
    show.finish=false
   this.context.updateShow(show, show.id)
  }

  setShowFinish = () =>{
    let show = this.context.getShow(id)
     show.toWatch= false
     show.watching= false
     show.finish=true
    this.context.updateShow(show, show.id)
   }

  render() {
    return(
      <div className='NoteListMain__button-container'>
  <div>
    

<button type="submit" className="folder__button" onClick={this.setToWatch}>
To Watch
</button>
   
    <button type="submit" className="folder__button" onClick={this.setProgress}>
Watching
</button>
    <button type="submit" className="folder__button" onClick={this.setShowFinish}>
Finished
</button>
{this.state.watching?<Progress/>:""}
    
 
</div>
    </div>
    )
  }
}
