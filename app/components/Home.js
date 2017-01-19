import React from 'react';
import Trunk from './Trunk.js';
import AddTrunk from './AddTrunk.js';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Trunk />
        <AddTrunk />
      </div>
    );
  }
}

export default Home;