import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Index from './Components/App/App';
import Admin from './Components/Admin/Admin';

const AppContainer = () => (
  <Router>
    <div>
      <Route path="/" exact component={Index}/>
      <Route path="/admin" component={Admin}/>
    </div>
  </Router>
)

export default AppContainer;
