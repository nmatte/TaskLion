var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher'),
    BookingConstants = require('../constants/booking_constants');

var booking = {};

var BookingStore = new Store(Dispatcher);

BookingStore.current = function () {
  return booking;
};

BookingStore.__onDispatch = function (payload) {
  switch(payload.actionType){
    case BookingConstants.UPDATE_BOOKING:
      booking = payload.booking;
      BookingStore.__emitChange();
  }
};

module.exports = BookingStore;
