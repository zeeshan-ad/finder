import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Home';
import Map from './Map';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Map' exact component={Map}/>
      </Switch>
    </Router>
  )
}

export default Routes;