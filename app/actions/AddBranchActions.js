import alt from '../alt';

class AddBranchActions {
  constructor() {
    this.generateActions(
        'addBranchSuccess',
        'addBranchFail',
        'updateParent',
        'updateTitle',
        'updateBody',
        'invalidTitle',
        'invalidBody',
      )
  }

  addBranch(parent, title, body) {
    $.ajax({
      type: 'POST',
      url: '/api/branches/new',
      data: { parent: parent, title: title, body: body }
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
  
 