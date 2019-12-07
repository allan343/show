import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Show from '../Show/show';
import ShowDetails from '../ShowDetails/ShowDetails';
import EditShowDetails from '../EditShowDetails/EditShowDetails';
import WatchingLog from '../WatchingLog/WatchingLog';
import ToWatch from '../ToWatch/ToWatch';
import Finished from '../Finished/Finished';
import Watching from '../Watching/Watching';
import ApiContext from '../ApiContext/ApiContext';
import config from '../config';

class App extends Component {
    state = {
        //array that holds all shows
        shows: [],
    };

    componentDidMount() {
        //fetches the shows from my endpoint and placed them in my array in state
        fetch(`${config.API_ENDPOINT}/shows`)
            .then((showsRes) => {
                if (!showsRes.ok)
                    return showsRes.json().then(e => Promise.reject(e));
                return (showsRes.json());
            })
            .then((shows) => {
                this.setState({ shows: shows });
            })
            .catch(error => {
            });
    }
    //deletes a show from the backend
    // deletes a show from the front end in the state array holding all shows
    handleDeleteShow = showId => {
        fetch(`${config.API_ENDPOINT}/shows/${showId}`, { method: "DELETE" })
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    shows: this.state.shows.filter(show => show.id != showId)
                });
            })
    };

    //adds a showObject to backend based on id
    // adds a show object to front end based on id
    handleAddShow = (showObject, newId) => {
 
       if (this.state.shows.find((show) => {
            return show.id === showObject.id
        })) {
            return this.handleUpdateShow(showObject, showObject.id)
        }

        fetch(`${config.API_ENDPOINT}/shows`, { headers: { 'content-type': 'application/json' }, method: "POST", body: JSON.stringify(showObject) })
            .then(response => response.json())
            .then(responseJson => {

                if (responseJson.id) {
                    let newid = responseJson.id
                    this.state.shows.push(responseJson);
                    this.setState({
                        shows: this.state.shows
                    });
                    newId(newid)
                }
            })
    };

    //gets the show from shows array in state
    handleGetShow = (id) => {
        return this.state.shows.find(function (show) {
            return show.id == id;
        });
    };

    //updates the show in backend
    //updates the show in frontend
    handleUpdateShow = (showObject, showId) => {

        fetch(`${config.API_ENDPOINT}/shows/${showId}`, { headers: { 'content-type': 'application/json' }, method: "PATCH", body: JSON.stringify(showObject) })
            .then(response => response.json())
            .then(responseJson => {

                if (responseJson.id && responseJson.showname) {
                    let show = this.state.shows.find(show => show.id == showId)
                    let covertedShow = (responseJson)
                    for (let key in show) {
                        show[key] = responseJson[key]
                    }
                    this.setState({
                        shows: this.state.shows
                    });
                }
            })
    };

    //various routes for my app
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
                    (routeProps) => {
                        return <EditShowDetails {...this.handleGetShow(routeProps.match.params.showId)}  {...routeProps}>
                        </EditShowDetails>
                    }} />

                <Route exact path="/add-show" render={
                    (routeProps) => {
                        return <ShowDetails {...routeProps}>
                        </ShowDetails>
                    }} />
            </>
        );
    }

     //various routes for my app
    renderMainRoutes() {

        return (
            <>
                {<Route
                    key={'/WatchingLog/:showId'}
                    exact path={'/WatchingLog/:showId'}
                    component={WatchingLog}
                />}

                <Route exact path="/WatchingLog/:showId" render={
                    (routeProps) => {
                        return <WatchingLog history={routeProps.history} id={routeProps.match.params.showId}>
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
        //my context methods
        const value = {
            shows: this.state.shows,
            addShow: this.handleAddShow,
            deleteShow: this.handleDeleteShow,
            getShow: this.handleGetShow,
            updateShow: this.handleUpdateShow,
        };
        return (

            <ApiContext.Provider value={value}>
                <div className="App">
                    <header className="App__header">
                    </header>
                    <div >{this.renderNavRoutes()}</div>
                  <div >{this.renderMainRoutes()}</div>
                </div>
            </ApiContext.Provider>
        );
    }
}

export default App;