import alt from '../alt';
import BranchFullActions from '../actions/BranchFullActions';

class BranchFullStore {
  constructor() {
    this.bindActions(BranchFullActions);
    this.branchfulls = [];
  }

  onGetBranchFullsSuccess(data) {
    this.branchfulls = data;
  }

  onGetBranchFullsFail(errorMessage) {
    toastr.error(errorMessage);
  }

}

export default alt.createStore(BranchFullStore);