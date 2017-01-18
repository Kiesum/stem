import React from 'react';
import Trunk from './Trunk.js';
import AddTrunk from './AddTrunk.js';

class Home extends React.Component {
  render() {
    return (
      <div className='alert alert-info'>
        <h1>Hello from Home Component</h1>
        <Trunk />
        <AddTrunk />
      </div>
    );
  }
}

export default Home;