var ApiActions = require('../actions/api_actions');

module.exports = {
  fetchCategories: function () {
    $.ajax({
      url: '/api/categories',
      success: function (response) {
        console.log(response);
        ApiActions.receiveAll(response);
      }
    });
  },

  fetchCurrentUser: function () {
    $.ajax({
      url: '/api/current_user',
      success: function (response) {
        console.log(response);
        ApiActions.receiveCurrentUser(response);
      }
    });
  },

  updateUser: function () {
    $.ajax({
      url: '/api/current_user',
      success: function (response) {
        console.log(response);
        ApiActions.receiveCurrentUser(response);
      }
    });
  }
};
