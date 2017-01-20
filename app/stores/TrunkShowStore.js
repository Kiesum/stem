import alt from '../alt';
import TrunkShowActions from '../actions/TrunkShowActions';

class TrunkShowStore {
  constructor() {
    this.bindActions(TrunkShowActions);
    this.trunkId = 0;
    this.title = 'TBD';
    this.body = 'TBD';
    this.showAddBranch = false;
    this.branches = [];
  }

  onGetTrunkShowSuccess(data) {
    this.title = data[0].title;
    this.body = data[0].body;
    this.branches = data[1];
  }

  onGetTrunkShowFail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }

}

export default alt.createStore(TrunkShowStore);