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

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <h4>{this.state.body}</h4>
        <div>
          <h2 className='text-center'>Branches</h2>
          <div>
            { this.state.branches.map((branch, index)  =>  {
              return (
                <div key={branch._id} >
                  <div className='post-container'>
                    <h3 className='title'>{branch.title}</h3>
                    <div className='body'>{branch.body}</div>
                    <Link to={'/branches/' + branch._id} className='branches-link'>See branches</Link>
                  </div>
                </div>
              );
              })
            }
          </div>
        </div>
        <AddBranch props={this.props} />
      </div>
    );
  }
}

export default TrunkShow;