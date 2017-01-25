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

  onInvalidBody() {
    this.bodyValidationState = 'has-error';
  }

}

export default alt.createStore(AddBranchStore);
