import React from 'react';


import ApiContext from '../ApiContext/ApiContext'
import WatchingLog from '../WatchingLog/WatchingLog'


class EditShowDetails extends React.Component {
  static contextType = ApiContext
  


    constructor(props) {
     

        super(props);
        this.state = {
          id: this.props.id,
           name: {
                value: this.props.name,
                touched: false
              },
           
            airDate:    {
                value: this.props.airDate,
                touched: false
              },
              startDate: {
                value: this.props.startDate,
                touched: false
              },
              genre: {
                value: this.props.genre,
                touched: false
              },
              seasons: {
                value: this.props.seasons,
                touched: false
              },
           
              description: {
                value: this.props.description,
                touched: false
              },
           
              language: {
                value: this.props.language,
                touched: false
              },

              finish: this.props.finish,
              watching: this.props.watching,
              toWatch: this.props.toWatch,
              showSubmitted:false,
              currentSeason: this.props.currentSeason

             
          };
      }

      

     

      updateName(name) {
        this.setState({name: {value:name,touched:true}});
      }

      updateAirDate(airDate) {
        this.setState({airDate: {value:airDate,touched:true}});
      }

      updateStartDate(startDate) {
        this.setState({startDate: {value:startDate,touched:true}});
      }

      updateGenre(genre) {
        this.setState({genre: {value:genre,touched:true}});
      }

      updateSeasons(seasons) {
        this.setState({seasons:{value:seasons,touched:true}});
      }

      updateDescription(description) {
        this.setState({description: {value:description,touched:true}});
      }

      updateLanguage(language) {
        this.setState({language: {value:language,touched:true}});
      }
   
    render(){
     //throw "test";
        
        return(
          <div>
<form className="folder" onSubmit = {(event)=>{
event.preventDefault();


this.setState({showSubmitted:true})
console.log("showdetails submit", this.context.shows)
let show = {
  id:this.state.id,
  name: this.state.name.value,
  airDate: this.state.airDate.value,
  startDate: this.state.startDate.value,
  genre: this.state.genre.value,
  seasons: this.state.seasons.value,
  description: this.state.description.value,
  language: this.state.language.value,
  finish: this.props.finish,
              watching: this.props.watching,
              toWatch: this.props.toWatch,

}
console.log("editing "+ show.id)
console.log("editing name "+ show.name)
this.context.updateShow(show,show.id)
console.log("showdetails submit end", this.context.shows)
console.log(this.state.showSubmitted)
this.setState({
id:show.id

})
console.log("other id " +this.state.id)



}}> 
<h2>Register</h2>
       <div className="show__hint">* required field</div>  
       <div className="form-group">
         <label htmlFor="name">Name *</label>
         <input type="text" className="folder__control"
           name="name" id="name" value = {this.state.name.value} onChange={e => this.updateName(e.target.value)} />
           
           <label htmlFor="name">Air Date *</label>
<input type="text" className="folder__control"
           name="airDate" id="airDate"  value = {this.state.airDate.value} onChange={e => this.updateAirDate(e.target.value)} />
           
           <label htmlFor="name">Start Date *</label>
<input type="text" className="folder__control"
           name="startDate" id="startDate" value = {this.state.startDate.value} onChange={e => this.updateStartDate(e.target.value)} />
           
           <label htmlFor="name">Genre *</label>
<input type="text" className="folder__control"
           name="genre" id="genre"  value = {this.state.genre.value} onChange={e => this.updateGenre(e.target.value)} />
            
            <label htmlFor="name">Number Of Seasons *</label>
<input type="text" className="folder__control"
           name="seasons" id="seasons" value = {this.state.seasons.value} onChange={e => this.updateSeasons(e.target.value)} />
            
            <label htmlFor="name">Description *</label>
<input type="text" className="folder__control"
           name="description" id="description" value = {this.state.description.value} onChange={e => this.updateDescription(e.target.value)} />

 <label htmlFor="name">Language *</label>
<input type="text" className="folder__control"
           name="language" id="language" value = {this.state.language.value} onChange={e => this.updateLanguage(e.target.value)} />
            

        </div>
        <div className="folder__button__group">
        <button type="reset" className="folder__button">
            Cancel
        </button>
        <button type="submit" className="folder__button" >
            Save
        </button>
       
       </div>
</form>

</div>
)
    }
}




export default EditShowDetails;