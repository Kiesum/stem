import alt from '../alt';

class AddBranchActions {
  constructor() {
    this.generateActions(
        'addBranchSuccess',
        'addBranchFail',
        'invalidBody',
      )
  }

  addBranch(body, parent) {
    $.ajax({
      type: 'POST',
      url: '/api/branches/new',
      data: { body: body, parent: parent}
    })
      .done((data) => {
        this.actions.addBranchSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.addBranchFail(jqXhr.responseJSON.message);
      })
  }
}

export default alt.createActions(AddBranchActions);
  
 