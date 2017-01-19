import React from 'react';
import AddBranchStore from '../stores/AddBranchStore';
import AddBranchActions from '../actions/AddBranchActions';
import TrunkShowActions from '../actions/TrunkShowActions';
import BranchShowActions from '../actions/BranchShowActions';

class AddBranch extends React.Component {
  constructor(props) {
    super(props);
    this.state = AddBranchStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AddBranchStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AddBranchStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    var parent = this.props.props.params.id;
    var title = this.state.title.trim();
    var body = this.state.body;

    if (!title) {
      AddBranchActions.invalidTitle();
    }

    if (!body) {
      AddBranchActions.invalidBody();
    }

    if (title && body) {
      AddBranchActions.addBranch(parent, title, body);
      if (this.props.props.route.path === "/trunks/:id") {
        TrunkShowActions.getTrunkShow(this.props.props.params.id);
      } else {
        BranchShowActions.getBranchShow(this.props.props.params.id);
      }

    }

  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className={'form-group ' + this.state.nameValidationState}>
            <label className='control-label'>Title</label>
            <input type='text' className='form-control' ref='titleTextField' value={this.state.title}
                   onChange={AddBranchActions.updateTitle} autoFocus/>
            <span className='help-block'>{this.state.helpBlock}</span>
          </div>
          <div className={'form-group ' + this.state.bodyValidationState}>
            <div className='radio radio-inline'>
              <input type='text' className='form-control' ref='bodyTextField' value={this.state.body}
                     onChange={AddBranchActions.updateBody}/>
            </div>
          </div>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form> 
      </div>
      )
  }

}

export default AddBranch;
