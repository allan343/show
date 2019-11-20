import React from 'react';


import ApiContext from '../ApiContext/ApiContext'
import WatchingLog from '../WatchingLog/WatchingLog'


class StartShow extends React.Component {
  static contextType = ApiContext
  constructor(props) {
    super(props);
   let id=this.props.id
 
   this.state = {
  
    id:id,
    show: []

  }
  
  }

startShow = () =>{
    
    let currentShow = this.context.getShow(this.state.id)
 currentShow.watching= true
 currentShow.toWatch=false
 currentShow.finish=false
 currentShow.startDate=Date(Date.now())
 this.context.updateShow(currentShow, this.state.id)
 console.log("watch to watching", this.context.shows)
 this.setState(
     {
     show:currentShow}
 )

 this.props.history.push("/watching")
  
}

 render(){
     //throw "test";
        
        return(
       

            
       <div>


            <button type="button" className="folder__button" onClick={this.startShow}>
            Start
        </button>
       </div>
       
        )
        
        }

    }





export default StartShow;