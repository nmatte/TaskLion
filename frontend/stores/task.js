var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher'),
    TaskConstants = require('../constants/tasker_constants');

var _tasks = {};

var TaskStore = new Store(Dispatcher);

TaskStore.find = function (id) {
  return _tasks[id] || {};
};

TaskStore.__onDispatch = function (payload) {
  switch(payload.actionType){
    case TaskConstants.RECEIVE_TASK:
      _tasks[payload.task.id] = payload.task;
      TaskStore.__emitChange();
      break;
  }
};

module.exports = TaskStore;
