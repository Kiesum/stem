import alt from '../alt';
import AddBranchActions from '../actions/AddBranchActions';

class AddBranchStore {
  constructor() {
    this.bindActions(AddBranchActions);
    this.parent = '';
    this.title = '';
    this.body = '';
    this.helpBlock = '';
    this.titleValidationState = '';
    this.bodyValidationState = '';
  }
  onAddBranchSuccess(successMessage) {
    this.titleValidationState = 'has-success';
    this.helpBlock = successMessage;
  }

  onAddBranchFail(errorMessage) {
    this.titleValidationState = 'has-error';
    this.helpBlock = errorMessage;
  }

  onUpdateParent(event) {
    this.parent = event.target.value;
  }

  onUpdateTitle(event) {
    this.title = event.target.value;
    this.titleValidationState = '';
    this.helpBlock = '';
  }

  onUpdateBody(event) {
    this.body = event.target.value;
    this.bodyValidationState = '';
  }

  onInvalidTitle() {
    this.titleValidationState = 'has-error';
    this.helpBlock = 'Please enter a title.';
  }

  onInvalidBody() {
    this.bodyValidationState = 'has-error';
  }

}

export default alt.createStore(AddBranchStore);
