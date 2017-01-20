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
    var css = "";
    this.setState({"toggleBackgroundCover":css});
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

  onClick(event) {
    var css = "";
    this.setState({"toggleBackgroundCover":css});
  }

  onFocus() {
    var css = "show";
    this.setState({"toggleBackgroundCover":css});
  }

  render() {
    return (
      <div>
        <div className={'background-cover ' + this.state.toggleBackgroundCover} onClick={this.onClick.bind(this)}></div>
        <form onSubmit={this.handleSubmit.bind(this)} onFocus={this.onFocus.bind(this)} className='add-branch-form'>
          <span className={'clear-btn ' + this.state.toggleBackgroundCover} onClick={this.onClick.bind(this)}>X</span>
          <div className={this.state.nameValidationState}>
            <span className='help-block'>{this.state.helpBlock}</span>
            <input type='text' placeholder='title' className='title-input' ref='titleTextField' value={this.state.title}
                   onChange={AddTrunkActions.updateTitle} />
          </div>
          <div className={this.state.bodyValidationState}>
            <textarea value={this.state.body} placeholder='write anything.' className='body-input' onChange={AddTrunkActions.updateBody} />
          </div>
          <div className='btn-container'>
            <button type='submit' className='submit-btn'>Submit</button>
          </div>
        </form> 
      </div>
      )
  }

}

export default AddTrunk;