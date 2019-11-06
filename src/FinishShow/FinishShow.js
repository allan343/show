import React from 'react';


import ApiContext from '../ApiContext/ApiContext'
import WatchingLog from '../WatchingLog/WatchingLog'


class FinishShow extends React.Component {
  static contextType = ApiContext
  constructor(props) {
    super(props);
   let id=this.props.id
 
   this.state = {
  
    id:id,
    show: []

  }
  
  }

finishShow = () =>{
    
    let currentShow = this.context.getShow(this.state.id)
 currentShow.watching= false
 currentShow.toWatch=false
 currentShow.finish=true
 this.context.updateShow(currentShow, this.state.id)
 console.log("watch to watching", this.context.shows)
 this.setState(
     {
     show:currentShow}
 )
 this.props.history.push("/finish")
}

 render(){
     //throw "test";
        
        return(
       

            
       <div>


            <button type="button" className="folder__button" onClick={this.finishShow}>
           Finish
        </button>
       </div>
       
        )
        
        }

    }





export default FinishShow;