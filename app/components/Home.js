import React from 'react';
import HomeStore from '../stores/HomeStore'
import Trunk from './Trunk';
import AddTrunk from './AddTrunk';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(state);
  }

  onClick() {
    if (this.state.showAddBranch === false) {
      this.setState({ showAddBranch: true });
    } else if (this.state.showAddBranch === true) {
      this.setState({ showAddBranch: false})
    }
  }

  render() {
    return (
      <div>
        <AddTrunk />
        <Trunk />
      </div>
    );
  }
}

export default Home;