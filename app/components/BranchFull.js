import React from 'react';
import {Link} from 'react-router';
import BranchFullStore from '../stores/BranchFullStore'
import BranchFullActions from '../actions/BranchFullActions';

class BranchFull extends React.Component {

  constructor(props) {
    super(props);
    this.state = BranchFullStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    BranchFullStore.listen(this.onChange);
    BranchFullActions.getBranchFulls();
  }

  componentWillUnmount() {
    BranchFullStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleClick(trunk) {
  }

  render() {
    return (
      <div>
        <h2 className='text-center'>Trunks</h2>
        <div>
          { this.state.branchfulls.map((branchfull, index)  =>  {
            return (
              <div key={branchfull._id} >
                <div className='post-container'>
                  <div className="body" dangerouslySetInnerHTML={{__html: branchfull.data.data}}></div>
                </div>
              </div>
            );
            })
          }
        </div>
      </div>
    );
  } 
}

export default BranchFull;