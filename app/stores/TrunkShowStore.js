import alt from '../alt';
import TrunkShowActions from '../actions/TrunkShowActions';

class TrunkShowStore {
  constructor() {
    this.bindActions(TrunkShowActions);
    this.trunkId = 0;
    this.title = 'TBD';
    this.body = 'TBD';
  }

  onGetTrunkShowSuccess(data) {
    this.title = data.title;
    this.body = data.body;
  }

  onGetTrunkShowFail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }

}

export default alt.createStore(TrunkShowStore);