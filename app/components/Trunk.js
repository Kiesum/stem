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
    var trunksArray = this.state.trunks.reverse();
    return (
      <div>
        <div>
          { trunksArray.map((trunk, index)  =>  {
            return (
              <div key={trunk._id} >
                <div className='post-container'>
                  <div className="body" dangerouslySetInnerHTML={{__html: trunk.body}}></div>
                  <Link to={'/trunks/' + trunk._id} className="branches-link">See branches</Link>
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

// <div className='avatar'></div>
// <div className='branches'>x<span className='badge'>15</span></div>
// <div className='stars'>&#9733;<span className='badge'>10</span></div>

export default Trunk;