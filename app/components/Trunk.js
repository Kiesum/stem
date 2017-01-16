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
    // var trunkArray = this.state.trunks.map((trunk, index)  =>  {
    //   return (
    //     <div key={trunk._id} >
    //       <div>
    //         <div className='caption text-center'>
    //           <ul className='list-inline'>
    //             <li>number 1</li>
    //             <li><strong>Race:</strong> {trunk.title}</li>
    //             <li><strong>Bloodline:</strong> {trunk.body}</li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // });

    // console.log(trunkArray)
    // console.log("second" + this.state.trunks);

    return (
      <div className='container'>
        <h2 className='text-center'>Trunks</h2>
        <div className='row'>
          { this.state.trunks.map((trunk, index)  =>  {
            return (
              <div key={trunk._id} >
                <div>
                  <div className='caption text-center'>
                    <Link to={'/trunks/' + trunk._id}>See branches</Link>
                    <ul className='list-inline'>
                      <li><h3>{trunk.title}</h3></li>
                      <li>{trunk.body}</li>
                    </ul>
                  </div>
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