var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher'),
    TaskerConstants = require('../constants/tasker_constants');

var _taskers = {};

var TaskerStore = new Store(Dispatcher);

TaskerStore.all = function () {
  var keys = Object.keys(_taskers);
  var taskers = [];

  for (var i = 0; i < keys.length; i++) {
    var cat = _taskers[keys[i]];
    taskers.push(cat);
  }

  return taskers;
};

TaskerStore.find = function (id) {
  return _taskers[id];
};

TaskerStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case TaskerConstants.RECEIVE_TASKERS:
      this.setTaskers(payload.taskers);
      TaskerStore.__emitChange();
      break;
    case TaskerConstants.RECEIVE_TASKER_UPDATE:
      this.updateTasker(payload.tasker);
      TaskerStore.__emitChange();
      break;
  }
};

TaskerStore.setTaskers = function (taskers) {
  _taskers = {};
  for (var i = 0; i < taskers.length; i++) {
    var cat = taskers[i];

    _taskers[cat.id] = cat;
  }
};

TaskerStore.updateTasker = function (tasker) {
  if (_taskers[tasker.id] === undefined) {
    _taskers[tasker.id] = {};
  }

  var keys = Object.keys(tasker);

  for (var i = 0; i < keys.length; i++) {
    _taskers[tasker.id][keys[i]] = tasker[keys[i]];
  }
};

module.exports = TaskerStore;
