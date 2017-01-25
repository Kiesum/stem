import alt from '../alt';

class AddTrunkActions {
  constructor() {
    this.generateActions(
      'addTrunkSuccess',
      'addTrunkFail',
      'updateBody',
      'invalidBody'
    );
  }

  addTrunk(body) {
    $.ajax({
      type: 'POST',
      url: '/api/trunks/new',
      data: { body: body }
    })
      .done((data) => {
        this.actions.addTrunkSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.addTrunkFail(jqXhr.responseJSON.message);
      })
  }
}

export default alt.createActions(AddTrunkActions);