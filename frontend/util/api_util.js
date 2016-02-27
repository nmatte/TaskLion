var ApiActions = require('../actions/api_actions');

module.exports = {
  fetchCategories: function () {
    $.ajax({
      url: '/api/categories',
      success: function (response) {
        ApiActions.receiveAll(response);
      }
    });
  },

  fetchSingleCategory: function (id) {
    $.ajax({
      url: '/api/categories/' + id,
      success: function (response) {
        ApiActions.receiveSingleCategory(response);
      }
    });
  },

  fetchCurrentUser: function () {
    $.ajax({
      url: '/api/current_user',
      success: function (response) {
        ApiActions.receiveCurrentUser(response);
      }
    });
  },

  updateUser: function (user) {
    $.ajax({
      url: '/api/current_user',
      method: 'PATCH',
      data: user,
      dataType: 'json',
      success: function (response) {
        ApiActions.receiveCurrentUser(response);
      }
    });
  }
};
