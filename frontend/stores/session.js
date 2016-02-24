var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher'),
    UserConstants = require('../constants/user_constants');

var user = {};

var SessionStore = new Store(Dispatcher);

SessionStore.user = function () {
  return user;
};

SessionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.RECEIVE_CURRENT_USER:
      user = payload.currentUser;
      console.log("SessionStore", user);
      SessionStore.__emitChange();
      break;
  }
};

module.exports = SessionStore;
