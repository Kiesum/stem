import React from 'react';
import AddTrunkStore from '../stores/AddTrunkStore';
import AddTrunkActions from '../actions/AddTrunkActions';

class AddTrunk extends React.Component {
  constructor(props) {
    super(props);
    this.state = AddTrunkStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AddTrunkStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AddTrunkStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    var title = this.state.title.trim();
    var body = this.state.body;

    if (!title) {
      AddTrunkActions.invalidTitle();
      this.refs.titleTextField.getDOMNode().focus();
    }

    if (!body) {
      AddTrunkActions.invalidBody();
    }

    if (title && body) {
      AddTrunkActions.addTrunk(title, body);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className={'form-group ' + this.state.nameValidationState}>
            <label className='control-label'>Title</label>
            <input type='text' className='form-control' ref='titleTextField' value={this.state.title}
                   onChange={AddTrunkActions.updateTitle} autoFocus/>
            <span className='help-block'>{this.state.helpBlock}</span>
          </div>
          <div className={'form-group ' + this.state.bodyValidationState}>
            <div className='radio radio-inline'>
              <input type='text' className='form-control' ref='bodyTextField' value={this.state.body}
                     onChange={AddTrunkActions.updateBody}/>
            </div>
          </div>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form> 
      </div>
      )
  }

}

export default AddTrunk;