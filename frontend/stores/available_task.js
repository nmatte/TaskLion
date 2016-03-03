var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher'),
    TaskerConstants = require('../constants/tasker_constants');

var _availableTasks = {};

var AvailableTaskStore = new Store(Dispatcher);

AvailableTaskStore.find = function (id) {
  return _availableTasks[id];
};

AvailableTaskStore.__onDispatch = function (payload) {
  switch(payload.actionType){
    case TaskerConstants.RECEIVE_AVAILABLE_TASK:
      _availableTasks[payload.availableTask.id] = payload.availableTask;
      AvailableTaskStore.__emitChange();
      break;
  }
};

module.exports = AvailableTaskStore;
