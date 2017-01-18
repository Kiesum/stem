import alt from '../alt';

class TrunkShowActions {
  constructor() {
    this.generateActions(
      'getTrunkShowSuccess',
      'getTrunkShowFail'
    );
  }

  getTrunkShow(trunkId) {
    $.ajax({ url: '/api/trunk/' + trunkId })
      .done((data) => {
        this.actions.getTrunkShowSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getTrunkShowFail(jqXhr);
      });
  }

}

export default alt.createActions(TrunkShowActions);