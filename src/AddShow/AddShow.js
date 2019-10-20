import React from 'react';


import ApiContext from '../ApiContext/ApiContext'

class AddShow extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
           name: {
                value: '',
                touched: false
              },
           
            airDate:    {
                value: '',
                touched: false
              },
              startDate: {
                value: '',
                touched: false
              },
              genre: {
                value: '',
                touched: false
              },
              seasons: {
                value: '',
                touched: false
              },
           
              description: {
                value: '',
                touched: false
              },
           
              language: {
                value: '',
                touched: false
              }
           
          };
      }

      static contextType = ApiContext;

      updateName(name) {
        this.setState({name: name});
      }

      updateAirDate(airDate) {
        this.setState({airDate: airDate});
      }

      updateStartDate(startDate) {
        this.setState({startDate: startDate});
      }

      updateGenre(genre) {
        this.setState({genre: genre});
      }

      updateSeasons(seasons) {
        this.setState({seasons: seasons});
      }

      updateDescription(description) {
        this.setState({description: description});
      }
   
    render(){
     //throw "test";
        
        return(
<form className="folder" onSubmit = {(event)=>{
event.preventDefault();
console.log(event.target.name.value);


fetch(`https://evening-eyrie-15844.herokuapp.com/folders`,{headers:{'content-type': 'application/json'},method:"POST",body:JSON.stringify({name:event.target.name.value})}) 
.then(response => response.json())
.then(responseJson => {
  console.log("folder reaching");
  if(responseJson.id && responseJson.name){
    console.log("addingfolder");
    this.context.addFolder(responseJson.name,responseJson.id);
    console.log("addedfolder");
    this.props.history.goBack()
  }
  
  
  this.setState({
  error: null
       });
      }
    ).catch(err => {
      this.setState({
        error: err.message
      });
    });

  



}}> 
<h2>Register</h2>
       <div className="show__hint">* required field</div>  
       <div className="form-group">
         <label htmlFor="name">Name *</label>
         <input type="text" className="folder__control"
           name="name" id="name" onChange={e => this.updateName(e.target.value)} value ={this.state.name}/>
           

<input type="text" className="folder__control"
           name="airDate" id="airDate" onChange={e => this.updateAirDate(e.target.value)} />
           

<input type="text" className="folder__control"
           name="startDate" id="startDate" onChange={e => this.updateStartDate(e.target.value)} />
           
<input type="text" className="folder__control"
           name="genre" id="genre" onChange={e => this.updateGenre(e.target.value)} />
            

<input type="text" className="folder__control"
           name="seasons" id="seasons" onChange={e => this.updateSeasons(e.target.value)} />
            
<input type="text" className="folder__control"
           name="description" id="description" onChange={e => this.updateDescription(e.target.value)} />
            

        </div>
        <div className="folder__button__group">
        <button type="reset" className="folder__button">
            Cancel
        </button>
        <button type="submit" className="folder__button">
            Save
        </button>
       </div>
</form>

)
    }
}




export default AddShow;