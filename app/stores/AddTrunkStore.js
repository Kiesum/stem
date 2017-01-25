import alt from '../alt';
import AddTrunkActions from '../actions/AddTrunkActions';
import {Editor, EditorState, ContentState, RichUtils, convertFromRaw, convertToRaw, Immutable} from 'draft-js';

class AddTrunkStore {
  constructor() {
    this.bindActions(AddTrunkActions);
    this.body = '';
    this.helpBlock = '';
    this.toggleBackgroundCover = 'show';
  }

  onAddTrunkSuccess(successMessage) {
    this.helpBlock = successMessage;
  }

  onAddTrunkFail(errorMessage) {
    this.helpBlock = errorMessage;
  }

  onUpdateBody(event) {
    this.body = event.target.value;
    this.bodyValidationState = '';
  }

  onInvalidBody() {
    this.bodyValidationState = 'has-error';
  }
}

export default alt.createStore(AddTrunkStore);