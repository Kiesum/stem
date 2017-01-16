import alt from '../alt';

class TrunkActions {
  constructor() {
    this.generateActions(
      'getTrunksSuccess',
      'getTrunksFail',
    );
  }

  getTrunks() {
    $.ajax({ url: '/api/trunk' })
      .done(data => {
        this.actions.getTrunksSuccess(data);
      })
      .fail(jqXhr => {
        this.actions.getTrunksFail(jqXhr.responseJSON.message);
      });
  }

}

export default alt.createActions(TrunkActions);