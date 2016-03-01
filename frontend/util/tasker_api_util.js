var TaskerApiActions = require('../actions/tasker_api_actions');

module.exports = {
  fetchTaskers: function (id) {
    $.ajax({
      url: '/api/tasks/' + id + "/taskers",
      success: function (response) {
        TaskerApiActions.receiveTaskers(response);
      }
    });

  },

  fetchTask: function (id) {
    $.ajax({
      url: '/api/tasks/' + id,
      success: function (response) {
        TaskerApiActions.receiveTask(response);
      }
    });
  },

  fetchReviews: function (id) {
    $.ajax({
      url: '/api/taskers/' + id + "/reviews",
      success: function (response) {
        TaskerApiActions.receiveTaskerUpdate({id: id, reviews: response});
      }
    });
  }

};
