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
import ApiContext from '../ApiContext/ApiContext'
//import './App.css';

class App extends Component {
    state = {
        shows: [],
       
    };

    componentDidMount() {
        /*
        Promise.all([
            fetch(`${config.API_ENDPOINT}/notes`),
            fetch(`${config.API_ENDPOINT}/folders`)
        ])
            .then(([notesRes, foldersRes]) => {
                if (!notesRes.ok)
                    return notesRes.json().then(e => Promise.reject(e));
                if (!foldersRes.ok){
                    return foldersRes.json().then(e => Promise.reject(e));
                }
                
                return Promise.all([notesRes.json(), foldersRes.json()]);
            })
            .then(([notes, folders]) => {
                console.log(folders);
                console.log(notes);
                this.setState({notes, folders});
            })
            .catch(error => {
                console.error({error});
            });*/
    }

    
    handleDeleteShow = showId => {
        this.setState({
            shows: this.state.shows.filter(show => show.id != showId)
        });

        console.log("delete",this.state.shows)
    };

    handleDeleteFinishedShow = showId => {
        this.setState({
            finishedShows: this.state.finishedShow.filter(show => show.id != showId)
        });
    };

 

    handleAddShow = (showObject) => {
        if(this.state.shows.find((show)=>{
            console.log("showid and show "+ show.id+ " "+ showObject)
                return show.id===showObject.id
        })){
         return this.handleUpdateShow(showObject,showObject.id)
        }


        console.log("showOject " + showObject.id)
        this.state.shows.push(showObject);
        this.setState({
            shows: this.state.shows
        });
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
       return  show.id === id; 
          }); 
      
    };
    
    handleGetFinishedShow = (id) => {
    
       return this.state.finishedShows.find(function(show) { 
            return show.id === id; 
          }); 
    };
    
    handleUpdateShow = (showObject,showId) => {
       let show= this.state.shows.find(show => show.id === showId)
       for(let key in show)
       {
            show[key]=showObject[key] }

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
                       />
                 
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
                    <nav className="App__nav">{this.renderNavRoutes()}</nav>
                 
                    <main className="App__main">{this.renderMainRoutes()}</main>
                </div>
            </ApiContext.Provider>
           
        );
    }
}

export default App;
