import React from 'react';
import TrunkShow from './TrunkShow.js';
import AddBranch from './AddBranch.js';

class TrunkComplete extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <TrunkShow props={this.props} />
        <AddBranch props={this.props} />
      </div>
    );
  }
}

export default TrunkComplete;

