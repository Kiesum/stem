import React from 'react';
import TrunkShowStore from '../stores/TrunkShowStore';
import TrunkShowActions from '../actions/TrunkShowActions'

class TrunkShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = TrunkShowStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    TrunkShowStore.listen(this.onChange);
    TrunkShowActions.getTrunkShow(this.props.props.params.id);
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
      </div>
    );
  }
}

export default TrunkShow;