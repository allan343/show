import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import ShowListNav from '../ShowListNav/ShowListNav';
import Show from '../Show/show';
import ShowDetails from '../ShowDetails/ShowDetails';
import EditShowDetails from '../EditShowDetails/EditShowDetails';
import WatchingLog from '../WatchingLog/WatchingLog';
import FooterNav from '../FooterNav/FooterNav';
import ToWatch from '../ToWatch/ToWatch';
import Finished from '../Finished/Finished';
import Watching from '../Watching/Watching';
import ApiContext from '../ApiContext/ApiContext';
import config from '../config';
//import './App.css';

class App extends Component {
    state = {
        shows: [],
       
    };

    componentDidMount() {
        
      
            fetch(`${config.API_ENDPOINT}/shows`)
           
        
            .then((showsRes) => {
                if (!showsRes.ok)
                    return showsRes.json().then(e => Promise.reject(e));
              
                
                return (showsRes.json());
            })
            .then((shows) => {
                shows=shows.map((item)=>this.toClientNames(item))
                console.log(shows);
                this.setState({shows:shows});
            })
            .catch(error => {
                console.error({error});
            });
    }

    
    handleDeleteShow = showId => {
        this.setState({
            shows: this.state.shows.filter(show => show.id != showId)
        });
    };

    handleDeleteFinishedShow = showId => {
        this.setState({
            finishedShows: this.state.finishedShow.filter(show => show.id != showId)
        });
    };
    toServerNames(obj)
    {
      obj.showname =obj.name
      delete obj.name
      obj.showdescription =obj.description
      delete obj.description
      obj.showlanguage =obj.language
      delete obj.language
      obj.startdate =obj.startDate
      delete obj.startDate
      obj.finishdate =obj.finishDate
      delete obj.finishDate
      obj.showdescription =obj.description
      delete obj.description
      obj.showlanguage =obj.language
      delete obj.language
      obj.towatch =obj.toWatch
      delete obj.toWatch

        return obj

    }
 
    toClientNames(obj)
    {
        obj.name =obj.showname
        delete obj.showname
        obj.description =obj.showdescription
        delete obj.showdescription
        obj.language =obj.showlanguage
        delete obj.showlanguage
        obj.startDate =obj.startdate
        delete obj.startdate
        obj.finishDate =obj.finishdate
        delete obj.finishdate
        obj.description =obj.showdescription
        delete obj.showdescription
        obj.language =obj.showlanguage
        delete obj.showlanguage
        obj.toWatch =obj.towatch
        delete obj.towatch
        return obj
  

    }

    handleAddShow = (showObject,newId) => {

    
          

        if(this.state.shows.find((show)=>{
            console.log("showid and show "+ show.id+ " "+ showObject)
                return show.id===showObject.id
        })){
         return this.handleUpdateShow(showObject,showObject.id)
        }


    

       
        fetch(`${config.API_ENDPOINT}/shows`,{headers:{'content-type': 'application/json'},method:"POST",body:JSON.stringify(this.toServerNames(showObject))}) 
        .then(response => response.json())
        .then(responseJson => {
         
          if(responseJson.id){
              let newid = responseJson.id
            console.log("showOject " + newid)
            this.state.shows.push(this.toClientNames(responseJson));
            this.setState({
                shows: this.state.shows
            });
            newId(newid)
          }

        })
    };

    handleAddFinishedShow = (id) => {
      let show = this.handleGetShow(id)
        this.handleDeleteShow(id)
        this.state.finishedShows.push(show);
        this.setState({
            shows: this.state.shows,
            finishedShows: this.state.shows
        });
    };

    handleGetShow = (id) => {
    console.log("id is " +id)
      return  this.state.shows.find(function(show) { 
       return  show.id == id; 
          }); 
      
    };
    
    handleGetFinishedShow = (id) => {
    
       return this.state.finishedShows.find(function(show) { 
            return show.id === id; 
          }); 
    };
    
    handleUpdateShow = (showObject,showId) => {
     /*  let show= this.state.shows.find(show => show.id === showId)
       for(let key in show)
       {
            show[key]=showObject[key] }*/

            fetch(`${config.API_ENDPOINT}/shows/${showId}`,{headers:{'content-type': 'application/json'},method:"PATCH",body:JSON.stringify(this.toServerNames(showObject))}) 
            .then(response => response.json())
            .then(responseJson => {
             
              if(responseJson.id && responseJson.name){
                console.log("showOject " + responseJson)
                let show= this.state.shows.find(show => show.id === showId)
                responseJson= this.toClientNames(responseJson)
                for(let key in show)
                {
                     show[key]=responseJson[key] }
                this.setState({
                    shows: this.state.shows
                });
              }
    
            })


    };

    handleUpdateFinishedShow = (showObject,showId) => {
        let show= this.state.finishedShows.find(show => show.id === showId)
        for(let key in show)
        {
             show[key]=showObject[key] }
 
     };
    
 
 // to watch, finished, organize
    renderNavRoutes() {
      
            return (
                <>
              
                    
              <Route
                            
                            key={'/'}
                            exact path={'/'}
                            component={ToWatch}
                        />
    
    <Route
                            
                            key={'/finish'}
                            exact path={'/finish'}
                            component={Finished}
                        />
    <Route
                            
                            key={'/watching'}
                            exact path={'/watching'}
                            component={Watching}
                        />
    
                        <Route
                            
                            key={'/show/:showId'}
                            exact path={'/show/:showId'}
                            component={Show}
                       />
                       
                            <Route exact path="/ShowDetails/Edit/:showId" render={
                        (routeProps)=>{return <EditShowDetails {...this.handleGetShow(routeProps.match.params.showId)}  {...routeProps}>
                            </EditShowDetails>
                        }} />

                      <Route exact path="/add-show" render={
                        (routeProps)=>{return <ShowDetails {...routeProps}>
                            </ShowDetails>
                        }} />
                    
                  {/* <Route
                            
                            key={'/add-show'}
                            exact path={'/add-show'}
                  component={ShowDetails}*/}
                       
                 
                </>
            );
        
    }

    renderMainRoutes() {

        return (
            <>
          
      {/* <Route
                            
        key={'/WatchingLog/:showId'}
        exact path={'/WatchingLog/:showId'}
        component={WatchingLog}
      />*/}

<Route exact path="/WatchingLog/:showId" render={
                        (routeProps)=>{return <WatchingLog history = {routeProps.history} id={routeProps.match.params.showId}>
                            </WatchingLog>
                        }} />

    <Route
                            
    key={'/ShowDetails/:showId'}
    exact path={'/ShowDetails/:showId'}
    component={ShowDetails}
/>
</>
            );
    }

    render() {
        const value = {
            shows: this.state.shows,
            finishedShows: this.state.finishedShows,
            addShow: this.handleAddShow,
            addFinishedShow: this.handleAddFinishedShow,
            deleteShow: this.handleDeleteShow,
            deleteFinishedShow: this.handleDeleteFinishedShow,
            getShow: this.handleGetShow,
            getFinishedShow: this.handleGetFinishedShow,
            updateShow: this.handleUpdateShow,
            updateFinishedShow: this.handleUpdateFinishedShow
        };
        return (

            <ApiContext.Provider value={value}>
                <div className="App">
                <header className="App__header">
                        <h1>
                            <Link to="/">Show App</Link>{' '}
                          
                        </h1>
                    </header>
                    <div >{this.renderNavRoutes()}</div>
                 
                    <div >{this.renderMainRoutes()}</div>
                </div>
            </ApiContext.Provider>
           
        );
    }
}

export default App;