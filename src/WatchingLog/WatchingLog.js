import React from 'react'

import ShowListNav from '../ShowListNav/ShowListNav'
import ApiContext from '../ApiContext/ApiContext'
import FooterNav from '../FooterNav/FooterNav'
import Progress from '../Progress/Progress'



export default class WatchingLog extends React.Component {
  static contextType = ApiContext;

  constructor(props) {
    super(props);
    this.state = {
      watching:false

    }
  }
  setProgress = () =>{
    this.setState({watching:true})
  }

  render() {
    return(
      <div className='NoteListMain__button-container'>
  <div>
    

<button type="submit" className="folder__button">
To Watch
</button>
   
    <button type="submit" className="folder__button" onClick={this.setProgress}>
Watching
</button>
    <button type="submit" className="folder__button">
Finished
</button>
{this.state.watching?<Progress/>:""}
    
 
</div>
    </div>
    )
  }
}
