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

  fetchTasker: function (id) {
    $.ajax({
      url: '/api/taskers/' + id,
      success: function (response) {
        TaskerApiActions.receiveTaskerUpdate(response);
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

  fetchAvailableTask: function (id) {
    $.ajax({
      url: '/api/available_tasks/' + id,
      success: function (response) {
        TaskerApiActions.receiveAvailableTask(response);
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
