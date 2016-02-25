var TaskerApiActions = require('../actions/tasker_api_actions');

module.exports = {
  fetchTaskers: function (id) {
    $.ajax({
      url: '/api/tasks/' + id + "/taskers",
      success: function (response) {
        console.log("taskers for task" + id, response);
        TaskerApiActions.receiveTaskers(response);
      }
    });

  }
};
