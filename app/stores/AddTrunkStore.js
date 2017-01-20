import alt from '../alt';
import AddTrunkActions from '../actions/AddTrunkActions';

class AddTrunkStore {
  constructor() {
    this.bindActions(AddTrunkActions);
    this.title = '';
    this.body = '';
    this.helpBlock = '';
    this.titleValidationState = '';
    this.bodyValidationState = '';
    this.toggleBackgroundCover = 'show';
  }

  onAddTrunkSuccess(successMessage) {
    this.titleValidationState = 'has-success';
    this.helpBlock = successMessage;
  }

  onAddTrunkFail(errorMessage) {
    this.titleValidationState = 'has-error';
    this.helpBlock = errorMessage;
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

export default alt.createStore(AddTrunkStore);