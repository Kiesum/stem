import alt from '../alt';
import BranchShowActions from '../actions/BranchShowActions';

class BranchShowStore {
  constructor() {
    this.bindActions(BranchShowActions);
    this.parent_id = '';
    this.branchId = 0;
    this.title = 'TBD';
    this.body = 'TBD';
    this.branches = [];
  }

  onGetBranchShowSuccess(data) {
    this.parent_id = data[0].parent_id;
    this.title = data[0].title;
    this.body = data[0].body;
    this.branches = data[1];
  }

  onGetBranchShowFail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }

}

export default alt.createStore(BranchShowStore);