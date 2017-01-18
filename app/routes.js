import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import AddTrunk from './components/AddTrunk';
import TrunkShow from './components/TrunkShow';
import TrunkComplete from './components/TrunkComplete';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/trunks/:id' component={TrunkComplete} />
  </Route>
);