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



  render() {
    console.log(this.state)
    return (
      <div>
        <h2><strong>{this.state.title}</strong></h2>
        <h4>{this.state.body}</h4>
        <div className='container'>
          <h2 className='text-center'>Branches</h2>
          <div>
            { this.state.branches.map((branch, index)  =>  {
              return (
                <div key={branch._id} >               
                  <div className='post-container'>
                    <h4 className='title'>{branch.title}</h4>
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