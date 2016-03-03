var SearchApiActions = require('../actions/search_api_actions');

module.exports = {
  searchFor: function (query) {
    $.ajax({
      type: 'GET',
      url: '/api/tasks/search',
      data: {query: query},
      success: function (response) {
        SearchApiActions.receiveSearchResults(response);
      }
    });

  }
};
