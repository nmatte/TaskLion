var Dispatcher = require('../dispatcher'),
    SearchConstants = require('../constants/search_constants');

  module.exports = {
    receiveSearchResults: function (results) {
      Dispatcher.dispatch({
        actionType: SearchConstants.RECEIVE_SEARCH_RESULTS,
        results: results
      });
    }
  };
