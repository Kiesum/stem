import React from 'react';
import {Link} from 'react-router';
import TrunkStore from '../stores/TrunkStore'
import TrunkActions from '../actions/TrunkActions';
import {first, without, findWhere} from 'underscore';

class Trunk extends React.Component {

  constructor(props) {
    super(props);
    this.state = TrunkStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    TrunkStore.listen(this.onChange);
    TrunkActions.getTrunks();
  }

  componentWillUnmount() {
    TrunkStore.unlisten(this.onChange);
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
          { this.state.trunks.map((trunk, index)  =>  {
            return (
              <div key={trunk._id} >
                <div className='post-container'>
                  <h4 className="title">{trunk.title}</h4>
                  <div className="body">{trunk.body}</div>
                  <Link to={'/trunks/' + trunk._id} className="branches-link">See branches</Link>
                  <div className='avatar'></div>
                  <div className='branches'>x<span className='badge'>15</span></div>
                  <div className='stars'>&#9733;<span className='badge'>10</span></div>
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

export default Trunk;