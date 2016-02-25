var CategoryConstants = require('../constants/category_constants'),
    UserConstants = require('../constants/user_constants'),
    Dispatcher = require('../dispatcher');

module.exports = {
  receiveAll: function (categories) {
    Dispatcher.dispatch({
      actionType: CategoryConstants.RECEIVE_ALL_CATEGORIES,
      categories: categories
    });
  },

  receiveSingleCategory: function (category) {
    Dispatcher.dispatch({
      actionType: CategoryConstants.RECEIVE_SINGLE_CATEGORY,
      category: category
    });
  },

  receiveCurrentUser: function (currentUser) {
    Dispatcher.dispatch({
      actionType: UserConstants.RECEIVE_CURRENT_USER,
      currentUser: currentUser
    });
  }
};
