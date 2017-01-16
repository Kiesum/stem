import alt from '../alt';

class AddTrunkActions {
  constructor() {
    this.generateActions(
      'addTrunkSuccess',
      'addTrunkFail',
      'updateTitle',
      'updateBody',
      'invalidTitle',
      'invalidBody'
    );
  }

  addTrunk(title, body) {
    $.ajax({
      type: 'POST',
      url: '/api/trunk',
      data: { title: title, body: body }
    })
      .done((data) => {
        this.actions.addTrunkSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.addTrunkFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(AddTrunkActions);