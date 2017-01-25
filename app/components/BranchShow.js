import React from 'react';
import {Link} from 'react-router';
import BranchShowStore from '../stores/BranchShowStore';
import BranchShowActions from '../actions/BranchShowActions';
import AddBranch from './AddBranch';

class TrunkShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = BranchShowStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    BranchShowStore.listen(this.onChange);
    BranchShowActions.getBranchShow(this.props.params.id);
  }

  componentWillUnmount() {
    BranchShowStore.unlisten(this.onChange);
  }

  componentDidUpdate(prevProps) {
  }

  onChange(state) {
    this.setState(state);
  }

  componentWillReceiveProps(nextProps) {
    BranchShowActions.getBranchShow(nextProps.params.id);
  }

  onClick() {
    if (this.state.showAddBranch === false) {
      this.setState({ showAddBranch: true });
    } else if (this.state.showAddBranch === true) {
      this.setState({ showAddBranch: false})
    }
  }

  render() {
    console.log(this.state)
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