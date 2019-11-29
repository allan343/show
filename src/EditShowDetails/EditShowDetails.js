import React from 'react';


import ApiContext from '../ApiContext/ApiContext'



class EditShowDetails extends React.Component {
  static contextType = ApiContext
  


    constructor(props) {
     

        super(props);
        this.state = {
          id: this.props.id,
           showname: {
                value: this.props.showname,
                touched: false
              },
           
            finishdate:"",
              startdate: "",
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

              finish: this.props.finish,
              watching: this.props.watching,
              towatch: this.props.toWatch,
              showSubmitted:false,
              currentseason: this.props.currentseason

             
          };
      }

      

     

      updateName(showname) {
        this.setState({showname: {value:showname,touched:true}});
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
      
      cancelHandle = (e) =>
      {
          e.preventDefault()

          this.props.history.goBack()
      }

      deleteHandle = (e) =>
      {
          e.preventDefault()
          this.context.deleteShow(this.state.id)
          if(this.props.finish)
          {
          this.props.history.push("/finish")
          }
         
          else if(this.props.watching)
            {
            this.props.history.push("/watching")
            }
            else{
              this.props.history.push("/")
            }

          
      }

    render(){
     //throw "test";
        
        return(
          <div id="edit-details">
<form className="folder" onSubmit = {(event)=>{
event.preventDefault();


this.setState({showSubmitted:true})
console.log("showdetails submit", this.context.shows)
let show = {
  id:this.state.id,
  showname: this.state.showname.value,
  finishdate: this.state.finishdate,
  startdate: this.state.startdate,
  genre: this.state.genre.value,
  seasons: this.state.seasons.value,
  showdescription: this.state.showdescription.value,
  showlanguage: this.state.showlanguage.value,
  finish: this.props.finish,
              watching: this.props.watching,
              towatch: this.props.toWatch,

}
console.log("editing "+ show.id)
console.log("editing name "+ show.showname)
this.context.updateShow(show,show.id)
console.log("showdetails submit end", this.context.shows)
console.log(this.state.showSubmitted)
this.setState({
id:show.id

})
console.log("other id " +this.state.id)

this.props.history.goBack()

}}> 
<h2>Register</h2>
       <div className="show__hint">* required field</div>  
       <div className="form-group">
       <button type="reset" className="folder__button" onClick={this.cancelHandle}>
            Cancel
        </button>
        <button type="submit" className="folder__button" >
            Done
        </button>
         <label htmlFor="name">Name *</label>
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
             <button type="reset" className="folder__button" onClick={this.deleteHandle}>
            Delete
        </button>

        </div>
        <div className="folder__button__group">
     
       
       </div>
</form>

</div>
)
    }
}




export default EditShowDetails;