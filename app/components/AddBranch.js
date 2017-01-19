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
        <form onSubmit={this.handleSubmit.bind(this)} className='add-branch-form'>
          <div className={this.state.nameValidationState}>
            <span className='help-block'>{this.state.helpBlock}</span>
            <input type='text' placeholder='title' className='title-input' ref='titleTextField' value={this.state.title}
                   onChange={AddBranchActions.updateTitle} autoFocus/>
          </div>
          <div className={this.state.bodyValidationState}>
            <textarea value={this.state.body} placeholder='write anything.' className='body-input' onChange={AddBranchActions.updateBody} />
          </div>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form> 
      </div>
      )
  }

}

export default AddBranch;
