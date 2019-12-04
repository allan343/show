import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ApiContext from '../ApiContext/ApiContext'
import CircleButton from '../CircleButton/CircleButton'
import Show from '../Show/show'
import '../main.css'
import ShowDetails from '../ShowDetails/ShowDetails'


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
       
          clicked: false,
          editShowVisible:false
        
      }}

      closeShowDetails= ()=>{
        this.setState({
          editShowVisible:false
        })
        
      }
      setShowDetailsVisible =()=>{
    
    this.setState({
      editShowVisible:true
    })
    
      }

  updateName(name) {
    this.setState({name: {value:name,touched:true}});
  }

  showClicked(showid) {

    console.log("id balah is",this.state.id)
    this.setState({id:showid, clicked:true });
    console.log("id after is",this.state.id)
   }

  render() {
   
  
    const {  shows=[] } = this.props
    let filteredShows=[]
    if(this.state.name.value =="")
    {
 filteredShows=shows
    }
    else{
      filteredShows=shows.filter(show=> show.showname.includes(this.state.name.value));
    }
  console.log("filtered",filteredShows)
    return (
      <div>
      <div id='shows' className={this.state.id?'showlist':''}>
      
      <label htmlFor="name"  ></label>
         <input type="text" className="folder__control" placeholder="Search your shows..."
           name="name" id="name" value = {this.state.name.value} onChange={e => this.updateName(e.target.value)} />
         {/*}
         <NavLink
                
                to={`/add-show`}
              >
              
                Add Show
           </NavLink>*/}
            <button type="button" onClick={ this.setShowDetailsVisible} >
          Add Show
        </button>
       
        <ul >
          {
            

            
           filteredShows.map(show =>
           <li id='show'  key ={show.id} data-id={show.id}>{show.showname}
           <button onClick={() => this.setState({id:show.id})}>showdetails</button>
           </li>
            ) }
        </ul>
       
        {this.state.editShowVisible? <ShowDetails  closeShowDetails={this.closeShowDetails}/>:""}
      </div>
      <div>
        {this.state.id? <Show showId={this.state.id} history={this.props.history}  hideshow={()=>{this.setState({id:null})}}/>:"" }
        </div>
      </div>
    )
  }
}