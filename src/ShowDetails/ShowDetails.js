import React from 'react';


import ApiContext from '../ApiContext/ApiContext'
import WatchingLog from '../WatchingLog/WatchingLog'


class ShowDetails extends React.Component {
  static contextType = ApiContext
  
  static defaultProps = { 
    id: '',
    showname: '',
    finishdate: '',
    startdate:'',
    genre:'',
    seasons:'',
  showdescription:'',
showlanguage: '',
currentseason: '1' };

    constructor(props) {
     

        super(props);
        this.state = {
        //  id: this.props.id||Math.random() +'',
        id:'',
           showname: {
                value: this.props.showname,
                touched: false
              },
           
            finishdate:"",
              startdate:"",
              genre: {
                value: this.props.genre,
                touched: false
              },
              seasons: {
                value: this.props.seasons,
                touched: false
              },
           
              showdescription: {
                value: this.props.showdescription,
                touched: false
              },
           
              showlanguage: {
                value: this.props.showlanguage,
                touched: false
              },


      
            //  showSubmitted:false,
              currentseason: this.props.currentseason,
              watchLogVisible:false

             
          };
          console.log("inside constructor",this.state.id)
      }
/*
      setProgress = (e) => {
       e.preventDefault()
       // this.setState({showSubmitted:true})
       console.log("huh?",this.context.shows)
        let show = {
          id:this.state.id,
          name: this.state.name.value,
          finishDate: this.state.finishDate,
          startDate: this.state.startDate,
          genre: this.state.genre.value,
          seasons: this.state.seasons.value,
          description: this.state.description.value,
          language: this.state.language.value
        }
        this.context.AddShow(show)
        console.log("wha??",this.context.shows)
       this.setState({
        id:show.id

       })
      }
      */

      cancelHandle = (e) =>
      {
          e.preventDefault()

//this.props.history.push(`/`)
this.props.closeShowDetails()
      }

      closeWatchLog= ()=>{
        this.setState({
          watchLogVisible:false
        })
        
      }

      updateName(showname) {
        this.setState({showname: {value:showname,touched:true}});
        console.log("name",showname)
      }

      updateAirDate(airdate) {
        this.setState({airdate: {value:airdate,touched:true}});
      }

      updateStartDate(startdate) {
        this.setState({startdate: {value:startdate,touched:true}});
      }

      updateGenre(genre) {
        this.setState({genre: {value:genre,touched:true}});
      }

      updateSeasons(seasons) {
        this.setState({seasons:{value:seasons,touched:true}});
      }

      updateDescription(showdescription) {
        this.setState({showdescription: {value:showdescription,touched:true}});
      }

      updateLanguage(showlanguage) {
        this.setState({showlanguage: {value:showlanguage,touched:true}});
      }
   
    render(){
     //throw "test";
        
        return(
          <div id="edit-details">
<form className="folder" onSubmit = {(event)=>{

console.log("showdetails submit", this.context.shows)
event.preventDefault();
console.log("inside return",this.state.id)
//this.setState({showSubmitted:true})
console.log("showdetails submit", this.context.shows)
let show = {
//  id:this.state.id,
  showname: this.state.showname.value,
  finishdate: this.state.finishdate,
  startdate: this.state.startdate,
  genre: this.state.genre.value,
  seasons: this.state.seasons.value,
  showdescription: this.state.showdescription.value,
  showlanguage: this.state.showlanguage.value
}
console.log("we are adding here",show)
this.context.addShow(show,(newid)=>{
  this.setState({ id:newid})
  this.setState({
    watchLogVisible:true
  })
  //this.props.history.push(`/WatchingLog/${newid}`)
  
  console.log("show is", show)
  console.log("watchlog", this.state.watchLogVisible)
  
}) 


this.props.closeShowDetails()

}}> 
<h2>Edit Show Details</h2>
       <div className="show__hint">* required field</div>  
       <div className="form-group">
         <label htmlFor="showname">Name *</label>
         <input type="text" className="folder__control"
           name="showname" id="showname" value = {this.state.showname.value} onChange={e => this.updateName(e.target.value)} />
           
         
           
           <label htmlFor="name">Genre *</label>
<input type="text" className="folder__control"
           name="genre" id="genre"  value = {this.state.genre.value} onChange={e => this.updateGenre(e.target.value)} />
            
            <label htmlFor="name">Number Of Seasons *</label>
<input type="text" className="folder__control"
           name="seasons" id="seasons" value = {this.state.seasons.value} onChange={e => this.updateSeasons(e.target.value)} />
            
            <label htmlFor="name">Description *</label>
<input type="text" className="folder__control"
           name="showdescription" id="showdescription" value = {this.state.showdescription.value} onChange={e => this.updateDescription(e.target.value)} />

 <label htmlFor="name">Language *</label>
<input type="text" className="folder__control"
           name="showlanguage" id="showlanguage" value = {this.state.showlanguage.value} onChange={e => this.updateLanguage(e.target.value)} />
            

        </div>
        <div className="folder__button__group">
        <button type="cancel" className="folder__button" onClick={this.cancelHandle}>
            Cancel
        </button>
        <button type="submit" className="folder__button" >
            Save
        </button>
        {this.state.watchLogVisible? <WatchingLog id={this.state.id} closeWatchLog={this.closeWatchLog}/>:""}
       </div>
</form>

</div>
)
    }
}




export default ShowDetails;