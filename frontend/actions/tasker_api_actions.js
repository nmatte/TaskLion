var TaskerConstants = require('../constants/tasker_constants'),
    Dispatcher = require('../dispatcher');

module.exports = {
  receiveTaskers: function (taskers) {
    Dispatcher.dispatch({
      actionType: TaskerConstants.RECEIVE_TASKERS,
      taskers: taskers
    });
  },

  receiveTask: function (task) {
    Dispatcher.dispatch({
      actionType: TaskerConstants.RECEIVE_TASK,
      task: task
    });
  },

  receiveTaskerUpdate: function (tasker) {
    Dispatcher.dispatch({
      actionType: TaskerConstants.RECEIVE_TASKER_UPDATE,
      tasker: tasker
    });
  },

  receiveAvailableTask: function (avTask) {
    Dispatcher.dispatch({
      actionType: TaskerConstants.RECEIVE_AVAILABLE_TASK,
      availableTask: avTask
    });
  }
};
