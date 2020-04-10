import React from 'react';
import Home from './Home';
import Video from './Video';
import Nav from './NavBar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/video/:videoId">
                        <Video />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;