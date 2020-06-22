import React, { useState } from "react";
import ApiContext from '../ApiContext/ApiContext'
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

export default class Login extends React.Component {
    static contextType = ApiContext;
    constructor(props) {
        super(props);
        this.state = {
            name: '',
         password:'',}
}

   validateForm(event) {
 
    event.preventDefault();
     
 if( this.state.name=== 'show'&& this.state.password==='watcher' ){
   
     this.context.setLoggedIn()
 }
  }

  handleName(name) {
      /*
    event.preventDefault();
    this.context.setUserName( name );
    */
   this.setState({name:name  });
  }

  handlePassword(pswd) {
      /*
    event.preventDefault();
    this.context.setPassword(pswd );*/
    this.setState({ password:pswd  });
  }


  handleSubmit(event) {
    event.preventDefault();
  }

  render(){
  return (
    <div className="Login">
      <form>
      <label htmlFor="userName">User Name *</label>
            <input type="text" className="folder__control"
              name="userName" id="userName" value={this.state.userName}  onChange={e => this.handleName(e.target.value)} />
            <label htmlFor="password">Password*</label>
            <input type="text" className="folder__control"
              name="password" id="password" value={this.state.password}  onChange={e => this.handlePassword(e.target.value)} />

        <button type="submit" /*disabled={!this.validateForm()}*/onClick={event =>this.validateForm(event)} className="LoginButton" >
              Log In
        </button>
      </form>
    </div>
  );
}}
