import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { AuthProvider } from './Components/contexts/AuthContext';
import "./App.css"

import GoogleMapContainer from './Components/GoogleMapContainer';
import Login from "./Components/Login"
import Signup from "./Components/Signup"

const App = () => {

    return (
      <div className="App">
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={GoogleMapContainer}/>
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={Signup} />
              {/* add private route for user's personal data */}
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    );
  }


export default App;
