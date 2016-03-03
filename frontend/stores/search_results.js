var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher'),
    SearchConstants = require('../constants/search_constants');

var _results = [];

var SearchResultsStore = new Store(Dispatcher);

SearchResultsStore.all = function () {
  return _results;
};

SearchResultsStore.__onDispatch = function (payload) {
  switch(payload.actionType){
    case SearchConstants.RECEIVE_SEARCH_RESULTS:
      console.log(payload.results);
      _results = payload.results;
      SearchResultsStore.__emitChange();
      break;
  }
};

module.exports = SearchResultsStore;
