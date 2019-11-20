import React from 'react'

import ShowListNav from '../ShowListNav/ShowListNav'
import ApiContext from '../ApiContext/ApiContext'
import FooterNav from '../FooterNav/FooterNav'
import Progress from '../Progress/Progress'



export default class WatchingLog extends React.Component {
  static contextType = ApiContext;
  
  constructor(props) {
    super(props);
   let id=this.props.id
    this.state = {
      watching:false,
      id:id

    }
  }
  setWatching = () =>{
   
    this.setState({watching:true})
    console.log("this id", this.state.id)
    console.log("setWatching", this.context.shows)
    let show = this.context.getShow(this.state.id)
    console.log("why undefined",show)
    show.toWatch= false
    show.watching= true
    show.finish=false
    show.startDate=Date(Date.now())
    show.finishDate=""
   this.context.updateShow(show, show.id)
   this.props.history.push('/watching')
  }

  setToWatch = () =>{
    console.log("before")
    console.log("set toWatch", this.context.shows)
   let show = this.context.getShow(this.state.id)
   console.log(show)
   console.log("array", this.context.shows)
    show.toWatch= true
    show.watching= false
    show.finish=false
    show.startDate=""
    show.finishDate=""
   this.context.updateShow(show, show.id)
   console.log("set to Watch after update", this.context.shows)
   this.props.history.push('/')
  }

  setShowFinish = () =>{
    let show = this.context.getShow(this.state.id)
    console.log("array", this.context.shows)
     show.toWatch= false
     show.watching= false
     show.finish=true
     show.finishDate=Date(Date.now())
     if(show.startDate=="")
     {
       show.startDate=Date(Date.now())
     }
    this.context.updateShow(show, show.id)
    this.props.history.push('/finish')
    
   }

  render() {
    return(
      <div id='watchingLog'>
  <div>
    <h1>Watching Log</h1>

<button type="submit" className="folder__button" onClick={this.setToWatch}>
To Watch
</button>
   
    <button type="submit" className="folder__button" onClick={this.setWatching}>
Watching
</button>
    <button type="submit" className="folder__button" onClick={this.setShowFinish}>
Finished
</button>
{this.state.watching?<Progress id={this.state.id} />:""}
    
 
</div>
    </div>
    )
  }
}
