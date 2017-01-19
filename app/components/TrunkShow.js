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
      <div className='container'>
        <h2><strong>{this.state.title}</strong></h2>
        <h4>{this.state.body}</h4>
        <div className='container'>
          <h2 className='text-center'>Branches</h2>
          <div className='row'>
            { this.state.branches.map((branch, index)  =>  {
              return (
                <div key={branch._id} >
                  <div>
                    <div className='caption text-center'>
                      <ul className='list-inline'>
                      <Link to={'/branches/' + branch._id}>See branches</Link>
                        <li><h3>{branch.title}</h3></li>
                        <li>{branch.body}</li>
                      </ul>
                    </div>
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