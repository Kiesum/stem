import alt from '../alt';

class BranchFullActions {
  constructor() {
    this.generateActions(
      'getBranchFullsSuccess',
      'getBranchFullsFail',
    );
  }

  getBranchFulls() {
    $.ajax({ url: '/api/branchfulls' })
      .done(data => {
        this.actions.getBranchFullsSuccess(data);
      })
      .fail(jqXhr => {
        this.actions.getBranchFullsFail(jqXhr.responseJSON.message);
      });
  }

}

export default alt.createActions(BranchFullActions);