import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import ShowListNav from '../ShowListNav/ShowListNav';
import Show from '../Show/show';
import AddShow from '../AddShow/AddShow';
import FooterNav from '../FooterNav/FooterNav';
import ToWatch from '../ToWatch/ToWatch';
import Finished from '../Finished/Finished';
//import Organize from '../Organize/Organize';
import ApiContext from '../ApiContext/ApiContext'
//import './App.css';

class App extends Component {
    state = {
        shows: [],
        watchingShows: [],
        finishedShows: []
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
            shows: this.state.show.filter(show => show.id != showId)
        });
    };

    handleDeleteFinishedShow = showId => {
        this.setState({
            finishedShows: this.state.finishedShow.filter(show => show.id != showId)
        });
    };

 

    handleAddShow = (showObject) => {
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
               
                    
                     
                
               
               {/* <Route path="/show/:showId" component={ShowPageNav} />*/}
               
                {/*<Route path="/add-note" component={NotePageNav} />*/}
            </>
        );
    }

    renderMainRoutes() {
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
                        
                        key={'/organize'}
                        exact path={'/'}
                      //  component={Organize}
                    />

                    <Route
                        
                        key={'/show/:showId'}
                        exact path={'/show/:showId'}
                        component={Show}
                    />
                  <Route path="/add-show" render={
                    (routeProps)=>{return <AddShow {...routeProps}>
                        </AddShow>
                    }} />
                
             
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
                    <nav className="App__nav">{this.renderNavRoutes()}</nav>
                    <header className="App__header">
                        <h1>
                            <Link to="/">Show App</Link>{' '}
                          
                        </h1>
                    </header>
                    <main className="App__main">{this.renderMainRoutes()}</main>
                </div>
            </ApiContext.Provider>
           
        );
    }
}

export default App;
