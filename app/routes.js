import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import AddTrunk from './components/AddTrunk';
import TrunkShow from './components/TrunkShow';
import TrunkComplete from './components/TrunkComplete';
import BranchShow from './components/BranchShow';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/trunks/:id' component={TrunkShow} />
    <Route path='/branches/:id' component={BranchShow} />
  </Route>
);