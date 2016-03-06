var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher'),
    CategoryConstants = require('../constants/category_constants');

var _categories = {};

var CategoryStore = new Store(Dispatcher);

CategoryStore.all = function () {
  var keys = Object.keys(_categories);
  var categories = [];

  for (var i = 0; i < keys.length; i++) {
    var cat = _categories[keys[i]];
    categories.push(cat);
  }

  return categories;
};

CategoryStore.find = function (id) {
  return _categories[id] || {};
};

CategoryStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case CategoryConstants.RECEIVE_ALL_CATEGORIES:
      this.setCategories(payload.categories);
      CategoryStore.__emitChange();
      break;
    case CategoryConstants.RECEIVE_SINGLE_CATEGORY:
      _categories[payload.category.id] = payload.category;
      CategoryStore.__emitChange();
      break;
  }
};

CategoryStore.setCategories = function (categories) {
  _categories = {};
  for (var i = 0; i < categories.length; i++) {
    var cat = categories[i];

    _categories[cat.id] = cat;
  }
};

module.exports = CategoryStore;
