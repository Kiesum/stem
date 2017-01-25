import React from 'react';
import {Link} from 'react-router';
import TrunkShowStore from '../stores/TrunkShowStore';
import TrunkShowActions from '../actions/TrunkShowActions'
import AddBranch from './AddBranch';

class TrunkShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = TrunkShowStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    TrunkShowStore.listen(this.onChange);
    TrunkShowActions.getTrunkShow(this.props.params.id);
  }

  componentWillUnmount() {
    TrunkShowStore.unlisten(this.onChange);
  }

  componentDidUpdate(prevProps) {
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
        <div className='post-container'>
          <div className="body" dangerouslySetInnerHTML={{__html: this.state.body}}></div>
          <button onClick={this.onClick.bind(this)} className="add-branch-toggle">Add Branch</button>
        </div>
        { this.state.showAddBranch ? <AddBranch props={this.props} /> : null }
        <div>
          <div>
            { this.state.branches.map((branch, index)  =>  {
              return (
                <div key={branch._id} >
                  <div className='post-container'>
                    <div className="body" dangerouslySetInnerHTML={{__html: branch.body}}></div>
                    <Link to={'/branches/' + branch._id} className='branches-link'>See branches</Link>
                  </div>
                </div>
              );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default TrunkShow;