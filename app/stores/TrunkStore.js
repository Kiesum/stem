import alt from '../alt';
import TrunkActions from '../actions/TrunkActions';

class TrunkStore {
  constructor() {
    this.bindActions(TrunkActions);
    this.trunks = [];
  }

  onGetTrunksSuccess(data) {
    this.trunks = data;
  }

  onGetTrunksFail(errorMessage) {
    toastr.error(errorMessage);
  }

}

export default alt.createStore(TrunkStore);
