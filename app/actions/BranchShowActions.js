import alt from '../alt';

class BranchShowActions {
  constructor() {
    this.generateActions(
      'getBranchShowSuccess',
      'getBranchShowFail'
    );
  }

  getBranchShow(branchId) {
    $.ajax({ url: '/api/branches/' + branchId })
      .done((data) => {
        this.actions.getBranchShowSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getBranchShowFail(jqXhr);
      });
  }

}

export default alt.createActions(BranchShowActions);