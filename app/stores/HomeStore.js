import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
  constructor() {
    this.bindActions(HomeActions);
    this.showAddBranch = false;
  }

  onGetTrunksSuccess(data) {
    this.trunks = data;
  }

  onGetTrunksFail(errorMessage) {
    toastr.error(errorMessage);
  }

}

export default alt.createStore(HomeStore);
