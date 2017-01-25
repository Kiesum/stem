import alt from '../alt';

class RichTextActions {
  constructor() {
    this.generateActions(
        'addBranchFullSuccess',
        'addBranchFullFail',
      )
  }

  addBranchFull(data) {
    $.ajax({
      type: 'POST',
      url: '/api/branchfulls/new',
      data: { data: data }
    })
      .done((data) => {
        this.actions.addBranchFullSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.addBranchFullFail(jqXhr.responseJSON.message);
      })
  }
}

export default alt.createActions(RichTextActions);
